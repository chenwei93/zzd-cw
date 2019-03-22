Ext.define('Starter.view.entrydata.EntryDataProjectionController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.entrydata-projection',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSelectionChange: function (grid, selection) {
        var id;
        if (selection.length > 0) {
            id = selection[0].data.resTitle;
        }
        for (var i = 1; i < selection.length; i++) {
            id += ',' + selection[i].data.resTitle
        }
        top._did = id;
        top._length = selection.length;
        console.log(id);
    },
    msgAlert: function (msg, url, store, view) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        success: function (rs) {
                            // var store = me.getView().getStore();
                            store.each(function (record) {
                                record.set("published", false);
                                record.commit();
                            });
                            if (view != null) {
                                view.deselectAll(true);
                                top._length = 0;
                            }
                        }
                    })
                }
            }
        });
    },
    onDeal: function () {
        var me = this;
        if (top._length == 0 || top._length == undefined) {
            //不选择的情况下全部改为false
            var store = me.getView().getStore();
            me.msgAlert('确定全部标记为未导出？', '/api/markUnExported', store, null);
        } else {
            var view = me.getView().getSelectionModel(),
                store = view.getSelected();
            me.msgAlert('确定批量标记' + top._length + '条为未导出吗？', '/api/markUnExported?ids=' + top._did, store, view);
        }
    }
});