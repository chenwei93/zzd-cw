Ext.define('Cmdb.view.monitor.utils.ChartDypds', {
    extend: 'Ext.Panel',
    xtype: 'chart-dypds',
    controller: 'chart-utils',

    // width: 650,


    requires: [
        'Cmdb.view.monitor.utils.UtilsController'
    ],
    layout: 'fit',
    items: [{
        xtype: 'cartesian',
        reference: 'chart',

        width: '100%',
        height:500,

        store: {
            fields: ['month', 'data1', 'data2', 'data3'],
            data: [
                {month: '2008-1-04', data1: 5, data2: 6, data3: 7},
                {month: '2008-2-04', data1: 4, data2: 7, data3: 8},
                {month: '2008-3-04', data1: 5, data2: 6, data3: 9},
                {month: '2008-4-04', data1: 4, data2: 5, data3: 6},
                {month: '2008-5-04', data1: 5, data2: 4, data3: 8},
                {month: '2008-6-04', data1: 4, data2: 6, data3: 7},
                {month: '2008-7-04', data1: 5, data2: 6, data3: 9}
            ]
        },
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        insetPadding: {
            top: 40,
            left: 40,
            right: 40,
            bottom: 40
        },
        sprites: {
            type: 'text',
            text: '数据开放监控',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 50, // the sprite x position
            y: 20  // the sprite y position
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            adjustByMajorUnit: true,
            grid: true,
            fields: ['data1', 'data2', 'data3'],
            renderer: 'onAxisLabelRender',
            minimum: 0,
            maximum: 10,
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['month'],
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'line',
            title:'汇集',
            xField: 'month',
            yField: 'data1',
            marker: {
                type: 'square',
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }, {
            type: 'line',
            title:'开放',
            xField: 'month',
            yField: 'data2',
            marker: {
                type: 'triangle',
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }, {
            type: 'line',
            title:'共享',
            xField: 'month',
            yField: 'data3',
            marker: {
                type: 'arrow',
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
});
