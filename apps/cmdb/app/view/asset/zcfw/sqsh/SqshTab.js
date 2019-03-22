Ext.define('Cmdb.view.asset.zcfw.sqsh.SqshTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'sqsh-tab',


    requires: [
        'Cmdb.view.asset.zcfw.sqsh.sqd',
        'Cmdb.view.asset.zcfw.sqsh.Timeline',
    ],


    tabPosition: 'top',
    plain: true,
    items: [{
        title: '申请单',
        items: [{
            xtype: 'sqd'
        }]
    }, {
        title: '附件',
        layout: 'column',
        defaults: {
            margin: 10
        },
        items: [{
            html: '点击进行相关附件下载查看',
            columnWidth: 1,
        }, {
            xtype: 'button',
            href: 'http://www.sencha.com/',
            columnWidth: 1,
            tooltip: '资产配置.doc',
            text: '资产配置.doc'
        }, {
            xtype: 'button',
            href: 'http://www.sencha.com/',
            columnWidth: 1,
            text: '资产配置.json',
            tooltip: '资产配置.json'
        }]
    }, {
        title: '流程图',
        xtype: 'uxiframe',
        reference: 'dagre',
        // src: 'app/view/asset/zcfw/sqsh/dagre/tcp-state-diagram.html'
    }]
});