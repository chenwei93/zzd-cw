Ext.define('DRDMS.view.realmnode.RealmNodeController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.realmnode',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onNew: function () {
        this.open({
            xtype: 'realmnode-add'
        }, {
            width: 800,
            height: 198,
            title: '新增节点'
        })
    },
    onCreate: function () {
        var me = this;
        this.getView().submit({
            url: '/aaa'
        })
    },
    onClose: function () {
        var win = this.getView().up('window');
        win.close();
    },
    onEdit: function (a, b, c, d, e, record) {
        this.open({
            xtype: 'realmnode-edit',
        }, {
            width: 800,
            height: 198,
            record: record,
            viewModel: {
                data: {
                    realmnode: record
                }
            },
            title: '修改节点'
        })
    },
    onSave: function () {
        var me = this;
        me.getView().submit({
            url: '/sss',
            success: function (rs) {
                Ext.Msg.alert({
                    title: '提示',
                    msg: '修改成功',
                    buttonText: {yes: '确定', no: '取消'},
                    fn: function (btn, text) {
                        if (btn == 'yes') {
                            me.getView().submit({
                                url: '/sss'
                            });
                            var win = me.getView().up('window');
                            var record = me.getView().up('window').record;
                            record.commit();
                            win.close();
                        }

                    }
                });
            }
        });

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
    }
});
