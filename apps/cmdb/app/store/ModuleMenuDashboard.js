Ext.define('Cmdb.store.ModuleMenuDashboard', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-dashboard',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '可视化展厅',
        expanded: true,
        children: [{
            text: '展示大厅',
            iconCls: 'x-fa fa-desktop',
            viewType: 'zsdt',
            leaf: true
        }, {
            text: '数据',
            iconCls: 'x-fa fa-database',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '数据汇集柱状图',
                iconCls: 'x-fa fa-bar-chart',
                viewType: 'chartsjhj',
                leaf: true
            }, {
                text: '数据共享实时曲线图',
                iconCls: 'x-fa fa-line-chart',
                viewType: 'chartsjgx',
                leaf: true
            }
            ]
        }, {
            text: '工作',
            iconCls: 'x-fa  fa-th-large',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '业务办理柱状图',
                iconCls: 'x-fa fa-bar-chart',
                viewType: 'chartywbl',
                leaf: true
            }, {
                text: '工单处理状态饼图',
                iconCls: 'x-fa fa-pie-chart',
                viewType: 'chartgdcl',
                leaf: true
            }, {
                text: '人员考勤统计表柱状图',
                iconCls: 'x-fa fa-bar-chart',
                viewType: 'chartrykq',
                leaf: true
            }]
        },
            {
                text: '资产',
                iconCls: 'x-fa  fa-money',
                viewType: 'pageblank',
                expanded: false,
                selectable: false,
                children: [{
                    text: '云资源异常分类饼图',
                    iconCls: 'x-fa fa-pie-chart',
                    viewType: 'yzyyc',
                    leaf: true
                }, {
                    text: '资源总量增长趋势图',
                    iconCls: 'x-fa fa-area-chart',
                    viewType: 'zyzlzc',
                    leaf: true
                }]
            }
        ]
    }
});
