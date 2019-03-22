Ext.define('DA.view.dataservice.entry.EntryPendingCenter', {
    extend: 'Ext.grid.Panel',
    xtype: 'entry-pendingcenter',

    columnLines: true,
    requires: [
        'DA.model.Entry',
        'DA.view.dataservice.entry.EntryPendingCenterModel',
        'DA.view.dataservice.entry.EntryPendingCenterController',
    ],

    controller: 'entry-pendingcenter',
    selType: 'checkboxmodel',
    viewModel: {
        type: 'entry-pendingcenter'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '批量审核',
        iconCls: 'x-fa fa-list-ol',
        ui: 'default',
        handler: 'onDeal'
    }, '->', {
        xtype: 'combo',
        queryMode: 'local',
        triggerAction: 'all',
        forceSelection: false,
        editable: false,
        name: 'title',
        displayField: 'name',
        valueField: 'value',
        emptyText: '当前状态',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '待发布', value: 'UnPublished'},
                {name: '待审核', value: 'UnApproved'}
            ]
        },
        listeners: {
            change: 'onChange'
        },
        reference: 'comboState'
    }, {
        xtype: 'textfield',
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        iconCls: 'x-fa fa-refresh',
        tooltip: '重置',
        handler: 'onRest'
    }, {
        iconCls: 'x-fa fa-navicon',
        tooltip: '更多条件查询',
        handler: function () {
            Ext.create({
                xtype: 'no-authority'
            })

        }
    }],

    listeners: {
        'rowdblclick': 'onShow',
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: "资源标题",
        flex: 2,
        sortable: true,
        dataIndex: 'resourceTitle'
    }, {
        text: "资源标识符",
        sortable: true,
        flex: 2,
        dataIndex: 'resourceId'
        // }, {
        //     text: "资源类型",
        //     sortable: true,
        //     flex: 1,
        //     dataIndex: 'type'
    }, {
        text: "资源提供方",
        sortable: true,
        flex: 1,
        dataIndex: 'deptName'
    }, {
        text: '主题',
        flex: 1,
        dataIndex: 'subjectName'
    }, {
        text: "当前状态",
        sortable: true,
        flex: 1,
        dataIndex: 'state',
        renderer: function (value) {
            if (value == 'UnPublished') {
                return '待发布'
            } else if (value == 'UnApproved') {
                return '待审核'
            }
            else if (value == 'Generated') {
                return '新生成'
            } else {
                return '已发布'
            }
        }
    }, {
        text: "类型",
        sortable: true,
        flex: 1,
        dataIndex: 'processType',
        renderer: function (value) {
            var arr = ['已上架', '共享上架', '开放上架'];
            return arr[value]

        }
    // }, {
    //     xtype: 'datecolumn',
    //     format: 'Y-m-d h:i:s',
    //     text: "创建时间",
    //     sortable: true,
    //     flex: 1,
    //     dataIndex: 'approvalTime'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                tooltip: '编辑'
            }
        ],
        cls: 'content-column',
        align: 'center',
        width: 70,
        text: '操作',
        right: 0,
        tooltip: '操作 '
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});
