Ext.define('Cmdb.view.asset.zcwh.entry.EntryCatalogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.entry-catalog',


    onOK: function () {
        var me = this;
        var win = this.getView().up('window');
        var code = win.catalogF,
            code2 = code + 'Code';
        var view = win.gridView.lookup(code),
            view2 = win.gridView.lookup(code2);
        var selection = this.getView().getSelectionModel().getSelection();
        var text = '', code = '';
        var length = selection.length;
        if (length != 0) {
            text = selection[0].data.text;
            code = selection[0].data.code;
            for (var i = 1; i < length; i++) {
                text += ',' + selection[i].data.text;
                code += ',' + selection[i].data.code;
            }
        }
        if (text == "") {
            var msg = '当前未选择分类',
                obj = {yes: '确定'},
                fn = null;
        } else {
            var msg = '确定指定当前分类？',
                obj = {yes: '确定', no: '取消'},
                fn = function () {
                    view.setValue(text);
                    view2.setValue(code);
                    win.close();
                    var message = "指定成功",
                        obj = {yes: '确定'};
                    me.msgAlert(message, obj, null);
                };
        }
        this.msgAlert(msg, obj, fn);
    },
    onNo: function (button) {
        var msg = '确定取消选择？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                button.up('window').close();
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