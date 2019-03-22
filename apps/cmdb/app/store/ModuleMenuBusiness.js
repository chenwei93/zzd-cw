Ext.define('Cmdb.store.ModuleMenuBusiness', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-business',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '资产管理和服务中心',
        expanded: true,
        children: [{
            text: '全量资产目录管理',
            iconCls: 'x-fa fa-money',
            viewType: 'pageblank',
            expanded: true,
            selectable: false,
            children: [{
                text: '目录总览',
                iconCls: 'x-fa fa-sitemap',
                viewType: 'mlzl-list',
                leaf: true
            }, {
                text: '资产清单',
                iconCls: 'x-fa fa-rss-square',
                viewType: 'allzcml',
                leaf: true
            }, {
                text: '目录检索',
                iconCls: 'x-fa fa-cubes',
                viewType: '',
                leaf: true
            }]
        }, {
            text: '云资源资产管理',
            iconCls: 'x-fa  fa-pencil',
            expanded: true,
            viewType: 'pageblank',
            selectable: false,
            children: [{
                text: '云设备登记',
                iconCls: 'x-fa fa-sitemap',
                viewType: 'zcdj',
                leaf: true
            }, {
                text: '配额管理',
                iconCls: 'x-fa fa-rss-square',
                viewType: 'pemgr',
                leaf: true
            }, {
                text: '云资源申请',
                iconCls: 'x-fa fa-cubes',
                viewType: 'yzyasset-sq',
                leaf: true
            }, {
                text: '云资源变更',
                iconCls: 'x-fa fa-rss-square',
                viewType: '',
                leaf: true
            }, {
                text: '云资源回收',
                iconCls: 'x-fa fa-cubes',
                viewType: '',
                leaf: true
            }]
        }, {
            text: '软件服务资产管理',
            iconCls: 'x-fa fa-leanpub',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '软件服务申请',
                iconCls: 'x-fa fa-sitemap',
                viewType: '',
                leaf: true
            }, {
                text: '软件服务申请',
                iconCls: 'x-fa fa-rss-square',
                viewType: '',
                leaf: true
            }, {
                text: '软件服务回收',
                iconCls: 'x-fa fa-cubes',
                viewType: '',
                leaf: true
            }]
        }, {
            text: '日常数据管理',
            iconCls: 'x-fa fa-database',
            viewType: 'pageblank',
            expanded: true,
            selectable: false,
            children: [{
                text: '数据汇集管理',
                iconCls: 'x-fa fa-list-alt',
                viewType: 'sjasset',
                leaf: true
            }, {
                text: '数据共享管理',
                iconCls: 'x-fa fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '数据开放管理',
                iconCls: 'x-fa fa-cogs',
                viewType: '',
                leaf: true
            }, {
                text: '数据交换管理',
                iconCls: 'x-fa fa-check-circle',
                viewType: '',
                leaf: true
            }, {
                text: '数据反馈更新维护管理',
                iconCls: 'x-fa fa-cogs',
                viewType: '',
                leaf: true
            }, {
                text: '数据事权维护管理',
                iconCls: 'x-fa fa-check-circle',
                viewType: '',
                leaf: true
            }]
        }, {
            text: '事件及问题管理',
            iconCls: 'x-fa fa-check-circle',
            viewType: '',
            leaf: true
        }, {
            text: '电话受理服务管理',
            iconCls: 'x-fa fa-check-circle',
            viewType: '',
            leaf: true
        }, {
            text: '应急处置',
            iconCls: 'x-fa fa-check-circle',
            viewType: '',
            leaf: true
        }]
    }
});
