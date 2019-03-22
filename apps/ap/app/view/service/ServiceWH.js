Ext.define('AP.view.service.ServiceWH', {
    extend: 'Ext.grid.Panel',
    xtype: 'servicewh',

    requires: [
        'AP.model.Service',
        'AP.view.service.ServiceWHModel',
        'AP.view.service.ServiceWHController'

    ],
    controller: 'servicewh',
    viewModel: {
        type: 'servicewh'
    },
    bind: {
        store: '{list}'
    },
    selType: 'checkboxmodel',
    tbar: [{
        ui: 'default',
        text: '发布',
        iconCls: 'x-fa fa-share-square-o',
        handler: 'onPublish'
    }, {
        ui: 'default',
        text: '授权',
        iconCls: 'x-fa fa-check-square-o',
        handler: 'onAuthorize'
    }],
    listeners: {
        'rowdblclick': 'onShow'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '服务名称',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '服务唯一码',
        dataIndex: 'qname',
        flex: 1
    }, {
        text: 'URL',
        dataIndex: 'whurl',
        flex: 3
    }, {
        text: '类别',
        dataIndex: 'qualified',
        flex: 0.5
    }, {
        text: '服务类型',
        dataIndex: 'type',
        flex: 1
    }, {
        text: '部门',
        dataIndex: 'node',
        flex: 1
        // }, {
        //     text: '服务说明',
        //     dataIndex: 'description',
        //     flex: 1
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                iconCls: 'x-fa fa-eye',
                handler: 'onShow1',
                margin: 5,
                tooltip: '查看'
            }, {
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                margin: 5,
                tooltip: '编辑'
            }, {
                iconCls: 'x-fa fa-copy',
                handler: 'onCopy',
                margin: 5,
                tooltip: '复制URL'
            }
        ],
        cls: 'content-column',
        width: 90,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});