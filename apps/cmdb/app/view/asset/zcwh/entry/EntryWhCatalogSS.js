Ext.define('Cmdb.view.asset.zcwh.entry.EntryWhCatalogSS', {
    extend: 'Ext.tree.Panel',
    xtype: 'entrywh-catalogss',

    requires: [
        'Cmdb.model.Catalog',
        'Cmdb.view.asset.zcwh.entry.EntryWhCatalogController',
    ],
    controller: 'entrywh',
    rootVisible: false,
    store: {},
    columns: [{
        xtype: 'treecolumn',
        flex: 1,
        dataIndex: 'text'
    }],
    listeners: {
        'selectionchange': 'onSelectionChange',
        render: function () {
            var me = this;
            var store = {
                autoLoad: true,
                type: 'tree',
                model: 'Catalog',
                folderSort: true,
                proxy: {
                    type: 'ajax',
                    // url: '/base/api/tree/catalogs/CatalogSS',
                    url: 'app/store/data/asset/entry/CatalogSS.json',
                    reader: {
                        rootProperty: function (rs) {
                            if (rs.children != null) {
                                if (rs.children.length == 1) {
                                    return rs.children[0].children;
                                } else {
                                    return rs.children

                                }
                            }
                        }
                    }
                }
            };
            me.setStore(store);
        }
    }
});