Ext.define('RBase.view.home.Network', {
    extend: 'Ext.panel.Panel',
    xtype: 'network',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.ProgressBar'
    ],

    cls: 'dashboard-main-chart shadow',
    height: 380,
    width:'97%',
    bodyPadding: 15,

    title: '系统性能',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    viewModel: {
        type: 'dashboard'
    },
    tools: [
        {
            type: 'refresh',
            toggleValue: false,
            listeners: {
                click: 'onRefreshToggle'
            }
        },
        {
            type: 'wrench'
        }
    ],

    items: [
        {
            xtype: 'container',
            flex: 1,
            layout: 'fit',
            items: [
                {
                    xtype: 'chartnetwork'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'graph-analysis-left',
            height: 138,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    cls: 'dashboard-graph-analysis-left',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            padding: '10 0 10 0',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'top-info-container',
                                    html: '<div class="inner"><span class="x-fa fa-pie-chart"></span><span class="dashboard-analytics-percentage"> 25% </span>服务器负载</div>',
                                    padding: '15 10 10 0'
                                },
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'top-info-container',
                                    html: '<div class="inner"><span class="x-fa fa-user"></span><span class="dashboard-analytics-percentage"> 156 </span>在线用户</div>',
                                    padding: '15 10 10 0'
                                }
                            ]
                        },
                        {
                            xtype: 'progressbar',
                            flex: 1,
                            cls: 'left-top-text progressbar-no-text',
                            height: 3,
                            hideMode: 'offsets',
                            margin: '0 15 0 0',
                            maxHeight: 5,
                            minHeight: 3,
                            value: 0.4
                        },
                        {
                            xtype: 'component',
                            flex: 1,
                            cls: 'left-top-text',
                            html: '系统性能抽样频率目前为30秒一次。调整频率请使用系统性能抽样配置',
                            padding: '15 5 5 0',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    cls: 'graph-analysis-right',
                    margin:'15 0 0 0',
                    padding:'0 0 0 15',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    itemPadding:'0 0 10 0',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            padding:'0 0 10 0',
                            items: [
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container',
                                    html: '访问用户'
                                },
                                {
                                    xtype: 'chartvisitors',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container right-value',
                                    store:{
                                        data: [
                                            {
                                                "xvalue": 0,
                                                "y1value": 10,
                                                "y2value": 10
                                            },
                                            {
                                                "xvalue": 5,
                                                "y1value": 15,
                                                "y2value": 15
                                            },
                                            {
                                                "xvalue": 10,
                                                "y1value": 20,
                                                "y2value": 20
                                            },
                                            {
                                                "xvalue": 15,
                                                "y1value": 15,
                                                "y2value": 15
                                            },
                                            {
                                                "xvalue": 20,
                                                "y1value": 20,
                                                "y2value": 20
                                            },
                                            {
                                                "xvalue": 25,
                                                "y1value": 15,
                                                "y2value": 15
                                            },
                                            {
                                                "xvalue": 30,
                                                "y1value": 20,
                                                "y2value": 20
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            padding:'0 0 10 0',
                            items: [
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container',
                                    html: '并发率'
                                },
                                {
                                    xtype: 'chartbounces',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container right-value',
                                    store:{
                                        data: [
                                            {
                                                "xvalue": 0,
                                                "y1value": 15,
                                                "y2value": 15
                                            },
                                            {
                                                "xvalue": 5,
                                                "y1value": 20,
                                                "y2value": 20
                                            },
                                            {
                                                "xvalue": 10,
                                                "y1value": 15,
                                                "y2value": 15
                                            },
                                            {
                                                "xvalue": 15,
                                                "y1value": 16,
                                                "y2value": 16
                                            },
                                            {
                                                "xvalue": 20,
                                                "y1value": 14,
                                                "y2value": 14
                                            },
                                            {
                                                "xvalue": 25,
                                                "y1value": 18,
                                                "y2value": 18
                                            },
                                            {
                                                "xvalue": 30,
                                                "y1value": 10,
                                                "y2value": 10
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            padding:'0 0 10 0',
                            items: [
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container',
                                    html: '总连接数'
                                },
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container right-value',
                                    html: '189,000'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            padding:'0 0 10 0',
                            items: [
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container',
                                    html: '错误数'
                                },
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    cls: 'graph-analysis-right-inner-container right-value',
                                    html: '4'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
