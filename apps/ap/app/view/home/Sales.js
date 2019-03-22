Ext.define('AP.view.home.Sales', {
    extend: 'Ext.panel.Panel',
    xtype: 'sales',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar'
    ],

    title: 'CPU负载',
    ui: 'light',
    iconCls: 'x-fa fa-briefcase',
    headerPosition: 'bottom',

    cls: 'quick-graph-panel shadow',
    height: 130,
    width:'18%',
    layout: 'fit',
    items: [
        {
            xtype: 'cartesian',
            animation: !Ext.isIE9m && Ext.os.is.Desktop,
            height: 75,
            background: '#8561c5',
            colors: [
                '#ffffff'
            ],
            store: {
                data: [
                    {
                        "xvalue": 0,
                        "yvalue": 600
                    },
                    {
                        "xvalue": 10,
                        "yvalue": 748
                    },
                    {
                        "xvalue": 20,
                        "yvalue": 569
                    },
                    {
                        "xvalue": 30,
                        "yvalue": 850
                    },
                    {
                        "xvalue": 40,
                        "yvalue": 500
                    },
                    {
                        "xvalue": 50,
                        "yvalue": 753
                    },
                    {
                        "xvalue": 60,
                        "yvalue": 707
                    },
                    {
                        "xvalue": 70,
                        "yvalue": 640
                    }
                ]
            },
            axes: [
                {
                    type: 'category',
                    fields: [
                        'xvalue'
                    ],
                    hidden: true,
                    position: 'bottom'
                },
                {
                    type: 'numeric',
                    fields: [
                        'yvalue'
                    ],
                    grid: {
                        odd: {
                            fill: '#e8e8e8'
                        }
                    },
                    hidden: true,
                    position: 'left'
                }
            ],
            series: [
                {
                    type: 'bar',
                    xField: 'xvalue',
                    yField: [
                        'yvalue'
                    ]
                }
            ],
            interactions: [
                {
                    type: 'panzoom'
                }
            ]
        }
    ]
});
