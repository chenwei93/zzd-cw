Ext.define('DA.view.mgr.workorder.ZcBdController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.zc-bd',


    onEdit: function (view, rowinde, colindex, btn, event, record, tr) {
        this.open({
            xtype: 'zcbd-edit',
            renderRecord: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            width: 750,
            height: 500,
            title: record.get('bd_title')
        })
    },

    onRen: function (p, event) {

        var me = this;

        function over(form) {
            form.items.items[1].show();
        }

        function leave(form) {
            form.items.items[1].hide();
        }

        p.getEl().on('mouseover', function (event, item, obj) {
            this.dom.style.border = '2px dashed #38AEF2';
            this.dom.style.cursor = 'pointer';
            over(p);
        });

        p.getEl().on('mouseleave', function () {
            this.dom.style.border = '0px solid #000';
            this.dom.style.cursor = 'default';
            leave(p);
        });

        p.getEl().on('click', function (event) {
            if (Ext.getCmp('editItem')) {
                var win = Ext.getCmp('editItem');
                win.close();
            }
            if (p.columnWidth == 0.5 && event.pageX < 375) {
                var x = Number(p.up('window').x) + 375;
            } else {
                var x = Number(p.up('window').x) + 720;
            }
            me.open({
                xtype: 'zcbd-itemedit',
                formView: p
            }, {
                title: '修改字段',
                id: 'editItem',
                header: false,
                frame: false,
                border: false,
                alwaysOnTop: true,
                baseCls: '',
                shadow: false,
                zIndex: 999,
                width: 300,
                height: 400,
                x: x,
                y: Number(p.up('window').y) + 30
            })
        })
    },
    onDelete: function (btn, event) {
        var panel = btn.up('zcbd-edit'),
            form = btn.up('form');
        panel.remove(form);
    },
    onZcBdEditRender: function (view, btn) {
        if (view.renderRecord != null) {
            var items = view.renderRecord.get('items');
            if (items != null && items.length != 0) {
                var arr = [];
                for (var i in items) {
                    if (items[i].show_type == 'combo') {
                        var obj = [
                            {
                                xtype: items[i].show_type,
                                flex: 1,
                                name: items[i].code,
                                fieldLabel: items[i].name,
                                displayField: 'showname',
                                valueField: 'value',
                                store: {
                                    fields: ['showname', 'value'],
                                    data: items[i].store
                                }
                            }, {
                                xtype: 'button',
                                border: false,
                                style: {
                                    "background-color": "rgba(255,255,255,0)",
                                    "color": '#38AEF2'
                                },
                                iconCls: 'x-fa fa-trash',
                                tooltip: '删除',
                                handler: 'onDelete',
                                hidden: true,
                                width: 30
                            }];
                    } else if (items[i].show_type == 'radiogroup') {
                        var obj = [
                            {
                                xtype: items[i].show_type,
                                name: items[i].code,
                                fieldLabel: items[i].name,
                                flex: 1,
                                items: items[i].store
                            }, {
                                xtype: 'button',
                                border: false,
                                style: {
                                    "background-color": "rgba(255,255,255,0)",
                                    "color": '#38AEF2'
                                },
                                iconCls: 'x-fa fa-trash',
                                tooltip: '删除',
                                handler: 'onDelete',
                                hidden: true,
                                width: 30
                            }];
                    } else {
                        var obj = [
                            {
                                xtype: items[i].show_type,
                                flex: 1,
                                name: items[i].code,
                                fieldLabel: items[i].name
                            }, {
                                xtype: 'button',
                                border: false,
                                style: {
                                    "background-color": "rgba(255,255,255,0)",
                                    "color": '#38AEF2'
                                },
                                iconCls: 'x-fa fa-trash',
                                tooltip: '删除',
                                handler: 'onDelete',
                                hidden: true,
                                width: 30
                            }];
                    }

                    var formItem = {
                        xtype: 'form',
                        columnWidth: items[i].percent,
                        bodyPadding: 10,
                        layout: 'hbox',
                        listeners: {
                            render: 'onRen'
                        },
                        items: obj
                    };
                    arr.push(formItem);
                }
                view.add(arr);
            }

        } else {
            var record = view.JCRecord,
                treeStore = view.JCStore,
                inherit = record.get('inherit'),
                dataset = record.get('dataset');
            var allData = [];
            if (inherit != []) {
                var inheritData = this.filterStore(treeStore, inherit);
                allData = inheritData.concat(dataset);
            } else {
                allData = dataset;
            }
            var arr = [];
            for (var i in allData) {
                var fieldLabel = allData[i].name,
                    name = allData[i].code,
                    xtype = allData[i].show_type,
                    columnWidth = allData[i].percent;
                var obj = [{
                    name: name,
                    fieldLabel: fieldLabel,
                    flex: 1,
                    xtype: xtype
                }, {
                    xtype: 'button',
                    border: false,
                    style: {
                        "background-color": "rgba(255,255,255,0)",
                        "color": '#38AEF2'
                    },
                    iconCls: 'x-fa fa-trash',
                    tooltip: '删除',
                    handler: 'onDelete',
                    hidden: true,
                    width: 30
                }];
                if (xtype == 'combo') {
                    obj[0].displayField = 'showname';
                    obj[0].valueField = 'value';
                    obj[0].store = {
                        fields: ['showname', 'value'],
                        data: allData[i].store
                    }
                } else if (xtype == 'radiogroup') {
                    obj[0].items = allData[i].data;
                }
                var formItem = {
                    xtype: 'form',
                    columnWidth: columnWidth,
                    bodyPadding: 10,
                    layout: 'hbox',
                    listeners: {
                        render: 'onRen'
                    },
                    items: obj
                };
                arr.push(formItem);
            }
            view.add(arr);
        }
    },
    onZcBdItemEditRender: function (view) {
        var formView = view.formView.items.items[0],
            value = formView.initialConfig;
        var obj = {
            name: value.fieldLabel,
            code: value.name,
            show_type: value.xtype,
            type: 'string',
            percent: view.formView.columnWidth
        };
        view.getViewModel().set(obj)
    },
    onChange: function (view, value, pre) {
        if (view.getValue() == 'combo') {
            var item = {
                xtype: 'fieldset',
                reference: 'fieldset',
                columnWidth: 1,
                fieldsetType: 'combo',
                defaults: {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        labelWidth: 45,
                        margin: '10 10 10 0'
                    }
                },
                items: [{
                    items: [{
                        xtype: 'textfield',
                        name: 'disname',
                        fieldLabel: '选项',
                    }, {
                        xtype: 'textfield',
                        name: 'discode',
                        fieldLabel: '编码',
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-plus',
                        tooltip: '添加',
                        width: 30,
                        handler: function (btn) {
                            me.onAddSx(btn);
                        }
                    }]

                }]
            }

        }
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

    },
    onZcBdEditAdd: function (btn) {
        if (Ext.getCmp('editItem') != null) {
            Ext.getCmp('editItem').close();
        }
        var x = Number(btn.up('window').x) + 750;
        this.open({
            xtype: 'zcbd-additem',
            formView: btn.up('zcbd-edit')
        }, {
            title: '新增字段',
            width: 300,
            header: false,
            frame: false,
            border: false,
            baseCls: '',
            shadow: false,
            height: 500,
            x: x,
            y: Number(btn.up('window').y)
        })
    },
    onZcBdAddItemChange: function (combo, value, pervalue, event) {
        var me = this;
        if (value == 'combo') {
            var item = {
                xtype: 'fieldset',
                reference: 'fieldset',
                columnWidth: 1,
                fieldsetType: 'combo',
                defaults: {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        labelWidth: 45,
                        margin: '10 10 10 0'
                    }
                },
                items: [{
                    items: [{
                        xtype: 'textfield',
                        name: 'disname',
                        fieldLabel: '选项',
                    }, {
                        xtype: 'textfield',
                        name: 'discode',
                        fieldLabel: '编码',
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-plus',
                        tooltip: '添加',
                        width: 30,
                        handler: function (btn) {
                            me.onAddSx(btn);
                        }
                    }]

                }]
            }
        } else if (value == 'radiogroup') {
            var item = {
                xtype: 'fieldset',
                reference: 'fieldset',
                fieldsetType: 'radio',
                columnWidth: 1,
                defaults: {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        labelWidth: 45,
                        margin: '10 10 10 0'
                    }
                },
                items: [{
                    items: [{
                        xtype: 'textfield',
                        name: 'boxLabel',
                        fieldLabel: '选项',
                    }, {
                        xtype: 'textfield',
                        name: 'inputValue',
                        fieldLabel: '编码',
                    }, {
                        xtype: 'button',
                        width: 30,
                        iconCls: 'x-fa fa-plus',
                        tooltip: '添加',
                        handler: function (btn) {
                            me.onAddSx(btn);
                        }
                    }]

                }]
            }
        }
        if (combo.up('zcbd-additem').items.items.length == 6) {
            combo.up('zcbd-additem').remove(combo.up('zcbd-additem').items.items[5])
        }
        combo.up('zcbd-additem').add(item);
    },
    onAddSx: function (btn) {
        var me = this;
        var fieldset = btn.up('fieldset'),
            fieldsetType = fieldset.fieldsetType;
        if (fieldsetType == 'radio') {
            var items = {
                items: [{
                    xtype: 'textfield',
                    name: 'boxLabel',
                    fieldLabel: '选项',
                }, {
                    xtype: 'textfield',
                    name: 'inputValue',
                    fieldLabel: '编码',
                }, {
                    xtype: 'button',
                    width: 30,
                    iconCls: 'x-fa fa-plus',
                    tooltip: '添加',
                    handler: function (btn) {
                        me.onAddSx(btn);
                    }
                }]
            };
        } else {
            var items = {
                items: [{
                    xtype: 'textfield',
                    name: 'disname',
                    fieldLabel: '选项',
                }, {
                    xtype: 'textfield',
                    name: 'discode',
                    fieldLabel: '编码',
                }, {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    tooltip: '添加',
                    width: 30,
                    handler: function (btn) {
                        me.onAddSx(btn);
                    }
                }]

            };
        }
        fieldset.add(items);
    },
    onZcBdAddItemSure: function (btn) {
        var me = this,
            formValue = btn.up('zcbd-additem').getValues(),
            formEditView = btn.up('zcbd-additem').formView;

        var obj = [{
            name: formValue.code,
            fieldLabel: formValue.name,
            flex: 1,
            xtype: formValue.show_type ? formValue.show_type : 'textfield',
        }, {
            xtype: 'button',
            border: false,
            style: {
                "background-color": "rgba(255,255,255,0)",
                "color": '#38AEF2'
            },
            iconCls: 'x-fa fa-trash',
            tooltip: '删除',
            handler: 'onDelete',
            hidden: true,
            width: 30
        }];

        if (formValue.disname != null) {
            obj[0].displayField = 'name';
            obj[0].valueField = 'value';
            obj[0].store = {
                fields: ['name', 'value'],
                data: me.orgStore(formValue, 'combo')
            };
        } else if (formValue.boxLabel != null) {
            obj[0].items = me.orgStore(formValue, 'radio');
        }
        var formItem = {
            xtype: 'form',
            columnWidth: formValue.percent != '' ? formValue.percent : 1,
            bodyPadding: 10,
            layout: 'hbox',
            listeners: {
                render: 'onRen'
            },
            items: obj
        };

        formEditView.add(formItem);
        btn.up('window').close();


        console.log(formEditView, formItem);

    },
    orgStore: function (value, type) {
        function isArray(o) {
            return Object.prototype.toString.call(o) == '[object Array]';
        }

        var arr = [];
        if (type == 'combo') {
            var name = value.disname,
                code = value.discode;
        } else {
            var name = value.boxLabel,
                code = value.inputValue;
        }
        if (isArray(name)) {
            for (var i in name) {
                var item = name[i];
                if (type == 'combo') {
                    var obj = {
                        name: item,
                        code: code[i]
                    };
                } else {
                    var obj = {
                        boxLabel: item,
                        inputValue: code[i]
                    };
                }
                arr.push(obj);
            }
        } else {
            if (type == 'combo') {
                arr = {
                    name: name,
                    code: code
                };
            } else {
                arr = {
                    boxLabel: name,
                    inputValue: code
                };
            }
        }
        return arr;
    },
    onZcBdAddItemCancel: function (btn) {
        btn.up('window').close();
    },
    onAdd: function (btn) {
        this.open({
            xtype: 'zcbd-add'
        }, {
            width: 650,
            height: 430,
            title: '新增'
        })
    },
    onChoose: function (view, col, row, btn, a, record) {
        var store = view.getStore();
        view.up('window').close();
        this.open({
            xtype: 'zcbd-edit',
            JCRecord: record,
            JCStore: store
        }, {
            width: 750,
            height: 500,
            title: '编辑'
        })
    },
    onZcBdEditSure: function (btn) {
        var win = btn.up('window');
        var formItems = btn.up('zcbd-edit').items.items,
            formValue = btn.up('zcbd-edit').getValues();
        var formArr = [];
        for (var j = 0; j < formItems.length; j++) {
            if (formItems[j] != null) {
                formArr.push(formItems[j].items.items[0])
            }
        }
        var items = [];
        for (var i in formArr) {
            // var a = Number(i) + 3;
            var obj = {
                name: formArr[i].fieldLabel,
                code: formArr[i].name,
                type: 'string',
                show_type: formArr[i].xtype,
                percent: formItems[i].columnWidth
            };

            if (formArr[i].xtype == 'combo') {
                var store = formArr[i].store.getData().items;
                for (var j in store) {
                    store[j] = store[j].getData();
                }
                obj.store = store
            } else if (formArr[i].xtype == 'radiogroup') {
                var store = formArr[i].items.items;
                for (var k in store) {
                    store[k] = {
                        boxLabel: store[k].boxLabel,
                        inputValue: store[k].inputValue
                    };
                }
                obj.store = store;
            }
            items.push(obj);
        }
        var subData = {
            items: items
        };
        if (btn.up('zcbd-edit').renderRecord) {
            btn.up('zcbd-edit').renderRecord.set('items', items);
        } else {
            this.lookup('items').setValue(JSON.stringify(items));
        }
        win.close();
    },
    onZcBdEditCancel: function (btn) {
        btn.up('window').close();
    },
    onZcBdItemEditSure: function (btn) {
        var form = btn.up('zcbd-itemedit'),
            bigForm = form.formView,
            name = form.getValues().name;
        Ext.getDom(bigForm.items.items[0]).getEl().dom.childNodes[0].innerText = name + ':';
        form.up('window').close();
    },
    onZcBdEditInherit: function (btn) {
        this.open({
            xtype: 'zcbd-grid'
        }, {
            width: 650,
            height: 500,
            title: '配置'
        })
    },
    onZcBdAddSure: function (btn) {
        var value = btn.up('zcbd-add').getValues();
        if (value.items) {
            value.items = JSON.parse(value.items);
        }
        if (btn.up('zcbd-add').record) {
            btn.up('zcbd-add').record.commit();
            btn.up('zcbd-add').record.set('items', value.items);
        } else {
            this.getView().getStore().add(value);
        }
        btn.up('window').close();
    },
    onItemEdit: function (view, rowinde, colindex, btn, event, record, tr) {
        this.open({
            xtype: 'zcbd-add',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            width: 650,
            height: 430,
            title: '新增'
        })
    },
    onZcBdAddRender: function (view) {
        if (view.record) {
            this.lookup('items').setValue(JSON.stringify(view.record.data));
        }
    }
});
