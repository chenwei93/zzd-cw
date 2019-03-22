Ext.define('DRDMS.store.MenuTreeCenter', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menuTreeStore-center',

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
            text: '待处理资源',
            iconCls: 'x-fa  fa-volume-down',
            viewType: 'entry-pendingcenter',
            leaf: true
        }, {
            text: '已发布资源',
            iconCls: 'x-fa  fa-navicon',
            viewType: 'entry-publishedcenter',
            leaf: true
        }, {
            text: '变更资源',
            iconCls: 'x-fa fa-list-alt',
            viewType: 'entry-changelogcenter',
            leaf: true
        }, {
            text: '目录管理',
            iconCls: 'x-fa fa-table',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '手工编目',
                iconCls: 'x-fa fa-pencil-square-o',
                viewType: 'entry-edit',
                leaf: true
            }, {
                text: '资源目录',
                iconCls: 'x-fa fa-file',
                viewType: 'entrydata',
                leaf: true
            }, {
                text: '资源清单',
                iconCls: 'x-fa fa-align-justify',
                viewType: 'entrydata-list',
                leaf: true
            }, {
                text: '目录查询',
                iconCls: 'x-fa fa-search',
                viewType: 'entry-search',
                leaf: true
            }, {
                text: '资源检索',
                iconCls: 'x-fa fa-rss',
                viewType: 'resource',
                leaf: true
            }, {
                text: '目录维护',
                iconCls: 'x-fa fa-wrench',
                viewType: 'entrywh-tab',
                leaf: true
            }, {
                text: '目录分类',
                iconCls: 'x-fa fa-list-ul',
                viewType: 'entry-fl',
                leaf: true

            }]
        }, {
            text: '目录模版管理',
            iconCls: 'x-fa  fa-book',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '资源形态管理',
                iconCls: 'x-fa fa-rss',
                viewType: 'resourceformat',
                leaf: true

            }, {
                text: '目录模板配置',
                iconCls: 'x-fa fa-book',
                viewType: 'entryset',
                leaf: true
            }, {
                text: '目录元数据管理',
                iconCls: 'x-fa fa-rss-square',
                viewType: 'entrymetadata',
                leaf: true

            }]
        }, {
            text: '基础数据管理',
            iconCls: 'x-fa fa-leanpub',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '国标主题分类',
                iconCls: 'x-fa  fa-university',
                viewType: 'catalogzt',
                leaf: true
            }, {
                text: '实施应用分类',
                iconCls: 'x-fa fa-delicious',
                viewType: 'catalogss',
                leaf: true

            }, {
                text: '行业分类',
                iconCls: 'x-fa fa-wrench',
                viewType: 'cataloghy',
                leaf: true
            }, {
                text: '数据字典',
                iconCls: 'x-fa fa-cubes',
                viewType: 'dictionary',
                leaf: true
            }, {
                text: ' 自定义标签',
                iconCls: 'x-fa fa-tags',
                viewType: 'keyword',
                leaf: true
            }]

        }, {
            text: '系统管理',
            iconCls: 'x-fa fa-gear',
            expanded: false,
            selectable: false,
            children: [{
                text: '账户管理',
                iconCls: 'x-fa fa-user',
                viewType: 'user',
                leaf: true
            }, {
                text: '地区管理',
                iconCls: 'x-fa fa-map-marker',
                viewType: 'region',
                leaf: true
            }, {
                text: '部门管理',
                iconCls: 'x-fa fa-sitemap',
                viewType: 'principal',
                leaf: true
            }, {
                text: '节点管理',
                iconCls: 'x-fa fa-file-text',
                viewType: 'realmnode',
                leaf: true
                // }, {
                //     text: '工单流程',
                //     iconCls: 'x-fa fa-forward',
                //     // viewType:'',
                //     leaf: true
                // }, {
                //     text: '菜单权限管理',
                //     iconCls: 'x-fa fa-list-ul',
                //     // viewType:'',
                //     leaf: true
                // }, {
                //     text: '系统监控',
                //     iconCls: 'x-fa fa-list-ul',
                //     // viewType:'',
                //     leaf: true
            }]
        }]
    }
});
