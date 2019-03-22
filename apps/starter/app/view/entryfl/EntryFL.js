Ext.define('Starter.view.entryfl.EntryFL', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryfl',

    columnLines: true,
    requires: [
        'Starter.view.entryfl.EntryFLController',
        'Starter.view.entryfl.EntryFLModel',
        'Starter.view.entryfl.EntryFLChoose',
        'Starter.view.entryfl.CatalogAdd',

    ],

    controller: 'entry-fl',
    selType: 'checkboxmodel',
    viewModel: {
        type: 'entry-fl'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '指定分类',
        ui: 'default',
        iconCls: 'x-fa fa-th-large',
        handler: 'onChoose'
    }],
    listeners: {
        'rowdblclick': 'onShow'
    },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '信息资源名称',
        width: 220,
        dataIndex: 'resTitle'
    }, {
        text: '信息资源提供方',
        columns: [{
            text: '信息资源提供方',
            dataIndex: 'rpOrgName'
        }, {
            text: '提供方内部部门',
            dataIndex: ''
        }]
    }, {
        text: '资源提供方代码',
        dataIndex: 'providerCode'
    }, {
        text: '信息资源摘要',
        flex: 1,
        dataIndex: 'abstracts'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});


