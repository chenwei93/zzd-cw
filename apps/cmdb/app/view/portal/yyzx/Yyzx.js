Ext.define('Cmdb.view.portal.yyzx.Yyzx', {
    extend: 'Ext.panel.Panel',
    xtype: 'yyzx',

    requires: [
        'Cmdb.view.portal.yyzx.YyzxController',
        'Cmdb.view.portal.yyzx.YyzxModel'
    ],
    layout: 'hbox',
    items: [{
        flex: 0.5
    }, {
        margin: '40 0 0 0',
        flex: 1,
        xtype: 'buttongroup',
        border: false,
        title: '选择应用',
        columns: 2,
        defaults: {
            xtype: 'button',
            scale: 'large',
            iconAlign: 'left',
            textAlign: 'left',
            handler: 'onButtonClick'
        },
        items: [{
            text: '工作门户',
            colspan: 2,
            width: '100%',
            itemId: 'portal',
            iconCls: 'x-fa fa-television',
            displayText: 'User manager',
            height: '4em'
        }, {
            text: '运维管理中心',
            itemId: 'ops',
            iconCls: 'x-fa fa-cog',
            displayText: 'User manager',
            width: 240,
            height: '4em'
        }, {
            text: '资产管理和服务中心',
            itemId: 'asset',
            iconCls: 'x-fa fa-money',
            displayText: 'User manager',
            width: 240,
            height: '4em'
        }, {
            text: '可视化展厅',
            itemId: 'dashboard',
            iconCls: 'x-fa fa-eye',
            displayText: 'User manager',
            width: 240,
            height: '4em'
        }, {
            text: '监控预警室',
            itemId: 'monitor',
            iconCls: 'x-fa fa-camera',
            displayText: 'User manager',
            width: 240,
            height: '4em'
        },{
            text: '平台管理部',
            itemId: 'mgr',
            iconCls: 'x-fa fa-sitemap',
            displayText: 'User manager',
            width: 240,
            height: '4em'
        },{
            text: '综合管理中心',
            itemId: 'integrate',
            iconCls: 'x-fa fa-th-large',
            displayText: 'User manager',
            width: 240,
            height: '4em'
        }]
    }, {
        flex: 0.5
    }]
});
