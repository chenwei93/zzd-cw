/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.home.TodosController', {
    extend: 'RBase.base.ViewController',

    alias: 'controller.todos',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onReset: function () {
        this.getView().items.items[0].getStore().reload();
    },
    onPlay: function (a, b, c, d, e, record, g) {
        var me = this;
        var grid = me.getView().items.items[0];
        var status = record.data.enableWatched;
        var code = record.data.code;
        if (status == false) {
            var action = 'start',
                msg = '确定开启当前资源池？',
                store = grid.getStore(),
                warnmsg = '开启资源池异常。',
                fun = function () {
                    me.warnMsg(warnmsg);
                }
        } else {
            var action = 'stop',
                msg = '确定暂停当前资源池？',
                store = grid.getStore(),
                warnmsg = '暂停资源池异常。',
                fun = function () {
                    me.warnMsg(warnmsg);
                }
        }
        var url = '/rbase/api/resourcePoolWatch/' + action + '/' + code;
        this.MsgAlert(msg, url, fun, store);
    },
    onDelete: function (a, b, c, d, e, record) {
        var id = record.data.id;
        var msg = '确定删除？',
            url = '/rbase/api/resourcePools/' + id,
            store = this.getView().items.items[0].getStore();
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        method: 'DELETE',
                        success: function () {
                            store.reload();
                        }
                    });
                }
            }
        });
    },
    warnMsg: function (msg) {
        Ext.Msg.alert({
            title: '提示',
            msg: '暂停资源池异常。',
            buttonText: {yes: '确定', no: '取消'}
        });
    },
    MsgAlert: function (msg, url, fn, store) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        success: function (rs) {
                            if (rs.responseText == 'false') {
                                if (fn != null) {
                                    fn();
                                }
                            } else {
                                if (store != null) {
                                    store.reload();
                                }
                            }
                        }
                    });
                }
            }
        })
    },
    onShow: function (view, record, index) {
        var format = record.data.allowFormat;
        var id = record.data.id;
        if (format == '数据库') {
            this.open({
                xtype: 'resourcepool-showdb',
                entityId: id
            }, {
                width: 830,
                height: 580,
                title: '资源池详情'
            })
        }
        else {
            this.open({
                xtype: 'resourcepool-showfile',
                entityId: id
            }, {
                width: 670,
                height: 420,
                title: '资源池详情'
            })
        }
    },
});
