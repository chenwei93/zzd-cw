Ext.define('Cmdb.view.mgr.lcgl.gzlsj.Gzlsj', {
    extend: 'Ext.panel.Panel',
    xtype: 'gzlsj',


    requires: [
        'Cmdb.view.mgr.lcgl.gzlsj.GzlsjController',
        'Cmdb.view.mgr.lcgl.gzlsj.GzlsjModel'
    ],
    layout: 'fit',
    html: '<div style="margin: 40px"><a target="_blank" style="font-size: 20px;" href="http://demoserver:8080/activiti-app/editor/#/processes">流程设计器' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="x-fa fa-long-arrow-right"></span></a></div>'
});