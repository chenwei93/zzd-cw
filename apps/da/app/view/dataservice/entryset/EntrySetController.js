Ext.define('DA.view.dataservice.entryset.EntrySetController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.entryset',


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
                    property: 'title',//通过dir_name属性过滤
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
    onDelete: function (grid, rowindex) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var store = me.getView().getStore();
                    store.removeAt(rowindex);

                }
            }
        })
    },
    onAddClick: function () {
        Ext.create({
            xtype: 'window',
            width: 620,
            title: '新增目录',
            gridView: this.getView(),
            items: [{
                xtype: 'entryset-add'
            }]
        }).show();
    },
    onSave: function (a) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '新增成功。',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var store = me.getView().up('window').gridView.getStore();
                    var value = a.up('form').getForm().getValues();
                    store.add({
                        dir_name: value.dir_name,
                        dir_num: value.dir_num,
                        ver_field: value.ver_field,
                        update: value.update,
                        updatelimit: value.updatelimit,
                        updaterate: value.updaterate,
                        meta_item: value.meta_item
                    });
                    win.close();
                }

            }
        });
    },
    onCancel: function () {
        var win = this.getView().up('window');
        win.close();
    },


    //激活
    onActivate: function (view, rowindex, td, btn, a, record) {
        var me = this,
            id = record.data.id,
            store = me.getView().getStore();
        Ext.Msg.alert({
            title: '提示',
            msg: '确定激活？',
            buttonText: {yes: '是', no: '否'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/drdms/api/objectPackages/' + id + '/enable',
                        success: function () {
                            store.reload();
                        }
                    })
                }
            }
        })
    },
    //复制
    onClone: function (view, rowindex, td, btn, a, record) {
        var me = this;
        var id = record.data.id;
        Ext.Ajax.request({
            url: '/drdms/api/objectPackages/' + id + '/duplicate',
            method: 'POST',
            success: function (rs) {
                var data = JSON.parse(rs.responseText);
                var view = me.getView(),
                    store = view.getStore();
                store.reload();
                setTimeout(function () {
                    var length = store.data.items.length,
                        recordData = store.data.items[length - 1];
                    view.findPlugin('rowediting').startEdit(recordData, 0);
                }, 1000);
            }
        })


    },
    onJude: function () {
        var me = this;
        var title = me.lookup('title'),
            version = me.lookup('version'),
            editor = title.getEditor(),
            editorVersion = version.getEditor();
        if (top._A == 0) {
            editor.disable();
        } else {
            editor.enable();
        }
        if (top._B == 0) {
            editorVersion.disable();
        } else {
            editorVersion.enable();
        }
    },
    onAddVersion: function (view, rowindex, td, btn, a, record) {
        var me = this;
        var id = record.data.id;
        var view = me.getView(),
            store = view.getStore();
        var length = store.data.items.length;
        Ext.Ajax.request({
            url: '/drdms/api/objectPackages/' + id + '/newVersion',
            method: 'POST',
            success: function (rs) {
                var data = JSON.parse(rs.responseText);
                var view = me.getView(),
                    store = view.getStore();
                store.reload();
                setTimeout(function () {
                    var length = store.data.items.length,
                        recordData = store.data.items[length - 1];
                    view.findPlugin('rowediting').startEdit(recordData, 0);
                }, 1000);

            }
        })
    },
    onPencil: function (view, rowindex, td, btn, a, record) {
        var id = record.data.id;
        this.open({
            xtype: 'entryset-edit'
        }, {
            width: 700,
            height: 600,
            title: '编辑',
            record: record,
            viewModel: {
                data: {
                    entryset: record
                }
            },
            gridView: this.getView(),
            needId: id

        })
    },
    onEdit: function (view, record, edit) {
        var id = record.record.data.id,
            data = record.record.data;
        var version = data.version;
        var a = version.split(".");
        data.version = {
            prefix: data.prefix,
            major: a[0],
            minor: a[1],
            tag: a[2]
        };
        var store = this.getView().getStore();
        data._class = 'dcsp.drdms.domain.metadata.ObjectPackage';
        Ext.Ajax.request({
            url: '/drdms/api/objectPackages/' + id,
            jsonData: data,
            method: 'PUT',
            success: function () {
                store.reload();
            }
        });
    },
    onDelete: function (view, rowindex, td, btn, a, record) {
        var id = record.data.id;
        var view = this.getView(),
            store = view.getStore();
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/drdms/api/objectPackages/' + id,
                        method: 'DELETE',
                        success: function () {
                            store.reload();
                        }
                    })
                }
            }
        })
    },
    onRefresh: function () {
        this.getView().getStore().reload();
    }
});
