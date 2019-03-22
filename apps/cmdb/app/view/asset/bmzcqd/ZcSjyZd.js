Ext.define('Cmdb.view.asset.bmzcqd.ZcSjyZd', {
    extend: 'Ext.grid.Panel',
    xtype: 'zc-sjyzd',


    requires: [],
    tabPosition: 'top',
    // tabRotation: 0,
    plain: true,

    tbar: [{
        text: '新增',
        handler: 'onAdd'
    }],
    controller: 'zc-sjy',
    store: {
        autoLoad: true,
        proxy: {
            type: 'ajax2',
            url: 'app/store/data/asset/bmzcqd/Dictionary.json'
        }
    },
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'text'
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'code'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '修改',
                handler: 'onEdit'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]


});