Ext.define('AP.view.application.Application', {
    extend: 'Ext.grid.Panel',
    xtype: 'application',
    requires: [
        'AP.model.Application',
        'AP.view.application.ApplicationModel',
        'AP.view.application.ApplicationController'
    ],
    controller: 'application',
    viewModel: {
        type: 'application'
    },
    bind: {
        store: '{list}'
    },
    listeners: {
        'rowdblclick': 'onShow'
    },
    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-share-square-o',
        text: '发布',
        handler: 'onPublish'
    }, {
        ui: 'default',
        iconCls: 'x-fa fa-check-square-o',
        text: '授权',
        handler: 'onAuthorize'
    }],
    selType: 'checkboxmodel',
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '应用唯一码',
        dataIndex: 'qname',
        flex: 2
    }, {
        text: '应用名称',
        dataIndex: 'title',
        flex: 1,
        sortable: false
    }, {
        text: '应用标识名',
        dataIndex: 'name',
        flex: 1
    }, {
        text: '应用说明',
        dataIndex: 'description',
        flex: 2,
        sortable: false
    }, {
        text: '状态',
        flex: 1,
        renderer: function () {
            return '<p style="text-align: center;margin:0;"><span class="x-fa fa-play" style="color: #008B45;text-align: center"></span></p>'
        }
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                handler: 'onShow1',
                margin: 5,
                tooltip: '查看'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                margin: 5,
                tooltip: '编辑'
            }
        ],

        cls: 'content-column',
        width: 120,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }]
});