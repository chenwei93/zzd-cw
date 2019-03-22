Ext.define('AP.store.MenuTree', {
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
            text: '服务管理',
            iconCls: 'x-fa fa-server',
            expanded: true,
            children: [{
                text: '自定义服务',
                iconCls: 'x-fa fa-pencil-square-o',
                viewType: 'services',
                leaf: true
            }, {
                text: '服务维护',
                iconCls: 'x-fa  fa-wrench',
                viewType: 'servicewh',
                leaf: true
            }, {
                text: '服务清单',
                iconCls: 'x-fa fa-align-justify',
                viewType: 'service',
                leaf: true
            }]
        }, {
            text: '应用管理',
            iconCls: 'x-fa fa-th-large',
            expanded: true,
            children:[{
                text: '新增应用',
                iconCls: 'x-fa fa-plus-square-o',
                viewType: 'application-add',
                leaf: true
            },{
                text: '应用维护',
                iconCls: 'x-fa fa-gear',
                viewType: 'application',
                leaf: true
            }]
        }, {
            text: '平台管理',
            iconCls: 'x-fa fa-desktop',
            viewType: 'profile',
            leaf: true
        }]
    }
});
