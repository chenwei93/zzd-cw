Ext.define('DG.store.MenuTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menuTreeStore',
    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: '数据血缘',
            iconCls: 'x-fa fa-exchange',
            expanded: true,
            children: [{
                text: '血缘配置',
                iconCls: 'x-fa fa-cog',
                viewType: 'bloodconf',
                leaf: true
            }, {
                text: '血缘展示',
                iconCls: 'x-fa fa-table',
                viewType: 'bloodshow',
                leaf: true
            }]
        }, {
            text: '数据质量',
            expanded: true,
            iconCls: 'x-fa fa-check',
            children: [{
                text: '规则配置',
                iconCls: 'x-fa fa-pencil',
                viewType: 'roleconf-form',
                leaf: true
            }, {
                text: '规则管理',
                iconCls: 'x-fa fa-bars',
                viewType: 'roleconf',
                leaf: true
            }, {
                text: '质量报告',
                iconCls: 'x-fa fa-file-text-o',
                viewType: 'qreport',
                leaf: true
            }]
        }]
    }
});
