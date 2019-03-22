/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.resourcenode.ResourceNodeShowController', {
    extend: 'RBase.base.ViewController',
    alias: 'controller.resourcenode-show',

    initViewModel: function (vm) {
        if (this.getView().entityId) {
            this.loadEntity();

        }
    },
    onSaveAdd: function (btn) {
        var me = this,
            win = me.getView().up('window'),
            store = win.gridView.getStore(),
            value = btn.up('form').getForm().getValues();
        var dk = value.duankou,
            xy = value.xieyi;
        var ports = {};
        ports[dk] = 'Arbitrary';
        var id = btn.up('form').entityId;
        var url = '/rbase/api/resourceNodes',
            params = '',
            method = 'POST';
        if (id) {
            params = '/' + id;
            method = 'PUT';
        }
        console.log(ports);
        Ext.MessageBox.confirm('提示', '确定保存？', function (chooce) {
            if (chooce == 'yes') {
                me.getView().submit({
                    url: url + params,
                    params: {
                        ports: ports
                    },
                    jsonSubmit: true,
                    method: method,
                    success: function (rs) {
                        me.xgSuccess('保存成功,', store, win)
                    },
                    failure: function () {
                        me.xgSuccess('保存成功,', store, win)
                    }
                })
            }
        });
    },
    xgSuccess: function (msg, store, win) {
        Ext.toast(msg + '刷新列表');
        store.reload();
        win.close();
    },
    onCancelAdd: function () {
        var me = this;
        var win = me.getView().up('window');
        Ext.MessageBox.confirm('提示', '确定取消保存？', function (chooce) {
            if (chooce == 'yes') {
                win.close();
            }
        })
    },
    //本地默认'是'IP默认127.0.0.1，并且只读
    radioChange: function (radio, now, pre) {
        var vm = this.getViewModel(),
            ipAddress = this.lookup('ipAddress'),
            jude = now.local == 'true' ? true : false,
            ipData = now.local == 'true' ? '127.0.0.1' : '';
        vm.set('ip', ipData);
        ipAddress.setReadOnly(jude);
    }
});
