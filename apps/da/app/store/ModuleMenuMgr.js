Ext.define('DA.store.ModuleMenuMgr', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-mgr',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        expanded: true,
        children: [{
            text: '综合工作台',
            iconCls: 'x-fa  fa-list',
            viewType: 'zhgzt-m',
            leaf: true
        }, {
            text: '用户管理',
            iconCls: 'x-fa  fa-list',
            viewType: 'user',
            leaf: true
        }, {
            text: '角色管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '新增角色',
                iconCls: 'x-fa  fa-list',
                viewType: 'user-roles',
                leaf: true
            }, {
                text: '新增角色成员',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '角色注销',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '删除角色成员',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]
        },{
            text: '权限管理',
            iconCls: 'x-fa  fa-list',
            children: [
                {
                        text: '角色赋权',
                        expanded: true,
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                    }, {
                        text: '权限继承',
                        expanded: true,
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                    }, {
                        text: '权限授权',
                        expanded: true,
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                    }, {
                        text: '权限回收',
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                }]
        }, {
            text: '数据资源节点管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '资源主机管理',
                iconCls: 'x-fa  fa-list',
                children: [{
                    text: '资源主机配置',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'resourcenode',
                    leaf: true
                }, {
                    text: '资源主机池查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '资源池管理',
                iconCls: 'x-fa  fa-list',
                children: [{
                    text: '资源池配置',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'resourcepool',
                    leaf: true
                }, {
                    text: '资源池查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '资源节点实时监控',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '资源节点实时监测',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true

            }]

        }, {
            text: '平台日志管理',
            iconCls: 'x-fa  fa-list',
            viewType: 'rzgl',
            leaf: true
        }, {
            text: '平台运行参数管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '菜单管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '数据字典',
                iconCls: 'x-fa  fa-list',
                viewType: 'dictionary',
                leaf: true
            }]
        }, {
            text: '在线帮助',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }]
    }
});
