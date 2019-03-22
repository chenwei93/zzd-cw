/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('DA.view.mgr.resourcenode.ResourceNodeShowController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.resourcenode-show',

    initViewModel: function (vm) {

        if (this.getView().entityId) {
            this.loadEntity();
        }
    },

    onSaveAdd: function (a) {
        var me = this;
        var win = me.getView().up('window'),
            gridView = win.gridView,
            form = this.getView();

        var fValue = form.getValues(),
            fId = form.entityId;

        var dk = fValue.duankou,
            xy = 'Arbitrary';//协议默认值
        var ports = {};
        ports[dk] = xy;

        var store = gridView ? gridView.getStore() : '';

        if (fId) {
            var url = '/rest/resourceNodes/' + fId,
                extra = {method: 'PUT'};
        } else {
            var url = '/rest/resourceNodes',
                extra = {};
        }

        Ext.Msg.confirm('提示', '确定保存?', function (btn) {
            if (btn == 'yes') {
                var requeset = {
                    url: url,
                    params: {ports: ports},
                    jsonSubmit: true,
                    success: function (rs) {
                        form.getForm().reset();
                        me.ajaxSuccessFn(store, win);
                    },
                    failure: function () {
                        form.getForm().reset();
                        me.ajaxSuccessFn(store, win);
                    }
                };
                requeset = Ext.apply(requeset, extra);
                me.getView().submit(requeset)
            }
        });
    },

    //资源主机新增成功后回调
    ajaxSuccessFn: function (store, win) {
        Ext.toast('保存成功,刷新列表');
        store.reload();
        win.close();
    },

    onCancelAdd: function (btn) {
        var me = this,
            form = this.getView(),
            Form = form.getForm(),
            win = btn.up('window');
        if (win) {
            Ext.Msg.confirm('提示', '确定取消保存?', function (chooce) {
                if (chooce == 'yes') {
                    Form.reset();
                    win.close();
                    Ext.toast('已取消保存');
                }
            });
        }
    },

    //标识名转换拼音
    onFocus: function (view, event, eOpts) {
        var inputTitle = this.lookup('inputTitle').getValue();
        if (inputTitle != '') {
            Ext.Ajax.request({
                url: '/rest/pinyin/' + encodeURIComponent(inputTitle),
                success: function (rs) {
                    rs.responseText = rs.responseText.replace(/\"/g, "");
                    view.setValue(rs.responseText);
                }
            })
        }
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
