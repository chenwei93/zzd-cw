Ext.define('DA.view.entry.entrywh.EntryWhCatalogGB', {
    extend: 'Ext.tree.Panel',
    xtype: 'entrywh-cataloggb',

    requires: [
        'DA.model.Catalog',
        'DA.view.entry.entrywh.EntryWhController'
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
                rootVisible: false,
                autoLoad: true,
                // folderSort: true,
                type: 'tree',
                model: 'Catalog',
                proxy: {
                    type: 'ajax',
                    url: 'resources/deletedata/CatalogGB.json',
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
            // me.setStore(store);
        }
    }
});
