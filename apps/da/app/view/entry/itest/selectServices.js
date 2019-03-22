Ext.define('DA.view.entry.itest.selectServices', {
    extend: 'Ext.grid.Panel',
    xtype: 'select-services',

    viewModel: {
        type: 'servicewh'
    },
    bind: {
        store: '{list}'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '服务名称',
        dataIndex: 'title',
        flex: 2
    }, {
        text: '类别',
        dataIndex: 'qualified',
        flex: 1
    }],
    listeners: {
        'rowdblclick': 'onDbClick',
        render: 'onSelectServicesRender'
    }
});
