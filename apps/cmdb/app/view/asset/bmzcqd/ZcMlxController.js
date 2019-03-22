Ext.define('Cmdb.view.asset.bmzcqd.ZcmlxController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.zc-mlx',

    onAdd: function () {
        this.open({
            xtype: 'zcmlx-add'
        }, {
            title: '新增',
            width: 700,
            height: 500
        })
    },
    onSure: function (btn) {
        var val = btn.up('zcmlx-add').getValues(),
            sx_name = val.sx_name,
            inherit = btn.up('zcmlx-add').ids,
            tree = this.lookup('mlxTree'),
            node = tree.getSelectionModel().getSelection(),
            dataset = [];
        if (node.length != 0) {
            var nodeData = node[0].data;
            if (nodeData.leaf) {
                node = node[0].parentNode;
            } else {
                node = node[0];
            }
        } else {
            node = tree.getRootNode();//得到树的根节点
        }
        Ext.Array.each(sx_name, (item, index, arr) => {
            if (item != "") {
                var obj = {
                    text: item,
                    code: val.sx_code[index],
                    type: val.sx_dataset[index]
                };
                dataset.push(obj);
            }
        });
        val.dataset = dataset;
        val.inherit = inherit;
        val.leaf = true;
        node.appendChild(val);//在该子节点下增加节点
        this.winClose(btn);
    },
    onCancel: function (btn) {
        this.winClose(btn);
    },
    onAddSx: function (btn) {
        var fieldSet = btn.up('fieldset'),
            items = {
                items: [{
                    xtype: 'textfield',
                    name: 'sx_name',
                    flex: 1,
                    fieldLabel: '名称'
                }, {
                    xtype: 'textfield',
                    name: 'sx_code',
                    flex: 1,
                    fieldLabel: '编码'
                }, {
                    xtype: 'textfield',
                    name: 'sx_dataset',
                    flex: 1,
                    fieldLabel: '编码'
                }, {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    tooltip: '添加',
                    handler: 'onAddSx'
                }]

            };
        fieldSet.add(items);
    },
    onChooseSx: function () {
        this.open({
            xtype: 'zc-choosesjy'
        }, {
            title: '选择数据元',
            width: 750,
            height: 500
        })
    },
    onCHooseGx: function () {
        this.open({
            xtype: 'zc-choosegx'
        }, {
            title: '选择关系',
            width: 750,
            height: 500
        })
    },
    onRen: function (text, a, b) {
        var me = this;
        text.getEl().on('click', function (p) {
            //处理点击事件代码
            if (me.getView().needTitle == null) {
                me.open({
                    xtype: 'zcmlx-grid'
                }, {
                    title: '选择' + text.fieldLabel,
                    needField: text,
                    needType: text.name
                })
            }

        });
    },
    onChooseSjySure: function (btn) {
        this.winClose(btn);
    },
    onChooseSjyCancel: function (btn) {
        this.winClose(btn);
    },
    onChooseGxSure: function (btn) {
        this.winClose(btn);
    },
    onChooseGxCancel: function (btn) {
        this.winClose(btn);
    },
    onInherit: function (btn) {
        this.open({
            xtype: 'zcmlx-grid',
            fieldSetView: btn.up('zcmlx-add').items.items[1],
            formView: btn.up('zcmlx-add')
        }, {
            title: '选择继承',
            width: 800,
            height: 500,
            scrollable: true
        })
    },
    onZcMlxGridSure: function (btn) {
        var gridView = btn.up('zcmlx-grid'),
            formView = gridView.formView,
            selection = gridView.getSelectionModel().getSelection();
        if (selection.length == 0) {
            Ext.Msg.alert('提示', '当前未选中目录项')
        } else {
            var a = selection[0].data.text,
                win = btn.up('window').needField,
                arr = [{
                    inherit: selection[0].data.inherit,
                    dataset: selection[0].data.dataset
                }],
                ids = [selection[0].data.id];
            for (var i = 1; i < selection.length; i++) {
                var item = selection[i].data;
                a += ',' + item.text;
                var obj = {
                    inherit: item.inherit,
                    dataset: item.dataset
                };
                arr.push(obj);
                ids.push(item.id)
            }
            if (btn.up('window').needType == null) {
                var store = gridView.getStore();
                var allInherit = [];
                for (var i in arr) {
                    var allItem = this.filterStore(store, arr[i].inherit);
                    for (var j in allItem) {
                        allInherit.push(allItem[j]);
                    }
                    var dataset = arr[i].dataset;
                    for (var k in dataset) {
                        allInherit.push(dataset[k]);
                    }
                }
                var object = [];
                for (var l in allInherit) {
                    var item = {
                        items: [
                            {
                                xtype: 'displayfield',
                                name: 'sx_name',
                                flex: 1,
                                fieldLabel: '名称',
                                submitValue: false,
                                value: allInherit[l].name
                            }, {
                                xtype: 'displayfield',
                                name: 'sx_code',
                                flex: 1,
                                fieldLabel: '编码',
                                submitValue: false,
                                value: allInherit[l].code
                            }, {
                                xtype: 'displayfield',
                                name: 'sx_dataset',
                                flex: 1,
                                fieldLabel: '类型',
                                submitValue: false,
                                value: allInherit[l].type
                            }]
                    };
                    object.push(item)
                }
                var items = {
                    items: [{
                        xtype: 'textfield',
                        name: 'sx_name',
                        flex: 1,
                        fieldLabel: '名称'
                    }, {
                        xtype: 'textfield',
                        name: 'sx_code',
                        flex: 1,
                        fieldLabel: '编码'
                    }, {
                        xtype: 'textfield',
                        name: 'sx_dataset',
                        flex: 1,
                        fieldLabel: '类型'
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-plus',
                        tooltip: '添加',
                        handler: 'onAddSx'
                    }]
                };
                gridView.fieldSetView.removeAll();
                gridView.fieldSetView.add(object);
                gridView.fieldSetView.add(items);
                formView.ids = ids;
            } else if (btn.up('window').needType == 'glgx') {
                win.setValue(a)
            } else if (btn.up('window').needType == 'ylgx') {
                win.setValue(a)
            }
            this.winClose(btn);
        }

    },
    onZcMlxGridCancel: function (btn) {
        this.winClose(btn);
    },
    winClose: function (btn) {
        btn.up('window').close();
    },
    onSelect: function (tree, record) {
        var me = this;
        var inherit = record.get('inherit'),//继承
            dataSet = record.get('dataset'),//自身的dataset
            treeStore = this.lookup('mlxTree').getStore(),
            allData = [],
            arr = [];
        Ext.Ajax.request({
            url: 'app/store/data/asset/entryset/package.json',
            success: function (rs) {
                var respon = JSON.parse(rs.responseText).children[0].children;
                Ext.Array.each(respon, (item, index) => {
                    var obj = {
                        text: item.text,
                        code: item.extraAttributes.name,
                        type: item.extraAttributes.dataType,
                    };
                    arr.push(obj);
                });
                if (record.get('id') == 'zy') {
                    var store = {
                        autoLoad: true,
                        data: arr
                    };
                } else {
                    if (inherit != []) {
                        var inheritData = me.filterStore(treeStore, inherit);
                        allData = me.arrAddInherit(inheritData).concat(dataSet);
                    } else {
                        allData = dataSet;
                    }
                    var store = {
                        autoLoad: true,
                        data: Ext.apply(me.arrAddInherit(arr), allData)
                    }
                }
                me.lookup('dataSetGrid').setStore(store);
            }
        })
    },
    arrAddInherit: function (data) {
        for (var i in data) {
            data[i].inherit = true
        }
        return data
    },
    filterStore: function (store, fliter) {
        var me = this,
            arr = [];
        for (var i in fliter) {
            store.each(function (record) {
                if (record.get('id') == fliter[i]) {
                    if (record.get('dataset') != []) {
                        for (var j in record.get('dataset')) {
                            arr.push(record.get('dataset')[j]);
                        }
                    }
                    if (record.get('inherit') != []) {
                        var arr2 = me.filterStore(store, record.get('inherit'));
                        for (var j in arr2) {
                            arr.push(arr2[j])
                        }
                    }
                }
            });
        }
        return arr

    }

});