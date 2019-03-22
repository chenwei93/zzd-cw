Ext.define('DRDMS.view.home.HomeCenterTopMovie', {
    extend: 'Ext.panel.Panel',
    xtype: 'topmovies',

    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.series.sprite.PieSlice',
        'Ext.chart.interactions.Rotate'
    ],

    title: '应用调用',
    ui: 'light',
    iconCls: 'x-fa fa-video-camera',
    headerPosition: 'bottom',

    cls: 'quick-graph-panel shadow',
    height: 130,
    width:'22%',
    layout: 'fit',

    items: [
        {
            xtype: 'polar',
            animation: !Ext.isIE9m && Ext.os.is.Desktop,
            height: 75,
            background: '#33abaa',
            colors: [
                '#115fa6',
                '#94ae0a',
                '#a61120',
                '#ff8809',
                '#ffd13e',
                '#a61187',
                '#24ad9a',
                '#7c7474',
                '#a66111'
            ],
            radius: 100,
            store: {
                data: [
                    {
                        "xvalue": "Foo",
                        "yvalue": 943
                    },
                    {
                        "xvalue": "Bar",
                        "yvalue": 622
                    },
                    {
                        "xvalue": "Baz",
                        "yvalue": 1044
                    }
                ]
            },
            series: [
                {
                    type: 'pie',
                    colors: [
                        '#ffffff'
                    ],
                    label: {
                        field: 'x',
                        display: 'rotate',
                        contrast: true,
                        font: '12px Arial'
                    },
                    xField: 'yvalue'
                }
            ],
            interactions: [
                {
                    type: 'rotate'
                }
            ]
        }
    ]
});
