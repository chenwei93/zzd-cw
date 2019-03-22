Ext.define('DA.view.entry.iwh.iWh', {
    extend: 'Ext.grid.Panel',
    xtype: 'iwh',

    requires: [
        'DA.model.Services',
        'DA.view.entry.iwh.iWhModel',
        'DA.view.entry.iwh.iWhController'
    ],
    controller: 'iwh',
    viewModel: {
        type: 'iwh'
    },
    bind: {
        store: '{list}'

    },
    selType: 'checkboxmodel',
    listeners: {
        'rowdblclick': 'onShow'
    },
    tbar: [{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'onRefresh'
    }, {
        ui: 'default',
        text: '发布',
        iconCls: 'x-fa fa-share',
        handler: 'onPublish'
    }, '->', {
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        emptyText: '接口状态',
        reference: 'serviceType',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '已发布', value: 'Published'},
                {name: '未发布', value: 'New'}
            ]
        },
        listeners: {
            change: 'onChooseSelect'
        }
    }, {
        xtype: 'textfield',
        labelWidth: 40,
        fieldLabel: '标题',
        reference: 'searchTextT',
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
        xtype: 'textfield',
        fieldLabel: '识别码',
        labelWidth: 50,
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
    }],
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
        dataIndex: 'url',
        flex: 2,
    }, {
        text: '接口状态',
        dataIndex: 'status',
        flex: 1,
        renderer: function (data) {
            var arr = {
                Published: '已发布',
                New: '未发布',
            };
            return arr[data];
        }
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
                iconCls: 'x-fa fa-close',
                handler: 'onDelete',
                margin: 5,
                tooltip: '删除'
            }, {
                iconCls: 'x-fa fa-copy',
                handler: 'onCopy',
                margin: 5,
                tooltip: '复制'
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
