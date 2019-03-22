Ext.define('DRDMS.view.principal.UserChangePasswordController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.user-changepsd',

    onChangePsd: function () {
        var view = this.getView(),
            win = view.up('window'),
            id = win.needId,
            first = view.lookup('first').getValue(),
            second = view.lookup('second').getValue();
        if (first == second && first != "" && second != "") {
            var msg = '确认修改当前账户的密码？',
                obj = {yes: '确定'},
                fn = function () {
                    Ext.Ajax.request({
                        url: '/aaa',
                        success: function () {
                            win.close();
                        }
                    });
                };
        } else if (first != second && first != "" && second != "") {
            var msg = '密码不匹配',
                obj = {yes: '确定'},
                fn = null;
        } else if (first == "" || second == "") {
            var msg = '未输入',
                obj = {yes: '确定'},
                fn = null;
        }
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



    // TODO - Add control logic or remove is not needed
});
