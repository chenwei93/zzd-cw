Ext.define('Cmdb.view.mgr.xtgl.principal.UserRolesController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.user-roles',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSure: function () {
        var me = this,
            win = this.getView().up('window'),
            select = me.getView().getSelectionModel().getSelection(),
            length = select.length;
        if (length == 0) {
            var msg = '当前没有选择角色',
                obj = {yes: '确定'},
                fn = null;
        } else {
            var name = '';
            for (var i = 0; i < length; i++) {
                if (i == 0) {
                    name = select[i].data.name
                } else {
                    name += ',' + select[i].data.name
                }
            }
            var gridStore = win.gridView.getStore();
            var msg = '确定将当前选中的' + length + '个角色分配给当前账户？',
                obj = {yes: '确定', no: '取消'},
                fn = function () {
                    Ext.Ajax.request({
                        url: '/aaaa',
                        failure: function (rs) {
                            // var record = select[0];
                            // console.log(record);
                            // var model  = me.getView().getSelectionModel();
                            // setTimeout(function () {
                            //     model.select(record);
                            // },1000);
                            // model.deselectAll(true);
                            gridStore.reload();
                            win.close();
                        }
                    });
                };
        }
        me.msgAlert(msg, obj, fn);
    },
    onCancel: function () {
        var me = this,
            win = me.getView().up('window');
        var msg = '确定取消？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                win.close();
            };
        me.msgAlert(msg, obj, fn);
    },
    msgAlert: function (msg, obj, fn) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: obj,
            fn: function (btn, text) {
                if (btn == 'yes') {
                    if (fn != null) {
                        fn();
                    }
                }
            }
        })
    }
});
