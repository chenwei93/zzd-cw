Ext.define('Cmdb.view.portal.wdgl.Wdgl', {
    extend: 'Ext.panel.Panel',
    xtype: 'wdgl',


    layout: 'fit',
    items: [{
        xtype: 'uxiframe',
        src: 'app/view/portal/wdgl/angular-filemanager-master/index.html'
    }]

});