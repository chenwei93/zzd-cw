/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.logs.LogsController', {
    extend: 'RBase.base.ViewController',

    alias: 'controller.logs',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = me.getView();
            var store = grid.getStore(),
                filters = store.getFilters(),
                filterField = me.lookup('searchText').value;
            var url = '/rbase/api/queryLoggers',
                params = '?sort=end,desc';
            if (filterField) {
                params = '?query=example&sql=' + filterField + '&sort=end,desc'
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
    },
    onChange: function (combo, value, preValue, event) {
        if (value == 'all') {
            var params = '?sort=end,desc';
        } else {
            var params = '?query=example?success=' + value + '&sort=end,desc'

        }
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                url: '/rbase/api/queryLoggers' + params
            }
        };
        this.getView().setStore(store);
    }
});
