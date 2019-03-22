/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.view.asset.sjzcgl.resourcenode.ResourceNodeShowController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.resourcenode-show',

    initViewModel: function (vm) {
        this.loadEntity();
    },
    onSaveAdd: function (a) {
        var me = this;
        var win = me.getView().up('window'),
            store = win.gridView.getStore(),
            value = a.up('form').getForm().getValues();
        var dk = value.duankou,
            xy = value.xieyi;
        var ports = {};
        ports[dk] = xy;
        var id = a.up('form').entityId;
        if (id == null) {
            var msg = '确定保存？',
                obj = {yes: '确定', no: '取消'},
                fn = function () {
                    me.getView().submit({
                        url: '/rbase/api/resourceNodes',
                        params: {
                            ports: ports
                        },
                        jsonSubmit: true,
                        success: function (rs) {
                            me.xgSuccess('新增成功。', store, win)
                        },
                        failure: function () {
                            me.xgSuccess('新增成功。', store, win)
                        }
                    })
                };
        } else {
            var msg = '确定保存？',
                obj = {yes: '确定', no: '取消'},
                fn = function () {
                    me.getView().submit({
                        url: '/rbase/api/resourceNodes/' + id,
                        params: {
                            ports: ports
                        },
                        jsonSubmit: true,
                        method: 'PUT',
                        success: function (rs) {
                            me.xgSuccess('修改成功。', store, win)
                        },
                        failure: function () {
                            me.xgSuccess('修改成功。', store, win)
                        }
                    })
                };
        }
        this.msgAlert(msg, obj, fn);
    },
    xgSuccess: function (msg, store, win) {
        var obj = {yes: '确定', no: '取消'},
            fn = function () {
                store.reload();
                win.close();
            };
        this.msgAlert(msg, obj, fn);
    },
    onCancelAdd: function () {
        var me = this;
        var win = me.getView().up('window');
        var msg = '确定取消保存？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                win.close();
            };
        this.msgAlert(msg, obj, fn);
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
