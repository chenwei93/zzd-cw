Ext.define('Cmdb.store.ModuleMenuMgr', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-mgr',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '平台管理部',
        expanded: true,
        children: [{

            text: '综合查询',
            iconCls: 'x-fa  fa-list',
            viewType: 'pageblank',
            expanded: true,
            selectable: false,
            children: [
                {
                    text: '工单配置',
                    iconCls: 'x-fa fa-list-ul',
                    viewType: 'zc-bd',
                    leaf: true
                }, {
                    text: '工单分类',
                    iconCls: 'x-fa fa-th-large',
                    viewType: 'gdfl',
                    leaf: true
                }]
        }, {
            text: '流程管理',
            iconCls: 'x-fa  fa-sitemap',
            viewType: 'pageblank',
            expanded: true,
            selectable: false,
            children: [
                {
                    text: '流程配置',
                    iconCls: 'x-fa fa-wrench',
                    viewType: 'lcpz',
                    leaf: true
                }, {
                    text: '工作流设计',
                    iconCls: 'x-fa fa-exchange',
                    viewType: 'gzlsj',
                    leaf: true
                }]
        }, {
            text: '系统管理',
            iconCls: 'x-fa  fa-cog',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [
                {
                    text: '人员管理',
                    iconCls: 'x-fa fa-users',
                    viewType: 'user',
                    leaf: true
                }, {
                    text: '部门管理',
                    iconCls: 'x-fa fa-sitemap',
                    viewType: 'principal',
                    leaf: true
                }, {
                    text: '角色管理',
                    iconCls: 'x-fa fa-user',
                    viewType: 'roles',
                    leaf: true
                }]
        }]
    }
});
