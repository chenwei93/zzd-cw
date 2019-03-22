Ext.define('DA.view.entry.services.SchooseCreateJKController', function () {
        var allData = [],
            ids = [],
            gridView,
            panelType,
            shouldId;

        //ajax
        function getAjax(url, method, params, jude) {
            return new Ext.Promise(function (resolve, reject) {
                var requestBody = {
                    url: url,
                    method: method ? method : 'GET',
                    success: function (response) {
                        resolve(response.responseText);
                    },
                    failure: function (response) {
                        reject(response.status);
                    }
                };
                if (jude == 'formData') {
                    requestBody.params = params ? params : null;
                } else if (jude == 'json') {
                    requestBody.jsonData = params ? params : null;
                }
                Ext.Ajax.request(requestBody);
            });
        }

        return {
            extend: 'DA.base.ViewController',
            alias: 'controller.choose-createjk',

            onChooseYes: function (btn) {
                var me = this;
                var win = btn.up('window'),
                    needId = win.needId,
                    winPanel = win.winPanel,
                    clone = win.panelType,
                    judejk = me.lookup('judejk');
                allData = win.allData;
                gridView = win ? win.gridView : null;
                panelType = clone;
                win.close();
                // console.log(allData)
                if (allData.length == 1) {
                    me.ajaxLists(allData[0], 0, false, function () {
                        me.ajaxReference(false, winPanel, needId, judejk, allData[0].entityTitle);
                    });
                } else {
                    Ext.Array.map(allData, (items, index, arr) => {
                        if (index > 0) {
                            me.ajaxLists(items, index, true, function () {
                                if (index == arr.length - 1) {
                                    me.ajaxLists(allData[0], index, false, function () {
                                        me.ajaxReference(true, winPanel, needId, judejk, allData[0].entityTitle);
                                    });
                                }
                            });
                        }
                    });
                }
            },

            //各个Entry依次保存
            ajaxLists: function (item, index, jude, fn) {
                var me = this;
                getAjax('/rest/datasets', 'POST', me.orgSubDataSet(item, index), 'json').then((rs) => {
                    var orgSubEntry = me.orgSubEntry(item, rs);
                    return getAjax('/rest/entry' + orgSubEntry.params, orgSubEntry.method, orgSubEntry.items, 'formData').then((rs) => {
                        if (jude == true) {
                            ids.push(Ext.JSON.decode(rs));
                        }
                        shouldId = Ext.JSON.decode(rs);
                        fn();
                    });
                });
            },

            //绑定引用数据集
            ajaxReference: function (jude, winPanel, needId, judejk, needTitle) {
                var me = this,
                    id = shouldId ? shouldId : allData[0].xid,
                    ids = jude ? me.orgIds() : id,
                    url = '/rest/entry/' + id + '/joint/' + ids;
                getAjax(url).then((rs) => {
                    Ext.toast('保存成功');
                    winPanel.close();
                    if (gridView) {
                        gridView.getStore().reload();
                    }
                    //生成接口
                    if (judejk.value) {
                        me.createJk(id, needTitle);
                    }
                    if (panelType == 'clone') {
                        getAjax('/rest/entry/done/' + id, 'POST')
                    }
                });
            },

            //fields->items每一项的_class转换
            turnClass: function (fields) {
                Ext.Array.map(fields, (items) => {
                    items._class = 'dcsp.drdms.domain.dataset.Column';
                    if (items.attributes) {
                        items.attributes.display = items.display ? items.display : null;
                        items.attributes.query = items.query ? items.query : null;
                        items.attributes.joint = items.joint ? items.joint : null;
                    } else {
                        items.attributes = {
                            display: items.display ? items.display : null,
                            query: items.query ? items.query : null,
                            joint: items.joint ? items.joint : null
                        }
                    }
                });
                return fields
            },

            //组织fields保存的数据
            orgSubDataSet: function (items, index) {
                var me = this,
                    submitJson = {
                        title: items.entityTitle,
                        fields: me.turnClass(items.fields.items),
                        dataId: items.fields.dataId
                    };
                return submitJson
            },

            //组织数据集保存的数据：主要为添加datasetId
            orgSubEntry: function (items, rs) {
                var id = Ext.JSON.decode(rs).id,
                    params = items.id.indexOf('_not') < 0 ? '/' + items.xid : '';
                items.datasetId = id;
                return {
                    method: 'POST',
                    params: params,
                    items: items
                }
            },
            //组织最后提交的／ids
            orgIds: function () {
                var str = ids.join(',');
                return str
            },

            //生成接口
            createJk: function (needId, needTitle) {
                Ext.create({
                    xtype: 'window',
                    title: '生成接口',
                    width: 500,
                    height: 300,
                    model: true,
                    layout: 'fit',
                    needId: needId,
                    needTitle: needTitle,
                    items: [{
                        xtype: 'createjk'
                    }]
                }).show();
            },
            //取消
            onChooseNo: function (btn) {
                var win = btn.up('window');
                win.close();
            },

            //确定生成接口
            onCreateJkYes: function (btn) {
                var jkname = this.lookup('jkname').value,
                    jktype = this.lookup('jktype').lastValue,
                    id = btn.up('window').needId;
                var url = '/rest/generateApi/' + id + '?title=' + jkname + '&type=' + Object.values(jktype).join(',');
                Ext.Ajax.request({
                    url: url,
                    success: function () {
                        Ext.toast('接口生成成功。');
                        btn.up('window').close();

                    },
                    failure: function () {
                        Ext.toast('接口生成失败。');
                        btn.up('window').close();
                    }
                });
            },

            //取消
            onCreateJkNo: function (btn) {
                btn.up('window').close()
            },
            onCreateJKRender: function (view) {
                var win = view.up('window'),
                    needTitle = win.needTitle,
                    vm = view.getViewModel();
                vm.set('jkname', needTitle);
            }
        }
    }
);
