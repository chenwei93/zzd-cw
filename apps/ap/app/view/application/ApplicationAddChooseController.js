Ext.define('AP.view.application.ApplicationAddChooseController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.application-choose',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onSure: function () {
        var me = this;
        var select = me.getView().getSelectionModel().getSelection(),
            data = [];
        for (var i = 0; i < select.length; i++) {
            data.push(select[i].data)
        }
        var grid = me.getView().gridView.lookup('service'),
            store = {
                autoLoad: true,
                data: data
            };
        grid.setStore(store);
        me.getView().up('window').close();
    }
});