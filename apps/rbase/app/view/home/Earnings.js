Ext.define('RBase.view.home.Earnings', {
    extend: 'Ext.Panel',
    xtype: 'earnings',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],

    title: '内存占用',
    ui: 'light',
    iconCls: 'x-fa fa-dollar',
    headerPosition: 'bottom',

    cls: 'quick-graph-panel shadow',
    height: 130,
    width: '18%',
    layout: 'fit',
    items: [
        {
            xtype: 'cartesian',
            animation: !Ext.isIE9m && Ext.os.is.Desktop,
            background: '#35baf6',
            colors: [
                '#483D8B',
                '#94ae0a',
                '#a61120',
                '#ff8809',
                '#ffd13e',
                '#a61187',
                '#24ad9a',
                '#7c7474',
                '#a66111'
            ],
            store: {
                data: [
                    {
                        "xvalue": 0,
                        "yvalue": 250
                    },
                    {
                        "xvalue": 10,
                        "yvalue": 300
                    },
                    {
                        "xvalue": 20,
                        "yvalue": 270
                    },
                    {
                        "xvalue": 30,
                        "yvalue": 370
                    },
                    {
                        "xvalue": 40,
                        "yvalue": 400
                    },
                    {
                        "xvalue": 50,
                        "yvalue": 350
                    },
                    {
                        "xvalue": 60,
                        "yvalue": 410
                    },
                    {
                        "xvalue": 70,
                        "yvalue": 450
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
                    type: 'line',
                    style: {
                        stroke: '#FFFFFF',
                        'stroke-width': '2px'
                    },
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
    ],
    tools: [
        {
            xtype: 'tool',
            cls: 'quick-graph-panel-tool x-fa fa-ellipsis-v'
        }
    ]
});
