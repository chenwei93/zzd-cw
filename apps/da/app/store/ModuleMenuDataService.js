Ext.define('DA.store.ModuleMenuDataService', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-dataservice',
    fields: [{
        name: 'text'
    }],
    root: {
        iconCls: 'x-fa fa-desktop',
        expanded: true,
        children: [{
            text: '综合工作台',
            iconCls: 'x-fa  fa-list',
            viewType: 'zhgzt-s',
            leaf: true
        }, {
            text: '数据资源目录上架',
            iconCls: 'x-fa  fa-list',
            viewType: 'entrydata',
            leaf: true
        }, {
            text: '数据资源目录下架',
            iconCls: 'x-fa  fa-list',
            viewType: 'entry-pendingcenter',
            leaf: true
        }, {
            text: '数据资源目录审核',
            iconCls: 'x-fa  fa-list',
            viewType: 'mlsh',
            leaf: true
            // }, {
            //     text: '目录发布',
            //     iconCls: 'x-fa  fa-list',
            //     viewType: 'entry-pendingcenter',
            //     leaf: true
        }, {
            text: '数据资源目录查询',
            iconCls: 'x-fa  fa-list',
            viewType: 'entry-search',
            leaf: true
        }, {
            text: '数据资源目录内容更新',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '手工更新',
                iconCls: 'x-fa  fa-list',
                viewType: 'entry-edit',
                leaf: true
            }, {
                text: '自动更新',
                iconCls: 'x-fa  fa-list',
                viewType: 'entry-changelog',
                leaf: true
            }]
        }, {
            text: '数据资源目录迁移',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }, {
            text: '与省级数据资源目录对接管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '省级数据资源目录导入',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '向省级平台保送数据资源目录',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true

            }]
        }, {
            text: '目录配置规则管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '数据资源目录模版',
                iconCls: 'x-fa  fa-list',
                viewType: 'entryset',
                leaf: true
            }, {
                text: '数据资源目录显示模版',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true

            }, {
                text: '数据资源目录版本管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '数据资源目录标识符管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '基础编码管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '数据目录清理规则',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true

            }]
        }]

    }
});
