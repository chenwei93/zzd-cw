Ext.define('RBase.view.resourcepool.ResourcePoolAddChoose', {
    extend: 'Ext.panel.Panel',
    xtype: 'resourcepool-addchoose',


    requires: [
        'RBase.view.resourcepool.ResourcePoolAddController',
        'RBase.view.resourcepool.ResourcePoolAddDb',
        'RBase.view.resourcepool.ResourcePoolAddFile'
    ],
    controller: 'resourcepool-add',
    // html: '<h3>选择新增资源池的资源形态：</h3>',
    layout: 'column',
    defaults: {
        xtype: 'button',
        columnWidth: 0.5,
        margin: '10',
        height: 37,
        handler: 'onChoose'
    },
    items: [{
        text: '数据库',
        dataAlias: 'Db',
    }, {
        text: '外部接口',
        dataAlias: 'Service',
    }, {
        text: '文件',
        dataAlias: 'file',
    }, {
        text: 'HDFS',
        dataAlias: 'HDFS',
    }]
});
