Ext.define('DA.view.mgr.resourcepool.ResourcePoolAddChoose', {
    extend: 'Ext.panel.Panel',
    xtype: 'resourcepool-addchoose',


    requires: [
        'DA.view.mgr.resourcepool.ResourcePoolAddController',
        'DA.view.mgr.resourcepool.ResourcePoolAddDb',
        'DA.view.mgr.resourcepool.ResourcePoolAddFile'
    ],
    controller: 'resourcepool-add',
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
