Ext.define('DA.view.entry.dataset.datasetEditController', function () {
    // 记录所有已选择的数据集数据
    var allData = [],
        comboData = [],
        ids = [],
        gridView,
        panelType;

    //ajax
    function getAjax(url, method, params, jude) {
        return new Ext.Promise(function (resolve, reject) {
            var requestBody = {
                url: url,
                method: method ? method : 'GET',
                success: function (response) {
                    resolve(Ext.JSON.decode(response.responseText));
                },
                failure: function (response) {
                    reject(response.status);
                }
            };
            if (jude == 'formData') {
                requestBody.params = params ? params : null;
            } else {
                requestBody.jsonData = params ? params : null;
            }
            Ext.Ajax.request(requestBody);
        });
    }

    function orgItemField(id, items) {
        return {
            id: id,
            items: items
        }
    }

    return {
        extend: 'DA.base.ViewController',
        alias: 'controller.dataset-edit',

        //生成数据集后加载数据
        onServicesRender: function (view) {
            allData = [];
            comboData = [];
            ids = [];
            var me = this,
                vm = view.getViewModel(),
                win = view.up('window'),
                clone = win.panelType,
                needId = win ? win.needId : null;
            gridView = win ? win.gridView : null;
            panelType = clone;
            //脚本自定义
            var sqlcustomize = this.lookup('sqlcustomize');
            if (clone != 'clone') {
                var select_tbar = this.lookup('select-tbar');
                if (select_tbar) {
                    select_tbar.setHidden(true);

                }
            }
            if (needId) {
                var type = clone ? clone : 'update';
                me.renderOneEntry(needId, type, function (rs) {
                    vm.setData(rs);
                    //脚本自定义如果有值
                    if (rs.extraAttributes) {
                        if (rs.extraAttributes.Dataset_dataId) {
                            sqlcustomize.setValue(rs.extraAttributes.Dataset_dataId);
                        }
                    }
                    ids = rs.references ? rs.references : ids;
                    me.renderIds();

                    //默认选中第一行数据
                    var tabView = me.lookup('dataset-tabview'),
                        grid = tabView.down('grid');
                    grid.getSelectionModel().select(0, true);

                });
            }

        },

        //根据id加载相关联的数据集
        renderIds: function () {
            var me = this;
            Ext.Array.map(ids, (items, index, arr) => {
                me.renderOneEntry(items, 'update');
            })
        },

        // 保存
        onSave: function (btn) {
            var me = this,
                baseForm = this.lookup('serbase'),
                baseValue = baseForm.getValues(),
                win = btn.up('window'),
                needId = win ? btn.up('window').needId : '';
            var jude = false;
            Ext.Array.every(allData, (item) => {
                if (item.fields == null) {
                    jude = true;
                    return false
                }
                return true
            });
            var sqlcustomize = this.lookup('sqlcustomize').getValue(),
                dataSetDataId = allData[0].extraAttributes.Dataset_dataId,
                fieldsdataId = allData[0].fields.dataId;
            if (fieldsdataId) {
                if (sqlcustomize == dataSetDataId && fieldsdataId == dataSetDataId) {
                    allData[0].fields.dataId = dataSetDataId;
                } else {
                    allData[0].fields.dataId = sqlcustomize + fieldsdataId;
                }
            } else {
                allData[0].fields.dataId = sqlcustomize;
            }

            if (jude) {
                Ext.toast('保存失败', '当前还有未处理的数据集相关字段信息');
            } else {
                //保存
                allData[0].entityTitle = baseValue.entityTitle ? baseValue.entityTitle : baseValue.resTitle;
                me.chooseJK(btn, needId);
            }

        },
        //是否保存
        chooseJK: function (btn, needId) {
            var winPanel = btn.up('window');
            Ext.create({
                xtype: 'window',
                title: '提示',
                modal: true,
                width: 300,
                height: 165,
                needId: needId,
                allData: allData,
                winPanel: winPanel,
                gridView: gridView,
                panelType: panelType,
                items: [{
                    xtype: 'choose-createjk'
                }]
            }).show();
        },

        //选择数据集
        onAddDataset: function (btn) {
            this.open({
                xtype: 'dataset-choose'
            }, {
                width: 600,
                height: 510,
                panelType: panelType,
                title: '选择数据集'
            });
        },

        //选择数据集列表加载数据
        onChooseDataSetRender: function (view) {
            var vm = view.getViewModel();
            vm.getStore('list').loadPage(1);
        },

        //复制数据集无id，post 引用数据集有id，put
        onChoose: function (view, rowindex, colindex, btn, time, record, tr) {
            var me = this,
                win = view.up('window'),
                panelType = win.panelType,
                id = record.get('id'),
                type = btn.type;
            if (panelType) {
                type = panelType
            }
            me.renderOneEntry(id, type);
        },

        //加载一条entry添加至allData
        renderOneEntry: function (id, type, callback) {
            var me = this, url = '', method = 'GET';
            if (type == 'clone') {
                url = '/rest/entry/clone/' + id;
                method = 'POST';
            } else {
                url = '/rest/entryDatas/' + id + '?thanks=false';
            }

            getAjax(url, method).then((rs) => {
                rs.xid = rs.id;
                rs.title = rs.entityTitle ? rs.entityTitle : rs.resTitle;
                rs.fields.id = rs.id;
                var key = rs.entityKey;
                if (key) {
                    var arr = key.split(':');
                    rs.sql = arr[1];
                    rs.table = arr[2];
                }
                //allData添加数据
                allData.push(rs);
                this.setDatasetStore();
                var fields = rs.fields.items;
                Ext.Array.map(fields, (items) => {
                    if (items.alias) {
                        me.upDateComboData(rs.id, rs.key, rs.title, items, 'insert');
                    }
                });
                if (callback) {
                    callback(rs);
                }
            })
        },

        //删除数据集数据
        onRemoveRecord: function (view, rowindex, colindex, btn, time, record, tr) {
            var me = this,
                id = record.get('xid'),
                grid = this.lookup('dataset-grid'),
                preId = grid.preId;
            Ext.Msg.confirm('提示', '确定删除当前数据集？', function (btn) {
                if (btn == 'yes') {
                    //删除allData中的数据
                    allData.splice(rowindex, 1);
                    if (preId == id) {
                        grid.setStore({data: []});
                    }
                    me.setDatasetStore();
                    //删除comboData中的数据
                    me.upDateComboData(id, null, null, null, 'replace');
                }
            });
        },

        //单条数据脚本自定义
        oninputScript: function (view, rowindex, colindex, btn, time, record, tr) {
            this.open({
                xtype: 'dataset-inputscript',
                needRecord: record,
                needAllData: allData
            }, {
                width: 700,
                height: '70%',
                scrollable: true,
                needRecord: record,
                title: '输入脚本'
            });
        },

        //allData设置数据集store
        setDatasetStore: function () {
            var tabView = this.lookup('dataset-tabview'),
                grid = tabView.down('grid');
            grid.getStore().setData(allData)
        },

        //allData设置数据集Field store
        setFieldStore: function (entryData, data) {
            var grid = this.lookup('dataset-grid');
            var dItem = data.items;
            Ext.Array.each(dItem, (item) => {
                    if (!item.hasOwnProperty('display')) {
                        if (item.attributes) {
                            var attr = item.attributes;
                            item.display = attr.display;
                            item.query = attr.query;
                            item.joint = attr.joint;
                        }
                    }
                }
            );
            var store = {
                autoLoad: true,
                data: dItem
            };
            grid.setStore(store);
            grid.preId = data.id;
            grid.entryData = entryData;
        },

        //清空数据集store
        onRefresh: function () {
            var me = this,
                grid = this.lookup('dataset-grid');
            Ext.Msg.confirm('提示', '确定删除所有数据集数据？', function (btn) {
                if (btn == 'yes') {
                    allData = [];
                    comboData = [];
                    grid.setStore({
                        data: []
                    });
                    grid.preId = null;
                    me.setDatasetStore();
                }
            })
        },

        //显示dataset
        onRowClick: function (view, record, tr, rowindex) {
            var me = this,
                id = record.get('xid'),
                entryData = {
                    id: id,
                    title: record.get('title'),
                    name: record.get('key')
                };
            //allData中该id对应的数据已有fields
            Ext.Array.every(allData, (item, index, array) => {
                if (item.fields && item.xid == id) {
                    me.setFieldStore(entryData, orgItemField(id, item.fields.items));
                    // jude = false;
                    return false
                }
                return true
            });
        },
        //设置外键store
        setEditorStore: function () {
            var tabView = this.lookup('dataset-tabview'),
                grid = tabView.down('grid'),
                editor = {
                    xtype: 'combo',
                    store: {
                        data: comboData
                    },
                    displayField: 'name',
                    valueField: 'value',
                };
            // grid.columns[5].setEditor(editor);
        },

        //选择主键
        onCheckChange: function (view, rowIndex, checked, record, e, xeOpts) {
            var me = this,
                grid = this.lookup('dataset-grid'),
                eData = grid.entryData,
                type = checked ? 'insert' : 'delete';
            me.upDateComboData(eData.id, eData.name, eData.title, record.data, type);
        },

        //添加表达式
        onEdit: function (view, rowindex, colindex, btn, time, record, tr) {
            this.open({
                xtype: 'dataset-input',
                needRecord: record,
                needAllData: allData
            }, {
                width: 700,
                height: '80%',
                scrollable: true,
                title: '输入脚本'
            });
        },

        //新增字段
        onAdd: function (btn) {
            var panel = btn.up('gridpanel'),
                preId = panel.preId;
            if (preId) {
                this.open({
                    xtype: 'dataset-adddataset'
                }, {
                    width: 600,
                    height: 250,
                    gridView: panel,
                    title: '新增数据集字段'
                })
            } else {
                Ext.toast('当前没有可操作的数据集字段表');
            }
        },

        //新增字段保存
        onAddDatasetSave: function (btn) {
            var me = this,
                form = btn.up('dataset-adddataset'),
                fValue = form.getValues(),
                win = btn.up('window'),
                gridView = win.gridView,
                entryData = gridView.entryData;
            Ext.Msg.confirm('提示', '确定保存?', function (chooce) {
                if (chooce == 'yes') {
                    //保存至当前store
                    gridView.getStore().insert(0, fValue);
                    Ext.Array.each(allData, (item) => {
                        if (item.xid == entryData.id) {
                            item.fields.items.push(fValue);
                        }
                    });
                    win.close();
                }
            })
        },

        //comboData 添加,删除数据
        upDateComboData: function (id, value, name, fValue, type) {
            //type：insert、delete、replace
            var obj = fValue ? {
                xid: id,
                value: value + '_' + fValue.name,
                name: name + '_' + fValue.title
            } : null;
            switch (type) {
                case 'insert':
                    comboData.push(obj);
                    break;
                case 'replace':
                    var etrComboData = [];
                    Ext.Array.map(comboData, (item, index) => {
                        if (item.xid != id) {
                            etrComboData.push(item)
                        }
                    });
                    comboData = etrComboData;
                    break;
                case 'delete' :
                    var index = Ext.Array.indexOf(comboData, obj);
                    comboData.splice(index, 1);
                    break;
            }
            this.setEditorStore();
        },

        //取消新增字段保存
        onAddDatasetCancel: function (btn) {
            Ext.Msg.confirm('提示', '确定放弃保存？', function (chooce) {
                if (chooce == 'yes') {
                    btn.up('window').close();
                }
            })
        },

        //fieldGrid 删除字段信息
        onRemove: function (view, rowindex, colindex, btn, time, record, tr) {
            var store = view.getStore(),
                grid = view.up('dataset-grid'),
                eData = grid.entryData;
            if (record.get('alias')) {
                //删除comboData中的数据
                this.upDateComboData(eData.id, eData.name, eData.title, record.data, 'delete');
            }
            if (record.get('name') != 'id') {
                //删除fieldGrid中数据
                store.removeAt(rowindex);
            }
        },


        //operation 选择操作符
        onOperation: function (btn) {
            var btnType = btn.btnType,
                text = btn.text;
            var expression = this.lookup('sqlcustomize'),
                expression_value = expression.getValue();
            var type = 'operation';
            if (text == '=') {
                text = btn.showText;
                type = 'eq';
            }
            this.functioninsertValue(expression, text, type)
        },
        //插入方法
        functioninsertValue: function (el, value, type) {
            value = ' ' + value + ' ';
            if (el.inputEl.dom.setSelectionRange) {
                var withIns = el.inputEl.dom.value.substring(0, el.inputEl.dom.selectionStart) + value;//获取光标前的文本+value
                var pos = withIns.length;//获取光标前文本的长度
                el.inputEl.dom.value = withIns
                    + el.inputEl.dom.value.substring(el.inputEl.dom.selectionEnd, el.inputEl.dom.value.length);//光标前文本+获取光标后文本
                var needPos = pos;
                if (type == 'fn' || type == 'eq') {
                    needPos = pos - 2;
                }
                el.inputEl.dom.focus();
                setTimeout(function () {
                    el.inputEl.dom.setSelectionRange(needPos, needPos);//设定光标位置
                }, 0);

            }
        },
        //分类grid单击每一条数据
        onRowXClick: function (view, record, rowindex, colindex, btn, time, tr) {
            var storeData = [];
            var useAllData = allData;
            Ext.Array.each(useAllData, (item, index, arr) => {
                item.name = item.entityKey;
            });
            if (record.data.items.length != 0) {
                storeData = record.data.items
            } else {
                if (record.get('code') == 'entry') {
                    storeData = useAllData
                } else if (record.get('code') == 'zd') {
                    var showArr = [];
                    for (var i in useAllData) {
                        var nItem = useAllData[i].fields.items;
                        for (var j in nItem) {
                            if (nItem[j].title.indexOf(useAllData[i].entityTitle) < 0) {
                                nItem[j].title = useAllData[i].entityTitle + '-' + nItem[j].title;

                            }
                            showArr.push(nItem[j]);
                        }
                    }
                    storeData = showArr;
                }
            }
            this.lookup('showGrid').setStore({
                data: storeData
            })
        },
        //双击输入
        onRowDBXClick: function (view, record, tr, index, a, event) {
            var name = record.get('name'),
                title = record.get('title'),
                vm = this.getViewModel(),
                type = record.get('type'),
                expression = this.lookup('sqlcustomize');
            var useName = '';
            if (type == 'fn') {
                useName = name
            } else if (type == 'operation') {
                if (record.get('code') == 'equal') {
                    type = 'eq'
                }
                useName = name
            } else {
                useName = '$' + name
            }
            vm.set('showText1', title + ':' + name);
            this.functioninsertValue(expression, useName, type)
        },
    }
});
