Ext.define('Cmdb.view.asset.bmzcqd.ZcmlxGrid', {
    extend: 'Ext.tree.Panel',
    xtype: 'zcmlx-grid',


    tbar: [{
        text: '确定',
        handler: 'onZcMlxGridSure'
    }, {
        text: '取消',
        handler: 'onZcMlxGridCancel'
    }],
    selType: 'checkboxmodel',
    rootVisible: false,
    store: {
        type: 'tree',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'app/store/data/asset/qlzcqd/QlzcqdTree.json',
            rootProperty: 'children'
        }
    },
    columns: [{
        xtype: 'treecolumn',
        text: '目录项名称',
        flex: 1,
        dataIndex: 'text'
    }]
});

