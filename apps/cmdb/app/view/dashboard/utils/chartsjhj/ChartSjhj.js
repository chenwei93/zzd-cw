Ext.define('cmdb.view.dashboard.utils.chartsjhj.ChartSjhj', {
    extend: 'Ext.Panel',
    xtype: '1chartsjhj',
    controller: 'utils',

    // width: 650,

    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'radiogroup',
                flex: 2,
                items: [
                    {boxLabel: '日', inputValue: 1, checked: true},
                    {boxLabel: '月', inputValue: 2},
                    {boxLabel: '年', inputValue: 3}
                ],
            }, {
                xtype: 'datefield',
                margin: '0 0 0 20',
                labelWidth: 50,
                fieldLabel: '区间',
            }, {
                xtype: 'displayfield',
                value: '到',
                margin: '0 10 0 10',
            }, {
                xtype: 'datefield'
            }, '->', {
                xtype: 'treepicker',
                fieldLabel: '部门',
                labelWidth: 50,
                displayField: 'text',
                store: Ext.create('Ext.data.TreeStore', {
                    autoLoad: true,
                    model: 'Region',
                    rootVisible: false,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/entry/department.json',
                        reader: {
                            rootProperty: 'children'
                        }
                    }
                }),
                listeners: {
                    render: function () {
                        this.getPicker().getStore().setRootVisible(false);
                        this.getPicker().expandAll();
                    }
                }
            }, {
                text: '统计',
                handler: function () {
                    console.log('统计');
                }
            }]
        }]
    },

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 10,


        store: {
            fields: [
                'month',
                'data1',
                'data2'
            ],
            data: [
                { month: '2018-01-02', data1: 18700, data2: 15600 },
                { month: '2018-01-03', data1: 26500, data2: 16600 },
                { month: '2018-01-04', data1: 28600, data2: 27300 },
                { month: '2018-01-05', data1: 30800, data2: 28100 },
                { month: '2018-01-06', data1: 23300, data2: 19900 },
                { month: '2018-01-07', data1: 26200, data2: 11900 },
                { month: '2018-01-09', data1: 37700, data2: 23300 },
                { month: '2018-01-10', data1: 37600, data2: 13200 },
                { month: '2018-01-12', data1: 46400, data2: 12100 },
                { month: '2018-01-13', data1: 33600, data2: 19900 },
                { month: '2018-01-14', data1: 27000, data2: 16800 },
                { month: '2018-01-15', data1: 44700, data2: 15800 }
            ]
        },
        // sprites: [
        //     {
        //         type: 'text',
        //         text: '数据汇集柱状图（按日期）',
        //         fontSize: 22,
        //         width: 100,
        //         height: 30,
        //         x: 40, // the sprite x position
        //         y: 20  // the sprite y position
        //     }],
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },
        axes: [
            {
                type: 'numeric',
                position: 'left',
                minimum: 0,
            },
            {
                type: 'category',
                position: 'bottom'
            }
        ],
        series: [
            {
                type: 'bar',
                xField: 'month',
                title: ['申请量', '受理量'],
                yField: ['data1', 'data2'],
                stacked: false,
                style: {
                    minGapWidth: 20
                }
            },
        ]

    }

});