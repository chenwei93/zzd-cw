Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddChoose', {
    extend: 'Ext.panel.Panel',
    xtype: 'resourcepool-addchoose',


    requires: [
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddController',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddDb',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddFile'
    ],
    controller: 'resourcepool-add',
    html: '<h3>选择新增资源池的资源形态：</h3>',
    layout: 'hbox',
    items: [{
        xtype: 'button',
        margin: '60 40 10 40',
        height: 37,
        flex: 1,
        text: '文件',
        handler: 'onFileAdd'
    }, {
        xtype: 'button',
        flex: 1,
        height: 37,
        margin: '60 40 10 0',
        text: '数据库',
        handler: 'onDbAdd'
    }]
});