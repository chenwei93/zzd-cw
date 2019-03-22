Ext.define('AP.view.home.HDDUsage', {
    extend: 'Ext.panel.Panel',
    xtype: 'hddusage',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Area',
        'Ext.chart.interactions.PanZoom'

    ],

    title: '磁盘IPS',
    ui: 'light',
    iconCls: 'x-fa fa-database',
    headerPosition: 'bottom',
    cls: 'quick-graph-panel shadow',
    height: 130,
    width: '18%',
    layout: 'fit',
    items: [
        {
            xtype: 'cartesian',
            animation: !Ext.isIE9m && Ext.os.is.Desktop,
            constrain: true,
            constrainHeader: true,
            background: '#70bf73',
            colors: [
                '#a9d9ab'
            ],
            store: {
                data: [{
                        "xvalue": 0,
                        "yvalue": 100
                    },
                    {
                        "xvalue": 10,
                        "yvalue": 141
                    },
                    {
                        "xvalue": 20,
                        "yvalue": 120
                    },
                    {
                        "xvalue": 30,
                        "yvalue": 156
                    },
                    {
                        "xvalue": 40,
                        "yvalue": 130
                    },
                    {
                        "xvalue": 50,
                        "yvalue": 160
                    },
                    {
                        "xvalue": 60,
                        "yvalue": 120
                    },
                    {
                        "xvalue": 70,
                        "yvalue": 135
                    }
                ]
            },
            axes: [{
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
                    type: 'area',
                    style: {
                        stroke: '#FFFFFF',
                        'stroke-width': '2px'
                    },
                    useDarkerStrokeColor: false,
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
