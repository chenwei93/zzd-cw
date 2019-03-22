Ext.define('Cmdb.view.business.allzcml.PeMgr', {
    extend: 'Ext.grid.Panel',
    xtype: 'pemgr',


    requires:['Cmdb.view.business.allzcml.PeMgrEdit',
        'Cmdb.view.business.allzcml.PeMgrController'],
    controller: 'pemgr',
    columns: [{
        dataIndex: 'zhname',
        text: '租户',
        flex: 1,
    }, {
        dataIndex: 'name',
        text: '云资源名称',
        flex: 1,
    }, {
        dataIndex: 'sype',
        text: '配额',
        flex: 1,
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onEdit'
            }
        ],
        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }],
    listeners: {
        render: 'onPemgrRender'
    }

});
