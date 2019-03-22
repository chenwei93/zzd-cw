Ext.define('DRDMS.view.region.Region', {
    extend: 'Ext.tree.Panel',
    xtype: 'region',

    requires: [
        'DRDMS.model.Region',
        'DRDMS.view.region.RegionModel',
        'DRDMS.view.region.RegionController',
        'DRDMS.view.region.RegionEdit'
    ],
    controller: 'region',

    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    viewModel: {
        type: 'region'
    },
    bind: {
        store: '{list}'
    },

    cls: 'shadow',
    tbar: [{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    },{
        ui: 'default',
        text: '新增',
        iconCls: 'x-fa fa-plus',
        handler: 'onAdd'
    }, '->', {
        xtype: 'textfield',
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
    expandAll: true,
    columns: [{
        xtype: 'treecolumn',
        text: "地区",
        flex: 1,
        dataIndex: 'text'
    }, {
        text: "地区编码",
        flex: 1,
        dataIndex: 'code'
    }, {

        text: " 行政级别",
        flex: 1,
        dataIndex: 'rank',
        renderer: function (value) {
            if (value == 'Province') {
                return '省/直辖市'
            } else {
                return '地市'
            }
        }
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
        width: 60,
        text: '操作',
        align: 'center',
        tooltip: '操作'
    }]
});