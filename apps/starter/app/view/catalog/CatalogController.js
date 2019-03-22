Ext.define('Starter.view.catalog.CatalogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.catalog',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSelect: function (record, view, index) {
        //获取当前节点的name
        var selectName = record.selected.items[0].data.code,
            _grid = this.lookupReference('cataloggrid'),
            _store = {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/' + selectName,
                    reader: {
                        rootProperty: 'array'
                    }
                }
            };
        _grid.setStore(_store);
    },
    onChange: function (data) {
        var value = data.value;
        this.lookup('catalogtree').up('treepanel').getStore().load({
            autoLoad: true,
            folderSort: true,
            type: 'tree',
            url: '/rest/tree/catalogs/' + value,
            reader: {
                rootProperty: 'children',
                transform: function (rs) {
                    for (var i = 0; i < rs.children.length; i++) {
                        rs.children[i].expanded = true
                    }
                    return rs;
                }
            }
        });

    }
});
