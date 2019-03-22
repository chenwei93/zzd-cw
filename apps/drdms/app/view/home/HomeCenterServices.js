Ext.define('DRDMS.view.home.HomeCenterServices', {
    extend: 'Ext.Panel',
    xtype: 'services',

    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.series.sprite.PieSlice',
        'Ext.chart.interactions.Rotate'
    ],

    cls: 'service-type shadow',
    height: 280,
    width:'47%',
    bodyPadding: 15,
    title: '目录分类',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            width: 180,
            defaults: {
                height: 120,
                insetPadding: '7.5 7.5 7.5 7.5',
                background: 'rgba(255, 255, 255, 1)',
                colors: [
                    '#6aa5dc',
                    '#fdbf00',
                    '#ee929d'
                ],
                store: {
                    data: [
                        {
                            "xvalue": "Research",
                            "yvalue": 68
                        },
                        {
                            "xvalue": "Finance",
                            "yvalue": 20
                        },
                        {
                            "xvalue": "Marketing",
                            "yvalue": 12
                        }
                    ]
                },
                series: [
                    {
                        type: 'pie',
                        label: {
                            field: 'xField',
                            display: 'rotate',
                            contrast: true,
                            font: '12px Arial'
                        },
                        useDarkerStrokeColor: false,
                        xField: 'yvalue',
                        donut: 50,
                        padding: 0
                    }
                ],
                interactions: [
                    {
                        type: 'rotate'
                    }
                ]
            },
            items: [
                {
                    xtype: 'polar'
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'component',
                    data: {
                        name: '民政稽核应用',
                        value: '20%'
                    },
                    tpl: '<div class="left-aligned-div">{name}</div><div class="right-aligned-div">{value}</div>'
                },
                {
                    xtype: 'progressbar',
                    cls: 'bottom-indent service-finance',
                    height: 4,
                    minHeight: 4,
                    value: 0.2
                },
                {
                    xtype: 'component',
                    data: {
                        name: '资产管理应用',
                        value: '68%'
                    },
                    tpl: '<div class="left-aligned-div">{name}</div><div class="right-aligned-div">{value}</div>'
                },
                {
                    xtype: 'progressbar',
                    cls: 'bottom-indent service-research',
                    height: 4,
                    minHeight: 4,
                    value: 0.68
                },
                {
                    xtype: 'component',
                    data: {
                        name: '通用目录查询应用',
                        value: '12%'
                    },
                    tpl: '<div class="left-aligned-div">{name}</div><div class="right-aligned-div">{value}</div>'
                },
                {
                    xtype: 'progressbar',
                    cls: 'bottom-indent service-marketing',
                    height: 4,
                    value: 0.12
                }
            ]
        }
    ]
});
