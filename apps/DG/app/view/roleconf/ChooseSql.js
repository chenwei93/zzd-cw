Ext.define('DG.view.roleconf.ChooseSql', {
    extend: 'Ext.grid.Panel',
    xtype: 'choose-sql',


    store: {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/data-quality-rest/v1/rule/tables/data-bond'
        }
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '表英文名称',
        dataIndex: 'tableName',
        flex: 1
    }, {
        text: '表中文名称',
        dataIndex: 'tableComment',
        flex: 1
    }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    },
    listeners: {
        rowdblclick: 'onRowDbClick'
    }
});
