Ext.define('DRDMS.view.principal.PrincipalController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.principal',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onEdit: function (tr, td, view, record, index) {
        Ext.create({
            xtype: 'window',
            width: 800,
            record: index.record,
            viewModel: {
                data: {
                    principal: index.record
                }
            },
            title: '编辑部门',
            items: [{
                xtype: 'principal-edit'
            }]
        }).show();
    },
    onSave: function () {
        //提交数据
        var me = this;
        var id = this.getView().up('window').record.data.id;
        this.getView().submit({
            url: '/base/api/principals/' + id,
            method: 'PUT',
            jsonSubmit: true,
            success: function () {
                alert('修改成功');
                var win = me.getView().up('window');
                var record = me.getView().up('window').record;
                record.commit();
                win.close();
            },
            failure: function (form, action) {
                //chenw 需修改
                Ext.Msg.alert({
                    title: '提示',
                    msg: '修改成功',
                    buttonText: {yes: '确定', no: '取消'},
                    fn: function (btn, text) {
                        if (btn == 'yes') {
                            var win = me.getView().up('window');
                            var record = me.getView().up('window').record;
                            record.commit();
                            win.close();
                        }

                    }
                });

                // alert('修改失败');
            }
        });
    },
    onCancel: function () {
        var win = this.getView().up('window');
        var record = this.getView().up('window').record;
        record.reject();
        win.close();
    },

    //新增
    onAdd: function (tr, td, view, record, index) {
        Ext.create({
            xtype: 'window',
            record: index.record,
            viewModel: {
                data: {
                    principal: index.record
                }
            },
            width: 700,
            title: '新增部门',
            items: [{
                xtype: 'principal-add',
                xxx: this.getView()
            }]
        }).show();
    },
    onCreate: function () {
        //提交form
        var me = this;
        this.getView().submit({
            url: '/rest/principals',
            jsonSubmit: true,
            success: function () {
                alert('添加成功');
                //刷新tree
                var treeStore = me.getView().xxx.getStore();
                treeStore.load({
                    autoLoad: true,
                    folderSort: true,
                    type: 'tree',
                    url: '/rest/tree/departments',
                    reader: {
                        rootProperty: 'children'
                    }
                });
                var win = me.getView().up('window');
                win.close();
            },
            failure: function (form, action) {
                //chenw 需修改
                Ext.Msg.alert({
                    title: '提示',
                    msg: '添加成功',
                    buttonText: {yes: '确定', no: '取消'},
                    fn: function (btn, text) {
                        if (btn == 'yes') {
                            var win = me.getView().up('window');
                            win.close();
                        }

                    }
                });
            }
        })
    },
    onClose: function () {
        var win = this.getView().up('window');
        win.close();
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
        });
    },
    onNew: function () {
        var view = this.getView(),
            rec = new DRDMS.model.Principal({
                text: '',
                code: '',
                orders: '',
                leaf: true
            });
        view.store.insert(0, rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    },
    onEEdit: function (record, index, a, b, c, d) {
        var record = index.record;
        record.commit();
        var me = this;
    }
});
