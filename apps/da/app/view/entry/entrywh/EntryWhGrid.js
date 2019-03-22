Ext.define('DA.view.entry.entrywh.EntryWhGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrywh-grid',

    requires: [
        'DA.model.Entryx',
        'DA.view.entry.entrywh.EntryWhController',
        'DA.view.entry.entrywh.EntryWHSController',
        'DA.view.entry.entrywh.EntryWhFileUpload'
    ],
    columnLines: true,
    controller: 'entry-wh',
    store: {
        autoLoad: true,
        model: 'Entryx',
        proxy: {
            type: 'ajax2',
            ur1l: '/rest/entries?query=example&entityStatus=Default',
            url: 'resources/data/entry/services/choose.json',
        }
    },
    listeners: {
        'rowdblclick': 'onShow'
    },
    tbar: [{
        text: '刷新',
        ui: 'default',
        iconCls: 'x-fa fa-refresh',
        handler: 'onreset'
        // }, {
        //     text: '导入',
        //     ui: 'default',
        //     iconCls: 'x-fa fa-download',
        //     handler: 'onFile'
    }, '->', {
        xtype: 'textfield',
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        iconCls: 'x-fa fa-refresh',
        tooltip: '重置',
        handler: 'onReset'
    }, {
        iconCls: 'x-fa fa-navicon',
        tooltip: '更多条件查询',
        handler: 'onQuery'
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: "资源标题",
        width: 250,
        dataIndex: 'title'
        // locked: true
    }, {
        text: "资源标识符",
        flex: 2,
        dataIndex: 'entityKey'
    }, {
        text: "资源类型",
        sortable: true,
        flex: 1,
        dataIndex: 'type'
    }, {
        text: "资源格式",
        sortable: true,
        flex: 1,
        dataIndex: 'format'
    }, {
        text: "数据表",
        sortable: true,
        flex: 1.5,
        dataIndex: 'shjTable',
    }, {
        xtype: 'datecolumn',
        format: 'Y-m-d h:i:s',
        text: "创建时间",
        sortable: true,
        flex: 1,
        dataIndex: 'createTime'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                iconCls: 'x-fa fa-plus',
                handler: 'onClone',
                tooltip: '克隆'
            }, {
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                tooltip: '编辑'
            },
            {
                iconCls: 'x-fa fa-eye',
                handler: 'onShow1',
                tooltip: '查看'
            },
            {
                iconCls: 'x-fa fa-close',
                handler: 'onDelete',
                tooltip: '删除'
            },
            {
                iconCls: 'x-fa fa-random',
                handler: 'onCreateJK',
                tooltip: '生成接口'

            }
        ],
        cls: 'content-column',
        width: 100,
        align: 'center',
        text: '操作',
        tooltip: '操作 '
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
