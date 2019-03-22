Ext.define('Cmdb.store.ModuleMenuInterface', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-interface',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '接口服务管理中心',
        expanded: true,
        children: [{
            text: '数据服务管理平台-AP',
            iconCls: 'x-fa fa-list',
            viewType: 'datamgr',
            leaf: true
        }]
    }
});
