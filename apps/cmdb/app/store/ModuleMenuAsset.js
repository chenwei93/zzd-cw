Ext.define('Cmdb.store.ModuleMenuAsset', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-asset',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '资产管理和服务中心',
        expanded: true,
        children: [{
            text: '资产服务',
            iconCls: 'x-fa fa-money',
            viewType: 'zcfw',
            leaf: true
        }, {
            text: '资产登记',
            iconCls: 'x-fa  fa-pencil',
            viewType: 'zcdj',
            leaf: true
        }, {
            text: '资产目录配置管理',
            iconCls: 'x-fa fa-leanpub',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '目录模版管理',
                iconCls: 'x-fa fa-sitemap',
                viewType: 'zc-mlx',
                leaf: true
            }, {
                text: '标准数据元管理',
                iconCls: 'x-fa fa-rss-square',
                viewType: 'zc-sjy',
                leaf: true
            }, {
                text: '字典数据元维护',
                iconCls: 'x-fa fa-cubes',
                viewType: 'zc-sjyzd',
                leaf: true
            }, {
                text: '分类数据元维护',
                iconCls: 'x-fa fa-university',
                viewType: 'zc-sjyfl',
                leaf: true
                // }, {
                //     text: '表单管理',
                //     iconCls: 'x-fa fa-list-ul',
                //     viewType: 'zc-bd',
                //     leaf: true
            }]
        }, {
            text: '资产库管理',
            iconCls: 'x-fa fa-database',
            viewType: 'pageblank',
            expanded: true,
            selectable: false,
            children: [{
                text: '全量资产清单',
                iconCls: 'x-fa fa-list-alt',
                viewType: 'qlzcqd',
                leaf: true
            }, {
                text: '部门资产清单',
                iconCls: 'x-fa fa-list',
                viewType: 'bmzcqd',
                leaf: true
            }, {
                text: '资产库维护',
                iconCls: 'x-fa fa-cogs',
                viewType: 'zcwh',
                leaf: true
            }, {
                text: '校核管理',
                iconCls: 'x-fa fa-check-circle',
                viewType: 'jhgl',
                leaf: true
            }]

        }]
    }
});
