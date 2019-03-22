/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.resourcepool-add',


    initViewModel: function (vm) {
        if (this.getView().config.entityId != null) {
            this.loadEntity();
        }
    },


    onFileAdd: function () {
        var store = this.getView().up('window').gridView;
        this.getView().up('window').close();
        Ext.create({
            xtype: 'window',
            width: 680,
            height: 470,
            items: [{
                xtype: 'resourcepool-addfile',
                entityId: null
            }],
            gridView: store,
            title: '资源池新增'
        }).show();
    },
    onDbAdd: function () {
        var store = this.getView().up('window').gridView;
        this.getView().up('window').close();
        Ext.create({
            xtype: 'window',
            width: 840,
            height: 650,
            items: [{
                xtype: 'resourcepool-adddb',
                entityId: null
            }],
            gridView: store,
            title: '资源池新增'
        }).show();
    },
    onSaveFile: function () {
        var me = this;
        var win = me.getView().up('window'),
            store = win.gridStore,
            value = me.getView().getForm().getValues();
        var id = me.getView().entityId;
        if (id == null) {
            me.getView().submit({
                jsonSubmit: true,
                url: '/rbase/api/resourcePools',
                success: function (rs) {
                    me.xgSuccess('新增成功。', store, win);
                    me.getView().getForm().reset();
                },
                failure: function () {
                    me.xgSuccess('新增成功。', store, win);
                    me.getView().getForm().reset();
                }
            });
        } else {
            me.getView().submit({
                jsonSubmit: true,
                method: 'PUT',
                url: '/rbase/api/resourcePools/' + id,
                success: function (rs) {
                    me.xgSuccess('修改成功。', store, win);
                    me.getView().getForm().reset();
                },
                failure: function () {
                    me.xgSuccess('修改成功。', store, win);
                    me.getView().getForm().reset();
                }
            });
        }
    },
    onCancelFile: function () {
        var me = this;
        var win = me.getView().up('window');
        me.getView().getForm().reset();
        win.close()
    },
    onSaveDb: function () {
        var me = this;
        var win = me.getView().up('window'),
            store = win.gridView.getStore(),
            value = me.getView().getForm().getValues();
        if (value.pollingTimeMillis < 1000) {
            var msg = '轮询时间不得小与1000毫秒',
                obj = {yes: '确定'},
                fn = null;
        } else {
            var dbProperty = {
                username: value.username,
                password: value.password,
                jdbcUrl: value.jdbcUrl
            };
            var id = me.getView().entityId;
            if (id == null) {
                var msg = '确定保存？',
                    obj = {yes: '确定', no: '取消'},
                    fn = function () {
                        me.getView().submit({
                            params: {
                                dbProperty: dbProperty
                            },
                            jsonSubmit: true,
                            url: '/rbase/api/resourcePools',
                            success: function (rs) {
                                me.xgSuccess('新增成功。', store, win);
                                me.getView().getForm().reset();
                            },
                            failure: function () {
                                me.xgSuccess('新增成功。', store, win);
                                me.getView().getForm().reset();
                            }
                        });
                    };

            } else {
                var msg = '确定保存？',
                    obj = {yes: '确定', no: '取消'},
                    fn = function () {
                        me.getView().submit({
                            clientValidation: true,
                            params: {
                                dbProperty: dbProperty
                            },
                            jsonSubmit: true,
                            ContentType: "application/json",
                            method: 'PUT',
                            url: '/rbase/api/resourcePools/' + id,
                            success: function (rs) {
                                me.xgSuccess('修改成功。', store, win);
                                me.getView().getForm().reset();

                            },
                            failure: function () {
                                me.xgSuccess('修改成功。', store, win);
                                me.getView().getForm().reset();

                            }
                        });
                    };
            }
        }
        me.msgAlert(msg, obj, fn);
    },
    xgSuccess: function (msg, store, win) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    store.reload();
                    win.close();
                }
            }
        });
    },
    onCancelDb: function () {
        var me = this;
        var win = me.getView().up('window');
        var msg = '确定取消保存？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                me.getView().getForm().reset();
                win.close()
            };
        this.msgAlert(msg, obj, fn);
    },
    onTestDb: function () {
        console.log('测试')
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
