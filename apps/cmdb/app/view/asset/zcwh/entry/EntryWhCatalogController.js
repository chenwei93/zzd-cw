Ext.define('Cmdb.view.asset.zcwh.entry.EntryWhCatalogController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.entrywh',

    onSelectionChange: function (grid, selection) {
        var code = selection[0].data.code,
            text = selection[0].data.text;
        var grid = this.getView().up('entrywh-tab').items.items[3],
            store = grid.getStore(),
            search = grid.lookup('searchText');
        var storeDmoe = {
            autoLoad: true,
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query&catalogs=' + code
            }
        };
        grid.setStore(storeDmoe);
        search.setValue(text);
    },
    onAll: function () {
        var grid = this.getView().up('entrywh-tab').items.items[3],
            store = grid.getStore(),
            search = grid.lookup('searchText');
        var storeDmoe = {
            autoLoad: true,
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries'
            }
        };
        grid.setStore(storeDmoe);
        search.setValue('');
    }
});