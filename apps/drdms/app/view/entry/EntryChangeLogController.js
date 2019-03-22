Ext.define('DRDMS.view.entry.EntryChangeLogController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entry-changelog',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    //弹出提示框
    toMsgAlert: function (msg, url, store, method) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        method: method,
                        url: url,
                        success: function (rs) {
                            store.reload();
                        },
                        failure: function (rs) {
                        }
                    })
                }
            }
        })

    },
    onDeal: function () {
        var me = this;
        var msg, url;
        var grid = me.getView(),
            select = grid.getSelectionModel().getSelection(),
            store = grid.getStore().data.items;
        var length = select.length, id = '';
        if (length == 0) {
            id = store[0].data.id;
            for (var i = 1; i < store.length; i++) {
                id += ',' + store[i].data.id
            }
            msg = '确定全部提交吗？';
            url = ' /drdms/api/changes/' + id;
            me.toMsgAlert(msg, url, grid.getStore(), 'POST');
        } else {
            id = select[0].data.id;
            for (var i = 1; i < select.length; i++) {
                id += ',' + select[i].data.id
            }
            msg = '确定提交已选择的' + length + '条目录吗？';
            url = ' /drdms/api/changes/' + id;
            me.toMsgAlert(msg, url, grid.getStore(), 'POST');
        }

    },
    onreset: function () {
        this.getView().getStore().reload();
    },
    onShow: function (view, record, tr, index) {
        var id = record.data.source.id;
        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '变更目录详情',
            width: 800,
            height: 612
        });
    },
    onShow1: function (view, row, col, button, event, record, tr) {
        var id = record.data.source.id;
        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '变更目录详情',
            width: 800,
            height: 612
        });
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = me.getView();
            var store = grid.getStore(),
                filterField = me.lookup('searchText').value;
            var url = '/drdms/api/changes',
                params = '';
            //TODO @chenw 变更目录查询
            if (filterField) {
                params = '?query=example&resTitle=' + filterField
            }
            var newStore = {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: url + params
                }
            };
            grid.setStore(newStore);
        }
    }
});
