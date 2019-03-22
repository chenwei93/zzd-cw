Ext.define('AP.view.service.Service', {
    extend: 'Ext.grid.Panel',
    xtype: 'service',

    requires: [
        'AP.model.Service',
        'AP.view.service.ServiceShow',
        'AP.view.service.ServiceModel',
        'AP.view.service.ServiceController'

    ],
    controller: 'service',
    viewModel: {
        type: 'service'
    },
    bind: {
        store: '{list}'
    },
    listeners: {
        'rowdblclick': 'onShow'
    },
    tbar: [{
        ui: 'default',
        text: '更新',
        iconCls: 'x-fa fa-refresh',
        handler: 'onRefresh'
    }, '->', {
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
        flex: 0.7
    }, {
        text: 'URL',
        dataIndex: 'url',
        flex: 3,

    }, {
        text: '部门',
        dataIndex: 'node',
        flex: 0.5
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