Ext.define('Cmdb.store.ModuleMenuMonitor', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-monitor',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '监控预警室',
        expanded: true,
        children: [{
            text: '总控台',
            iconCls: 'x-fa fa-desktop',
            viewType: 'zkt',
            leaf: true
        }, {
            text: '事件台',
            iconCls: 'x-fa fa-archive',
            viewType: 'sjt',
            leaf: true
        }, {
            text: '资源库',
            iconCls: 'x-fa  fa-database',
            viewType: 'jkq',
            leaf: true
        }, {
            text: ' 云资源总览',
            iconCls: 'x-fa  fa-dashboard',
            viewType: 'zyk',
            leaf: true
        }, {
            text: '任务管理',
            iconCls: 'x-fa  fa-list',
            viewType: 'rwgl_m',
            leaf: true
        }, {
            text: '报表',
            iconCls: 'x-fa  fa-table',
            viewType: 'bb',
            leaf: true
        }]
    }
});
