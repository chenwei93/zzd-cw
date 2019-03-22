Ext.define('Starter.store.MenuTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menuTreeStore',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: '首页',
                iconCls: 'x-fa fa-home',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'app-home',
                leaf: true
            }, {
                text: '数据填报',
                iconCls: 'x-fa fa-pencil',
                expanded: true,
                selectable: false,
                children: [
                    {
                        text: '调研表导入',
                        iconCls: 'x-fa fa-sort-amount-asc',
                        viewType: 'report',
                        leaf: true
                    }, {
                        text: '业务系统调研表',
                        iconCls: 'x-fa fa-upload',
                        viewType: 'biz',
                        leaf: true
                    },
                    {
                        text: '信息资源调研表',
                        iconCls: 'x-fa fa-upload',
                        viewType: 'entrydata-edit',
                        leaf: true

                    },
                    {
                        text: '新闻录入',
                        iconCls: 'x-fa fa-commenting-o',
                        viewType: 'news-list',
                        leaf: true


                    }
                ]
            }, {
                text: '目录管理',
                iconCls: 'x-fa  fa-ioxhost',
                expanded: false,
                selectable: false,
                children: [{
                    text: '目录清单',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'entrydata',
                    leaf: true
                }, {
                    text: '目录导出',
                    iconCls: 'x-fa  fa-level-down',
                    viewType: 'task',
                    leaf: true
                }, {
                    text: '目录维护',
                    iconCls: 'x-fa  fa-cogs',
                    viewType: 'entrydata-projection',
                    leaf: true
                }, {
                    text: '目录分类',
                    iconCls: 'x-fa  fa-cogs',
                    viewType: 'entryfl',
                    leaf: true
                }]
            }, {
                text: '统计分析',
                iconCls: 'x-fa  fa-building-o',
                expanded: false,
                selectable: false,
                children: [{
                    text: '各部门资源总量图',
                    iconCls: 'x-fa fa-bar-chart',
                    viewType: 'analysis-column',
                    leaf: true
                }, {
                    text: '上报趋势图',
                    iconCls: 'x-fa fa-line-chart',
                    viewType: 'analysis-line',
                    leaf: true
                }, {
                    text: '资源占比图',
                    iconCls: 'x-fa fa-pie-chart ',
                    viewType: 'analysis-pie',
                    leaf: true
                }]
            }, {
                text: '基础数据管理',
                iconCls: 'x-fa fa-desktop',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: '分类管理',
                        iconCls: 'x-fa  fa-map-o',
                        viewType: 'catalog',
                        leaf: true
                    },
                    {
                        text: '数据字典管理',
                        iconCls: 'x-fa fa-book',
                        viewType: 'dictionary',
                        leaf: true
                    },
                    {
                        text: '导出配置',
                        iconCls: 'x-fa fa-share-square-o',
                        viewType: 'unitprofile',
                        leaf: true
                    }
                ]
            }, {
                text: '系统管理',
                iconCls: 'x-fa fa-gear',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: '部门管理',
                        iconCls: 'x-fa fa-sitemap',
                        viewType: 'principal',
                        leaf: true
                    }, {
                        text: '地区管理',
                        iconCls: 'x-fa  fa-map-marker',
                        viewType: 'region',
                        leaf: true
                    },
                    {
                        text: '人员账户管理',
                        iconCls: 'x-fa fa-user',
                        viewType: 'user',
                        leaf: true
                    },
                    {
                        text: '个人密码重置',
                        iconCls: 'x-fa fa-life-saver',
                        leaf: true
                    }
                ]
            }
        ]
    }
});
