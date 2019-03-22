Ext.define('DA.view.entry.entrywh.EntryWhController', {
    extend: 'DA.base.ViewController',
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
                url: '/rest/entries?query&catalogs=' + code
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
                url: '/rest/entries'
            }
        };
        grid.setStore(storeDmoe);
        search.setValue('');
    }
});
