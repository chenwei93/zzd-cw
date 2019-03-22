Ext.define('Cmdb.view.monitor.utils.ChartNcsyl', {
    extend: 'Ext.Panel',
    xtype: 'chart-ncsyl',
    controller: 'chart-utils',

    // width: 650,


    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 400,
        insetPadding: 40,
        store: {
            fields:['month','data1'],
            data:[
                { month: 'Jan', data1: 200},
                { month: 'Feb', data1: 200},
                { month: 'Mar', data1: 190},
                { month: 'Apr', data1: 180},
                { month: 'May', data1: 180},
                { month: 'Jun', data1: 170},
                { month: 'Jul', data1: 160},
                { month: 'Aug', data1: 160},
                { month: 'Sep', data1: 160},
                { month: 'Oct', data1: 160},
                { month: 'Nov', data1: 150},
                { month: 'Dec', data1: 150}
            ]
        },

        sprites: [{
            type: 'text',
            text: 'Redis内存使用量',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        axes: [{
            type: 'numeric',
            fields: 'data1',
            position: 'left',
            grid: true,
            minimum: 0,
            maximum:750,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            fields: 'month',
            position: 'bottom',
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'area',
            title:['data1'],
            xField: 'month',
            yField: [ 'data1' ],
            style: {
                opacity: 0.80
            },
            marker: {
                opacity: 0,
                scaling: 0.01,
                fx: {
                    duration: 200,
                    easing: 'easeOut'
                }
            },
            highlightCfg: {
                opacity: 1,
                scaling: 1.5
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender2'
            }
        }]
    }]

});