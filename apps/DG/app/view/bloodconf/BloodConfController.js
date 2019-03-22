Ext.define('DG.view.bloodconf.BloodConfController', function () {
    var confList = [];
    return {
        extend: 'DG.base.ViewController',
        alias: 'controller.bloodconf',

        initViewModel: function (vm) {
            vm.getStore('list').loadPage(1);
        },
        //血缘配置
        onConf: function (btn) {
            confList = [];
            this.open({
                xtype: 'confpanel'
            }, {
                width: '90%',
                height: 620,
                title: '血缘配置'
            })
        },
        //保存
        onSave: function (btn) {
            var sGrid = this.lookup('shang'),
                sSelection = sGrid.getSelection(),
                sLength = sSelection.length,
                xGrid = this.lookup('xia'),
                xSelecton = xGrid.getSelection(),
                xLength = xSelecton.length;
            if (sLength == 0 && xLength == 0) {
                Ext.toast('请选择上级、下级数据库后再进行保存操作')
            } else if (sLength == 0 && xLength != 0) {
                Ext.toast('请选择上级数据库后再进行保存操作')
            } else if (sLength != 0 && xLength == 0) {
                Ext.toast('请选择下级数据库后再进行保存操作')
            } else {
                var sData = sSelection[0].data,
                    xData = xSelecton[0].data;
                var data = [{
                    s: sData,
                    x: xData,
                    title: sData.title + '=>' + xData.title,
                    name: sData.name + '_' + xData.name
                }];
                this.addConfListData(data);
                this.setMatchStore();
            }

        },
        //移除
        onRemove: function (btn) {
            var grid = this.lookup('match'),
                selection = grid.getSelection();
            if (selection.length == 0) {
                Ext.toast('请选择了对应关系后再进行移除操作');
            } else {
                var data = selection[0].getData();
                var rIndex;
                Ext.Array.each(confList, (item, index) => {
                    if (data.name == item.name) {
                        rIndex = index;
                    }
                });
                confList.splice(rIndex, 1);
                this.setMatchStore()
            }
        },

        //自动匹配
        onAutoMatch: function (btn) {
            var data = [];
            var shangGrid = this.lookup('shang'),
                shangStore = shangGrid.getStore(),
                shangData = shangStore.data.items,
                xiaGrid = this.lookup('xia'),
                xiaStore = xiaGrid.getStore(),
                xiaData = xiaStore.data.items;
            if (shangData.length > 0 && xiaData.length > 0) {
                Ext.Array.each(shangData, (sitem, sindex, sarr) => {
                    Ext.Array.each(xiaData, (xitem, xindex, xarr) => {
                        if (xitem.get('name') == sitem.get('name')) {
                            var a = {
                                name: sitem.get('name') + '_' + xitem.get('name'),
                                title: sitem.get('title') + '=>' + xitem.get('title'),
                                s: sitem.getData(),
                                x: xitem.getData()
                            };
                            data.push(a)
                        }
                    });
                });
                this.addConfListData(data);
                this.setMatchStore();
            } else {
                Ext.toast('请先选择上、下级数据项');
            }

        },

        // confList addData
        addConfListData: function (arr) {
            Ext.Array.each(arr, (item) => {
                var jude = true,
                    name = item.name;
                if (confList.length == 0) {
                    confList.push(item);
                } else {
                    Ext.Array.each(confList, (item1) => {
                        if (item1.name == name) {
                            jude = false;
                        }
                    });
                    if (jude) {
                        confList.push(item);
                    }
                }

            })
        },

        //matchGrid设置store
        setMatchStore: function () {
            console.log('matchData', confList);
            var grid = this.lookup('match');
            grid.setStore({
                data: confList
            })
        },

        //最终保存
        onSaveAll: function (btn) {
            var me = this;
            Ext.Msg.confirm('提示', '确定保存当前配置？', function (choose) {
                if (choose == 'yes') {
                    var view = me.getView(),
                        sData = view.shang,
                        xData = view.xia;
                    var columnMapping = [];
                    Ext.Array.each(confList, (item, index, arr) => {
                        var x = {
                            sourceColumnCh: item.s.title,
                            sourceColumnEn: item.s.name,
                            targetColumnCh: item.x.title,
                            targetColumnEn: item.x.name

                        };
                        columnMapping.push(x);
                    });
                    var subMitData = {
                        source: {
                            nameCh: sData.get('entityTitle'),
                            nameEn: sData.get('entityKey'),
                            description: sData.get('summary')
                        },
                        target: {
                            nameCh: xData.get('entityTitle'),
                            nameEn: xData.get('entityKey'),
                            description: xData.get('summary')
                        },
                        columnMpping: columnMapping
                    };
                    console.log('提交数据', subMitData);
                    Ext.Ajax.request({
                        url: '/narcissus-data-bond-rest/data/bond/table/add',
                        method: 'POST',
                        jsonData: subMitData,
                        success: function () {
                            var win = btn.up('window');
                            win.close();
                            me.getView().getStore().reload();
                            Ext.toast('保存成功')
                        },
                        failure: function () {
                            var win = btn.up('window');
                            win.close();
                            me.getView().getStore().reload();
                            Ext.toast('保存失败')
                        }
                    });

                }
            })
        },
        //详情
        onDetail: function (view, row, col, btn, a, record, tr) {
            this.open({
                xtype: 'bloodconf-detail'
            }, {
                title: '详情',
                width: 950,
                height: 650,
            })
        },
        onSearch: function (btn) {
            var view = this.getView(),
                // store = view.getStore(),
                cName = this.lookup('sourceColumnCh'),
                eName = this.lookup('sourceColumnEn'),
                colName = this.lookup('sourceNameCh'),
                colDes = this.lookup('sourceNameEn');
            var cData = cName.getValue(),
                eData = eName.getValue(),
                colData = colName.getValue(),
                desData = colDes.getValue();
            var json = {
                "rows": 15,
                "entity": {
                    "sourceColumnCh": cData,
                    "sourceColumnEn": eData,
                    "sourceNameCh": colData,
                    "sourceNameEn": desData
                }
            };
            this.reloadStore(json, view);

        },
        reloadStore: function (json, view) {
            var store = {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/narcissus-data-bond-rest/data/bond/table/column/mapping/pageList',
                    actionMethods: {
                        create: 'POST',
                        read: 'POST',
                        update: 'POST',
                        destroy: 'POST'
                    },
                    paramsAsJson: true,
                    extraParams: json,
                    reader: {
                        rootProperty: 'list'
                    }
                }
            };
            view.setStore(store)
        },
        onReset: function (btn) {
            var view = this.getView(),
                store = view.getStore(),
                cName = this.lookup('sourceColumnCh'),
                eName = this.lookup('sourceColumnEn'),
                colName = this.lookup('sourceNameCh'),
                colDes = this.lookup('sourceNameEn');
            cName.setValue('');
            eName.setValue('');
            colName.setValue('');
            colDes.setValue('');
            var json = {
                "rows": 15,
                "entity": {
                    "sourceColumnCh": "",
                    "sourceColumnEn": "",
                    "targetColumnCh": "",
                    "targetColumnEn": ""
                }
            };
            this.reloadStore(json, view);
        },

        onDelete: function (view, row, col, btn, a, record, tr) {
            var me = this,
                id = record.get('id');
            Ext.Msg.confirm('提示', '确定删除？', function (chooce) {
                if (chooce == 'yes') {
                    Ext.Ajax.request({
                        url: '/narcissus-data-bond-rest/data/bond/table/column/mapping/' + id,
                        method: 'POST',
                        success: function () {
                            Ext.toast('删除成功');
                            me.getView().getStore().reload();
                        },
                        failure: function () {
                            Ext.toast('删除失败');
                            me.getView().getStore().reload();
                        }
                    })
                }
            })
        },
        //血缘配置
        onChooseEntry: function (btn) {
            this.open({
                xtype: 'choose-entry'
            }, {
                title: '选择资源',
                extra: btn.extra,
                width: '70%'
            })
        },
        //选择主机
        rNodeChange: function (combo, now, pre) {
            this.changeRpoolStore(now);
        },
        //选择资源池
        rPoolChange: function (combo, now, pre) {
            var grid = combo.up('grid');
            var store = {
                autoLoad: true,
                model: 'Resource',
                proxy: {
                    type: 'ajax2',
                    needDG: false,
                    url: '/rbase/api/resources/search/findByLocatorPoolCode?poolCode=' + now
                }
            };
            if (now) {
                grid.setStore(store);

            }
        },
        //选择资源主机后修改资源池store
        changeRpoolStore: function (id) {
            var rPool = this.lookup('rPool'),
                store = {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax2',
                        needDG: false,
                        url: '/rbase/api/resourcePools/search/findByResourceNode?nodeId=' + id
                    }
                };
            rPool.setValue('');
            rPool.setStore(store);
        },
        //选择目录
        onRowDbClick: function (view, record, tr, rowindex) {
            var vm = this.getViewModel(),
                formView = this.getView(),
                name = record.get('entityTitle'),
                win = view.up('window'),
                extra = win.extra,
                dataItem = extra == 'shang' ? 'sTable' : 'xTable',
                grid = this.lookup(extra);
            formView[extra] = record;
            vm.set(dataItem, name);
            grid.setStore({
                data: record.get('metadata').fields.items
            });
            win.close();
        },

        //加载
        onConfPanelRender: function (view) {
            var vm = this.getViewModel();
            vm.set('sTable', '');
            vm.set('xTable', '');
        },
    }

});
