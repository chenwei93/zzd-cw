Ext.define('Cmdb.view.business.mlzl.mlzlList', {
    extend: 'Ext.tab.Panel',
    xtype: 'mlzl-list',


    requires: [
        'Cmdb.view.business.mlzl.MlzlController',
        'Cmdb.view.business.mlzl.MlzlModel'

    ],
    plain: true,
    frame: false,
    defaults: {
        useArrows: true,
        rootVisible: false,
        animate: false,
        reserveScrollbar: true,
        header: false,
        frame: false
    },
    controller: 'mlzl',
    viewModel: {
        type: 'mlzl'
    },
    items: [{
        title: '设备资产管理',
        xtype: 'mlzl'
    }, {
        title: '数字资产管理',
        xtype: 'mlzl-entry'
    }, {
        title: '接口服务',
        xtype: 'mlzl-server'
    }]
});