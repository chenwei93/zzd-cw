Ext.define('Cmdb.view.asset.zckgl.catalog.CatalogSSController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.catalogss',


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
            title: '编辑应用分类',
            items: [{
                xtype: 'catalog-edit'
            }]
        }).show();
    },
    onAddClick: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            title: '新增应用分类',
            items: [{
                xtype: 'catalog-add'
            }],
            gridView: this.getView()
        }).show();
    },
    onSelectionChange: function (grid, selection) {
        var code = selection[0].data.code;
        top._code = code;
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
    }

    // TODO - Add control logic or remove is not needed
});
