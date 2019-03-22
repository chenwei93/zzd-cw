/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.profile.ProfileController', {
    extend: 'RBase.base.ViewController',

    alias: 'controller.profile',


    onRest: function () {
        var msg = '是否进行节点重置？',
            url = '/init/api/reset';
        this.msgAlert(msg, url)

    },
    onRegister: function () {
        var msg = '节点是否进行重新注册？',
            url = '/drdms/api/resetNode';
        this.msgAlert(msg, url);
    },
    onClean:function () {
        var msg = '是否清除工作台缓存？',
            url = '/rbase-workspace/service/invalidateCache';
        this.msgAlert(msg, url);
    },
    msgAlert: function (msg, url) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url
                    })
                }
            }
        })
    }
});
