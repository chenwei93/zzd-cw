Ext.define('DA.view.entry.dataset.datasetOperateChooseController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.dataset-choose',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onSure: function (btn) {
        var me = this;
        var select = me.getView().getSelectionModel().getSelection();

        if (select.length != 0) {
            for (var i in select) {
                select[i] = select[i].data
            }
            var win = btn.up('window'),
                gridView = win.gridView,
                selectGrid = gridView.lookup('select'),
                store = {
                    autoLoad: true,
                    data: select
                };
            selectGrid.setStore(store);
        }
        win.close();
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore(),
                filterField = me.lookup('searchText'),
                filters = store.getFilters();//当前表格的filter

            var newStore = {
                autoLoad: true,
                model: 'Services',
                proxy: {
                    type: 'ajax2',
                    url: '/ap/api/dataset?query=example&type=Default&qname=' + filterField.value
                }
            };


        }
    },
});
