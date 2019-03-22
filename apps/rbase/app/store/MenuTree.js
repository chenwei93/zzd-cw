Ext.define('RBase.store.MenuTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menuTreeStore',
    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: '首页',
            iconCls: 'x-fa fa-home',
            rowCls: 'nav-tree-badge nav-tree-badge-hot',
            viewType: 'app-home',
            leaf: true
        }, {
            text: '资源主机配置',
            iconCls: 'x-fa fa-laptop',
            viewType: 'resourcenode',
            leaf: true
        }, {
            text: '资源池监控配置',
            iconCls: 'x-fa fa-pie-chart',
            viewType: 'resourcepool',
            leaf: true
        }, {
            text: '资源库管理',
            iconCls: 'x-fa fa-database',
            viewType: 'resource',
            leaf: true
        }, {
            text: '资源检索',
            iconCls: 'x-fa fa-search-plus',
            viewType: 'resourcesearch',
            leaf: true
            // }, {
            //     text: '节点配置',
            //     iconCls: 'x-fa fa-sitemap',
            //     viewType: 'profile',
            //     leaf: true
        }, {
            text: '调试日志',
            iconCls: 'x-fa fa-list',
            viewType: 'logs',
            leaf: true
        }]
    }
});
