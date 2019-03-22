Ext.define('Starter.view.catalog.CatalogGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'catalog-grid',

    store:{},
    tbar: [{
        text: '新增'
    }],
    frame: true,
    columns: [{
        xtype: 'rownumberer'

    }, {
        text: '目录名称',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '编码',
        dataIndex: 'code'
    }, {
        text: '描述',
        flex: 1,
        dataIndex: 'desc'
    }]

});