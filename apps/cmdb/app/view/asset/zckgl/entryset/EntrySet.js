Ext.define('Cmdb.view.asset.zckgl.entryset.EntrySet', {
    extend: 'Ext.tree.Panel',
    xtype: 'entryset',

    requires: [
        'Cmdb.model.EntrySet',
        'Cmdb.view.asset.zckgl.entryset.EntrySetModel',
        'Cmdb.view.asset.zckgl.entryset.EntrySetController',
        'Cmdb.view.asset.zckgl.entryset.EntrySetAdd',
        'Cmdb.view.asset.zckgl.entryset.EntrySetEdit',
        'Cmdb.view.asset.zckgl.entryset.EntrySetEditBase',
        'Cmdb.view.asset.zckgl.entryset.EntrySetEditMetadata',
    ],
    controller: 'entryset',
    viewModel: {
        type: 'entryset'
    },
    bind: {
        store: '{list}'
    },
    rootVisible: false,
    tbar: [{
        text: '刷新',
        ui: 'default',
        iconCls: 'x-fa fa-refresh',
        handler: 'onRefresh'
    }, '->',
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
    columns:
        [{
            xtype: 'treecolumn',
            text: "名称",
            flex: 1,
            dataIndex: 'title',
            editable: true,
            reference: 'title',
            editor: {
                xtype: 'textfield'
            },
        }, {
            text: "版本",
            sortable: false,
            flex: 1,
            dataIndex: 'version',
            reference: 'version',
            editor: {
                xtype: 'textfield'
            },
        }, {
            text: "状态",
            editable: false,
            flex: 1,
            dataIndex: 'entityStatus',
            renderer: function (value) {
                if (value == 'Default') {
                    return '默认'
                } else {
                    return '激活'
                }
            }
        }, {
            text: "操作",
            align: 'center',
            xtype: 'actioncolumn',
            items: [{
                iconCls: 'x-fa fa-clone',
                tooltip: '复制',
                handler: 'onClone'
            }, {
                iconCls: 'x-fa fa-plus-circle',
                tooltip: '新增版本',
                handler: 'onAddVersion'
            }, {
                iconCls: 'x-fa fa-check-circle-o',
                tooltip: '激活',
                handler: 'onActivate'
            }, {
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onPencil'
            }, {
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
                handler: 'onDelete'

            }],
            cls: 'content-column',
            width: 110
        }]
})
;
