Ext.define('DRDMS.view.entryset.EntryMetadataController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entrymetadata',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore(),
                filterField = me.lookup('searchText'),
                filters = store.getFilters();//当前表格的filter

            if (filterField.value) {//有输入值,添加filter
                this.nameFilter = filters.add({
                    // id: 'nameField',
                    property: 'element',//通过element属性过滤
                    value: filterField.value,//值为搜索框输入的值
                    anyMatch: true,//模糊匹配
                    caseSensitive: false
                });
            } else if (this.nameFilter) {//未输入，则移除filter
                filters.remove(this.nameFilter);
                this.nameFilter = null;
            }
        }
    },
    onEdit: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 620,
            record: record,
            viewModel: {
                data: {
                    entrymetadata: record
                }
            },
            title: '编辑元数据',
            items: [{
                xtype: 'entrymetadata-edit'
            }],
            gridView: this.getView(),
            needId: record.data.id
        }).show();
    },
    onShow: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 620,
            record: record,
            viewModel: {
                data: {
                    entrymetadata: record
                }
            },
            title: '查看元数据',
            items: [{
                xtype: 'entrymetadata-show'
            }]
        }).show();
    },
    onShow1: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 620,
            record: td.data,
            viewModel: {
                data: {
                    entrymetadata: td.data
                }
            },
            title: '查看元数据',
            items: [{
                xtype: 'entrymetadata-show'
            }]
        }).show();
    },
    onAddClick: function () {
        Ext.create({
            xtype: 'window',
            width: 620,
            title: '新增元数据',
            gridView: this.getView(),
            items: [{
                xtype: 'entrymetadata-add'
            }]
        }).show();
    },
    onDelete: function (grid, rowindex, td, tr, record) {
        var me = this;
        var name = record.record.data.name;
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var store = me.getView().getStore();
                    Ext.Ajax.request({
                        url: '/drdms/api/objectAttributes/' + name,
                        method: 'DELETE',
                        success: function () {
                            store.reload();
                        }
                    })
                }
            }
        })
    },
    onCancelAdd: function () {
        var win = this.getView().up('window');
        win.close();
    },
    onCancel: function () {
        var win = this.getView().up('window');
        var record = this.getView().up('window').record;
        record.reject();
        win.close();
    },
    onSave: function (a) {
        var me = this;
        var id = me.getView().up('window').needId;
        Ext.Msg.alert({
            title: '提示',
            msg: '修改成功',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var store = me.getView().up('window').gridView.getStore();
                    var value = a.up('form').getForm().getValues();
                    value.title = value.text;
                    var params = {
                        constraint: {
                            require: value.require,
                            valueRangeReference: value.valueRangeReference,
                            defaultValue: value.defaultValue,
                            description: value.description
                        }
                    };
                    params = Object.assign(value, params);
                    Ext.Ajax.request({
                        url: '/drdms/api/objectAttributes',
                        method: 'put',
                        jsonData: params,
                        success: function (rs) {
                            store.reload();
                            win.close();
                        }
                    });
                }

            }
        });
    },
    onSaveAdd: function (a) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '新增成功',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var store = me.getView().up('window').gridView.getStore();
                    var value = a.up('form').getForm().getValues();
                    value.title = value.text;
                    var params = {
                        constraint: {
                            require: value.require,
                            valueRangeReference: value.valueRangeReference,
                            defaultValue: value.defaultValue,
                            description: value.description
                        }
                    };
                    params = Object.assign(value, params);
                    Ext.Ajax.request({
                        url: '/drdms/api/objectAttributes',
                        method: 'POST',
                        jsonData: params,
                        success: function (rs) {
                            store.reload();
                            win.close();
                        }
                    });
                }
            }
        });
    },
    onChooseSelect: function (view, value, prevalue, fn) {
        var data = value,
            me = this;
        var view = me.getView().items.items[1].items.items[1];
        if (data == 'Directory') {
            var store = {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/base/api/catalogs/Dictionary'
                }
            };
            view.setStore(store);
            view.setValue('');
            view.setEmptyText('请选择');
        } else {
            var store = {
                data: null
            };
            view.setValue('');
            view.setEmptyText('请输入');
            view.setStore(store);
        }
    }
});
