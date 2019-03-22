Ext.define('AP.view.profile.ProfileController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.profile',


    onReset:function () {
        var msg = '是否进行节点重置？',
            url = '/init/api/reset';
        this.msgAlert(msg, url)
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