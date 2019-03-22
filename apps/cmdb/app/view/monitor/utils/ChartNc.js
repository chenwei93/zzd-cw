Ext.define('Cmdb.view.monitor.utils.ChartNc', {
    extend: 'Ext.Panel',
    xtype: 'chart-nc',
    controller: 'chart-utils',

    // width: 650,


    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 400,
        insetPadding: 40,
        store: {
            fields:['month','data1','data2'],
            data:[
                { month: '12:00', data1: 0, data2: 0},
                { month: '14:00', data1: 0, data2: 0},
                { month: '16:00', data1: 0, data2: 0},
                { month: '18:00', data1: 360, data2: 180},
                { month: '20:00', data1: 180, data2: 350}
            ]
        },

        sprites: [{
            type: 'text',
            text: '内存',
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
            title:['data1','data2'],
            xField: 'month',
            yField: [ 'data1', 'data2' ],
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
                renderer: 'onSeriesTooltipRender3'
            }
        }]
    }]

});