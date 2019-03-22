Ext.define('DRDMS.view.keyword.Keyword', {
    extend: 'Ext.grid.Panel',
    xtype: 'keyword',


    requires: [
        'DRDMS.view.keyword.KeywordAdd',
        'DRDMS.view.keyword.KeywordController',
        'DRDMS.view.keyword.KeywordEdit',
        'DRDMS.view.keyword.KeywordModel'
    ],
    controller: 'keyword',
    viewModel: {
        type: 'keyword'
    },
    bind: {
        store: '{list}'
    },
    rootVisible: false,
    listeners: {
        'selectionchange': 'onSelectionChange'
    },
    tbar: [{
        text: ' 新增',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }, '->', {
        xtype: 'textfield',
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
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
        handler: 'onReset'
    }, {
        iconCls: 'x-fa fa-navicon',
        tooltip: '更多条件查询',
        handler: 'onQuery'
    }],
    columns: [{
        text: '标签名称',
        dataIndex: 'title',
        flex: 1,
        sortable: false
    }, {
        text: '标签编码',
        dataIndex: 'code',
        flex: 1,
        sortable: true
    }, {
        text: '标签描述',
        dataIndex: 'description',
        flex: 2,
        sortable: false
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                tooltip:'编辑',
                handler: 'onRealm'
            },
            {
                iconCls: 'x-fa fa-close',
                tooltip:'删除',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 50,
        align: 'center',
        text: '操作',
        tooltip: '操作 '
    }]
});