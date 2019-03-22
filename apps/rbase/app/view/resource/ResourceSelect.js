Ext.define('RBase.view.resource.ResourceSelect', {
    extend: 'Ext.grid.Panel',
    xtype: 'resource-select',


    controller: 'resourcesearch',
    viewModel: {
        type: 'resource'
    },
    bind: {
        store: '{list}'
    },
    width: 770,
    height: 450,
    listeners: {
        'rowdblclick': 'onDbclick'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '资源标题',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '资源摘要',
        flex: 2,
        dataIndex: 'summary'
    }, {
        text: '路径',
        flex: 1,
        dataIndex: 'pat'
    }],


    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }

});