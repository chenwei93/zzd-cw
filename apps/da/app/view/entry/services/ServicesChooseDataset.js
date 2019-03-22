Ext.define('DA.view.entry.services.ServicesChooseDataset', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-choose-dataset',

    requires: [
        'DA.view.entry.services.ServicesChooseDatasetController',
    ],
    controller: 'services-choose-dataset',
    reference: 'chooseDataset',
    selType: 'checkboxmodel',
    height: 395,
    scrollable: true,
    tbar: [{
        ui: 'default',
        text: '确定',
        handler: 'onSure'
    }],
    columns: [{
        text: '名称',
        dataIndex: 'name',
        flex: 1
    }, {
        text: '显示名',
        dataIndex: 'title',
        flex: 1,
    }, {
        text: '数据类型',
        dataIndex: 'dataType',
        flex: 1,
    }, {
        text: '数据长度',
        dataIndex: 'dataLength',
        flex: 1,
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    },
    listeners: {
        render: 'onRender'
    }
});
