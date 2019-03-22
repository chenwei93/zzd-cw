Ext.define('DRDMS.view.catalog.CatalogZTController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.catalogzt',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onRealm: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            record: record,
            viewModel: {
                data: {
                    catalog: record
                }
            },
            title: '编辑主题分类',
            items: [{
                xtype: 'catalog-edit'
            }]
        }).show();
    },
    onSelectionChange: function (grid, selection) {
        var code = selection[0].data.code;
        top._code = code;
    },
    onAddClick: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            title: '新增主题分类',
            items: [{
                xtype: 'catalog-add'
            }],
            gridView: this.getView()
        }).show();
    },
    onDelete: function (grid, rowindex) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var store = me.getView().getStore();
                    store.removeAt(rowindex);
                }
            }
        })
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = me.getView();
            var store = grid.getStore(),
                filterField = me.lookup('searchText').value;
            var url = '/base/api/tree/catalogs/CatalogGB',
                params = '';
            //TODO @chenw 国标目录查询不起效
            if (filterField) {
                params = '?query=example&text=' + filterField
            }
            var newStore = {
                autoLoad: true,
                folderSort: true,
                type: 'tree',
                model: 'Catalog',
                proxy: {
                    type: 'ajax',
                    url: url + params,
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
            grid.setStore(newStore);
        }
    }
});
