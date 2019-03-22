Ext.define('DA.view.entry.services.ServicesOperateChoose', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-choose',

    requires: [
        'DA.view.entry.services.ServicesOperateChooseModel',
        'DA.model.Services'
    ],
    scrollable: true,
    controller: 'services-operate',
    viewModel: {
        type: 'services-choose'
    },
    bind: {
        store: '{list}'
    },
    columns: [{
        text: '数据集标题',
        dataIndex: 'title',
        flex: 2
    }, {
        text: '数据集名称',
        dataIndex: 'entityKey',
        flex: 1,
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    },
    listeners: {
        render: 'onChooseRender',
        rowdblclick: 'onRowdbclick'
    }
});
