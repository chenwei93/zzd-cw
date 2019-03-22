Ext.define('AP.view.service.ServiceController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.service',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
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
    onRefresh: function () {
        this.getView().getStore().reload()
    },
    onCopy: function (view, row, column, button, action, record, tr) {
        var input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', record.get('url'));
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
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore();
            if (field.reference == "searchTextT") {
                var filterField = me.lookup('searchTextT');
                var params = '&title=' + filterField.value;
            } else {
                var filterField = me.lookup('searchText');
                var params = '&qname=' + filterField.value;
            }
            var newStore = {
                autoLoad: true,
                model: 'Service',
                proxy: {
                    type: 'ajax2',
                    url: '/ap/api/services?query=example&type=Default' + params
                }
            };

            me.getView().setStore(newStore);
        }
    },
    // this.onSpecialkey()

});