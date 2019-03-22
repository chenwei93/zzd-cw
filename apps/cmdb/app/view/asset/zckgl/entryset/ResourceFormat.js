Ext.define('Cmdb.view.asset.zckgl.entryset.ResourceFormat', {
    extend: 'Ext.grid.Panel',
    xtype: 'resourceformat',

    requires: [
        'Cmdb.view.asset.zckgl.entryset.ResourceFormatController',
        'Cmdb.view.asset.zckgl.entryset.ResourceFormatAdd',
        'Cmdb.view.asset.zckgl.entryset.ResourceFormatEdit',
        'Cmdb.view.asset.zckgl.entryset.ResourceFormatModel',
    ],
    controller: 'resourceformat',
    store: {
        data: [{
            "name": "数据库",
            "code": "11001/A00034VG345",
            "describtion": "空间数据成果以MapGis，ArcInfo E00、Coverage、Shape格式存储，规划附表数据库为DBF、Microsoft Access、Microsoft Word格式，规划文本以Microsoft Word，HTML两种格式存储，规划附图成果图件以MapGis格式存储，规划附表成果文件以Microsoft Word格式存储。自编代码字典为DBF格式"
        },
            {
                "name": "图片",
                "code": "11002/A00034VG345_1",
                "describtion": "以MapGis，ArcInfo E00、Coverage、Shape格式存储，规划附表数据库为DBF、Microsoft Access、Microsoft Word格式，规划文本以Microsoft Word，HTML两种格式存储，规划附图成果图件以MapGis格式存储，规划附表成果文件以Microsoft Word格式存储。自编代码字典为DBF格式"
            },
            {
                "name": "文档",
                "code": "11003/A00034VG345_1",
                "describtion": "规划文本以Microsoft Word，HTML两种格式存储，规划附图成果图件以MapGis格式存储，规划附表成果文件以Microsoft Word格式存储。自编代码字典为DBF格式"
            },
            {
                "name": "音频",
                "code": "11004/A00034VG345_1",
                "describtion": "空间数据成果以MapGis，ArcInfo E00、Coverage、Shape格式存储"
            },
            {
                "name": "视频",
                "code": "11005/A00034VG345_1",
                "describtion": "自编代码字典为DBF格式"
            },
            {
                "name": "服务",
                "code": "11006/A00034VG345_1",
                "describtion": "规划附图成果图件以MapGis格式存储，规划附表成果文件以Microsoft Word格式存储。自编代码字典为DBF格式"
            }]
    },
    tbar: [{
        text: '新增数据',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }, '->',
        //     , {
        //     xtype: 'combo',
        //     queryMode: 'local',
        //     triggerAction: 'all',
        //     forceSelection: false,
        //     editable: false,
        //     name: 'title',
        //     displayField: 'name',
        //     valueField: 'value',
        //     emptyText: '资源形态',
        //     store: {
        //         fields: ['name', 'value'],
        //         data: [
        //             {name: '图片', value: 'pic'},
        //             {name: '数据库', value: 'sql'},
        //             {name: '文档', value: 'txt'},
        //             {name: '服务', value: 'service'},
        //             {name: '视频', value: 'video'},
        //             {name: '音频', value: 'music'}
        //         ]
        //     }
        // },
        {
            xtype: 'textfield',
            emptyText: '输入查询内容直接回车',
            reference: 'searchText',
            triggers: {
                bar: {
                    cls: 'x-form-clear-trigger',
                    handler: function () {
                        this.reset();
                    }
                }
            },
            listeners: {
                specialkey: 'onSpecialkey'
            }
        }, {
            iconCls: 'x-fa fa-refresh',
            tooltip: '重置',
            handler: 'onreset'
        }, {
            iconCls: 'x-fa fa-navicon',
            tooltip: '更多条件查询',
            handler: 'onQuery'
        }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: "形态标题",
        flex: 1,
        sortable: true,
        dataIndex: 'name'
    }, {
        text: "形态编码",
        flex: 1,
        sortable: true,
        dataIndex: 'code'
    }, {
        text: " 描述",
        flex: 2,
        sortable: false,
        dataIndex: 'describtion'
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip:'编辑',
                handler: 'onEdit'
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-close',
                tooltip:'删除',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 50,
        text: '操作',
        align: 'center'
    }],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            itemId: 'userPaginationToolbar',
            displayInfo: true,
            bind: '{matadatadata}'
        }]
});
