Ext.define('DA.view.entry.services.ServicesOperateController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.services-operate',


    onChooseRender: function (view) {
        view.getViewModel().getStore('list').loadPage(1);
    },

    onOperateRender: function (view) {
        var panel = view.lookup('seractive');
        panel.changeActiveItem = this.changeActiveItem;
    },

    //显示不同的activeitem
    changeActiveItem: function (panel, type) {
        var arr = {
            'ENTITY': 0,
            'ENTITY!': 1,
            'EXT_UPDATE': 2,
            'EXT_ATTACHMENT': 3
        };
        panel.setActiveItem(arr[type]);
    },

    //选择数据集
    chooseEntry: function () {
        var me = this;
        Ext.create({
            xtype: 'window',
            width: 600,
            height: 460,
            title: '选择数据集',
            layout: 'fit',
            autoShow: true,
            items: [{
                flex: 1,
                xtype: 'services-choose',
                gridView: this.getView()
            }]
        });
    },

    // 选择一个数据
    onRowdbclick: function (view, record, tr) {
        var me = this,
            panel = view.grid.gridView,
            vM = panel.getViewModel();
        Ext.Ajax.request({
            url: '/rest/entryDatas/' + record.get('id') + '?thanks=false',
            success: function (rs) {
                var responseText = JSON.parse(rs.responseText);
                vM.set('show_title', responseText.resTitle);
                vM.set('show_entityKey', responseText.entityName);
                vM.set('show_sql', responseText.mdId);
                vM.set('show_sqltable', responseText.format);
                var fItem = responseText.fields.items;
                panel.needRecord = fItem;
                panel.needEntityId = record.get('id');
                var selectGrid = panel.down('grid'),
                    selectfield = selectGrid.up('fieldset'),
                    gridField = selectfield.next('fieldset');
                var gridGrid = gridField.down('grid');
                var sData = [], outPut = [], inPut = [];
                Ext.Array.each(fItem, (item) => {

                    if (item.dataType == 'Reference') {
                        sData.push(item)
                    }
                    if (item.attributes) {
                        if (item.attributes.query) {
                            inPut.push(item)
                        }
                        if (item.attributes.display) {
                            outPut.push(item)
                        }
                    }

                });

                view.up('window').close();
                var references = responseText.references;
                if (references && references.length > 0) {
                    for (var i in references) {
                        Ext.Ajax.request({
                            url: '/rest/entryDatas/' + references[i] + '?thanks=false',
                            success: function (res) {
                                var resPon = Ext.JSON.decode(res.responseText),
                                    resPonFields = resPon.fields.items;
                                me.setInputOutPut(resPonFields, sData, inPut, outPut)
                            }
                        });
                    }
                }
                selectGrid.setStore({
                    data: sData
                });
                gridGrid.setStore({
                    data: []
                });

                panel.inPut = inPut;
                panel.outPut = outPut;
            }
        })
    },
    setInputOutPut: function (arr, sData, inPut, outPut) {
        Ext.Array.each(arr, (item) => {
            if (item.dataType == 'Reference') {
                sData.push(item)
            }
            if (item.attributes) {
                var attr = item.attributes;
                if (attr.query) {
                    inPut.push(item)
                }
                if (attr.display) {
                    outPut.push(item)
                }
            }

        });
    },
    //输入add
    onInputAdd: function (btn) {
        var gridView = btn.up('grid');
        this.AddDataset('input', gridView);
    },

    onInputIN: function (btn) {
        this.leadIn('services-choose-dataset', btn.up('services-select'), 'input');
    },

    onOutputAdd: function (btn) {
        var gridView = btn.up('grid');
        this.AddDataset('output', gridView);
    },

    onOutputIN: function (btn) {
        this.leadIn('services-choose-dataset', btn.up('services-grid'), 'output');
    },

    leadIn: function (xtype, grid, type) {
        var show_title = this.lookup('show_title').getValue();
        if (show_title) {

            Ext.create({
                xtype: 'window',
                width: 710,
                height: 445,
                gridView: grid,
                title: '引入',
                type: type,
                layout: 'fit',
                autoShow: true,
                items: [{
                    flex: 1,
                    xtype: xtype
                }]
            })
        } else {
            Ext.toast('当前未选择数据集，没有可引入的dataset');
        }
    },

    AddDataset: function (type, gridView) {
        var arr = {
            input: '输入',
            output: '输出'
        };
        Ext.create({
            xtype: 'window',
            width: 600,
            height: 250,
            title: '新增' + arr[type],
            gridView: gridView,
            addType: type,
            layout: 'fit',
            autoShow: true,
            items: [{
                flex: 1,
                xtype: 'services-adddataset'
            }]
        })
    },

    onAddDatasetRender: function (view) {
        var win = view.up('window');
        if (win) {
            var type = win.addType;
            var inItem = [
                    {
                        fieldLabel: '名称',
                        name: 'name'
                    }, {
                        fieldLabel: '显示名',
                        name: 'title'
                    }, {
                        fieldLabel: '默认值',
                        name: 'defaults'
                    }, {
                        xtype: 'combo',
                        displayField: 'name',
                        valueField: 'value',
                        store: {
                            autoLoad: true,
                            data: [{
                                name: '文本型',
                                value: 'Text'
                            }, {
                                name: '字符型',
                                value: 'String'
                            }, {
                                name: '数值型',
                                value: 'Numeric'
                            }, {
                                name: '日期型',
                                value: 'Date'
                            }]
                        },
                        fieldLabel: '类型',
                        name: 'dataType',
                        value: 'Text'
                    }],
                outItem = [
                    {
                        fieldLabel: '名称',
                        name: 'name'
                    }, {
                        fieldLabel: '显示名',
                        name: 'title'
                    }, {
                        fieldLabel: '默认值',
                        name: 'defaults'
                    }];
            var item = type == 'input' ? inItem : outItem;
            view.add(item);
        }
    },

    //保存修改
    onAddDatasetSave: function (btn) {
        var form = btn.up('services-adddataset'),
            fValue = form.getValues(),
            win = form.up('window'),
            gridView = win.gridView,
            gridStore = gridView.getStore();
        fValue._class = 'dcsp.fl.common.FieldValue';
        Ext.Msg.confirm('提示', '确定保存修改?', function (choose) {
            if (choose == 'yes') {
                gridStore.insert(0, fValue);
                btn.up('window').close();
            }
        })
    },

    //取消修改
    onAddDatasetCancel: function (btn) {
        Ext.Msg.confirm('提示', '确定放弃修改？', function (choose) {
            if (choose == 'yes') {
                btn.up('window').close();
            }
        })
    },

    //删除一行数据
    onDelete: function (view, rowindex, colindex, btn, time, record, tr) {
        Ext.Msg.confirm('提示', '确定删除这一行数据？', function (choose) {
            if (choose == 'yes') {
                view.getStore().remove(record);
            }
        })
    },
});
