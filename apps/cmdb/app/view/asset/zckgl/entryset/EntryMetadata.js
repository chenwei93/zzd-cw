Ext.define('Cmdb.view.asset.zckgl.entryset.EntryMetadata', {
    extend: 'Ext.tree.Panel',
    xtype: 'entrymetadata',

    requires: [
        'Cmdb.model.EntryMetadata',
        'Cmdb.view.asset.zckgl.entryset.EntryMetadataModel',
        'Cmdb.view.asset.zckgl.entryset.EntryMetadataController',
        'Cmdb.view.asset.zckgl.entryset.MetadataEdit',
        'Cmdb.view.asset.zckgl.entryset.MetadataAdd',
        'Cmdb.view.asset.zckgl.entryset.EntryMetadataShow',
    ],
    rootVisible: false,
    controller: 'entrymetadata',
    // store: {},
    viewModel: {
        type: 'entrymetadata'
    },
    bind: {
        store: '{list}'
    },
    listeners: {
        'rowdblclick': 'onShow1'
    },
    tbar: [{
        text: '新增元素',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }, '->', {
        xtype: 'textfield',
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
        },
        emptyText: '输入查询内容直接回车'
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
        xtype: 'treecolumn', //this is so we know which column will show the tree
        text: '名称',
        dataIndex: 'text',
        flex: 2,
        sortable: true
    }, {
        text: '系统标识',
        dataIndex: 'name',
        flex: 1,
        sortable: true
    }, {
        text: '数据类型',
        dataIndex: 'dataType',
        flex: 1,
        sortable: false
    }, {
        text: '国标规范',
        dataIndex: 'GB',
        flex: 1,
        sortable: false
    }, {
        text: '标识名称',
        dataIndex: 'fullName',
        flex: 1,
        sortable: false
    }, {
        text: '备注',
        dataIndex: 'memo',
        flex: 1,
        sortable: true
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onEdit'
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                tooltip: '查看',
                handler: 'onShow'
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作',
        renderer: function (view, a, record) {
            var data = record.data.GB;
            if (data == '是') {
                this.items.items[0].iconCls = null;
                this.items.items[1].iconCls = null;
            }
        }

    }]

});
