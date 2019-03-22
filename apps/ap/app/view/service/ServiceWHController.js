Ext.define('AP.view.service.ServiceWHController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.servicewh',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onPublish: function () {
        var me = this;
        var select = me.getView().getSelectionModel().getSelection(),
            store = me.getView().getStore();
        var length = select.length;
        if (length == 0) {
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
                        url: '/ap/api/services/' + qname + '/publish',
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
    onAuthorize: function () {
        console.log('授权');
    },
    onShow: function (view, record, index) {
        this.open({
            xtype: 'service-show',
            record: record,
            viewModel: {
                data: {
                    service: record
                }
            },
        }, {

            width: 660,
            height: 500,
            title: '服务配置详细信息'
        })
    },
    onShow1: function (tr, td, view, a, index, record) {
        this.open({
            xtype: 'service-show',
            record: record,
            viewModel: {
                data: {
                    service: record
                }
            },
        }, {

            width: 660,
            height: 500,
            title: '服务配置详细信息'
        })
    },
    onEdit: function (view, row, column, button, action, record, tr) {
        var id = record.data.id;
        this.open({
            xtype: 'services',
            record: record,
            viewModel: {
                data: {
                    service: record
                }
            },
            gridView: this.getView(),
            needId: id
        }, {
            width: 900,
            height: 600,
            title: '编辑'
        })
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
    },
    onCopy: function (view, row, column, button, action, record, tr) {
        var input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', record.get('whurl'));
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            // ('复制成功');
            Ext.Msg.alert({
                title: '提示',
                msg: '复制成功',
                buttonText: {no: '确定'}
            })
        }
        document.body.removeChild(input);
    }
});