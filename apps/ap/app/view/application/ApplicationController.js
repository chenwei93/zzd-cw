Ext.define('AP.view.application.ApplicationController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.application',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (view, record, index, item) {
        this.open({
            xtype: 'application-show',
        }, {
            record: record,
            viewModel: {
                data: {
                    application: record
                }
            },
            title: '应用配置详细信息',
            width: 660,
            height: 500,
        })
    },
    onShow1: function (tr, td, view, index, item, record) {
        this.open({
            xtype: 'application-show',
        }, {
            record: record,
            viewModel: {
                data: {
                    application: record
                }
            },
            title: '应用配置详细信息',
            width: 660,
            height: 500,
        })
    },
    onEdit: function (view, row, column, button, action, record, tr) {
        this.open({
            xtype: 'application-add',
            record: record,
            viewModel: {
                data: {
                    application: record
                }
            },
            gridView: this.getView()
        }, {
            width: 900,
            height: 600,
            title: '编辑应用'
        })
    },
    onPublish: function () {
        var me = this;
        var select = me.getView().getSelectionModel().getSelection(),
            store = me.getView().getStore();
        if (select.length == 0) {
            var msg = '当前未选择服务。',
                obj = {yes: '确定'},
                fn = null;
        } else {
            var qname = select[0].data.qname;
            for (var i = 1; i < select.length; i++) {
                qname += ',' + select[i].data.qname;
            }
            var msg = '确定发布？',
                obj = {yes: '确定', no: '取消'},
                fn = function () {
                    Ext.Ajax.request({
                        url: '/ap/api/applications/' + qname + '/publish',
                        success: function (rs) {
                            var message = '发布成功',
                                button = {yes: '确定'},
                                fn = function () {
                                    me.getView().getSelectionModel().deselectAll(true);
                                    store.reload();
                                };
                            me.msgAlert(message, button, fn);
                        }
                    })
                };
        }
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