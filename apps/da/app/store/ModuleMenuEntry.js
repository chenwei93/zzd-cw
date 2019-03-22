Ext.define('DA.store.ModuleMenuEntry', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-entry',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        expanded: true,
        children: [{
            text: '综合工作台',
            iconCls: 'x-fa  fa-list',
            viewType: 'zhgzt-e',
            leaf: true
        }, {
            text: '服务自助开发',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '数据集设计器',
                iconCls: 'x-fa  fa-list',
                viewType: 'entrywh-tab',
                leaf: true
            }, {
                text: '服务设计',
                iconCls: 'x-fa  fa-list',
                viewType: 'services',
                leaf: true
            }, {
                text: '服务测试',
                iconCls: 'x-fa  fa-list',
                viewType: 'itest',
                leaf: true
            }, {
                text: '服务部署',
                iconCls: 'x-fa  fa-list',
                viewType: 'iwh',
                leaf: true
            }]
        }, {
            text: '服务申请',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '使用审核',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '需求审核',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]

        }, {
            text: '资产分析',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '数据血缘',
                iconCls: 'x-fa  fa-list',
                viewType: 'bloodconf',
                leaf: true
            }, {
                text: '资产地图',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '资产图谱',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '统计分析',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '共享情况分析',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'chartywbl',
                    leaf: true
                }, {
                    text: '开放情况分析',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'chartywblx',
                    leaf: true
                }, {
                    text: '工单处理统计',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'chartrykq',
                    leaf: true
                }]
            }]
        }]
    }
});
