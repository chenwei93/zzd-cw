Ext.define('Cmdb.view.monitor.utils.ChartBjjljs', {
    extend: 'Ext.Panel',
    xtype: 'chart-bjjljs',
    controller: 'chart-utils',

    // width: 650,

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 400,
        store: {
            fields:['theta','sin'],
            data:[
                { theta: '13:20', sin: 0.50},
                { theta: '13:40', sin: 0.50},
                { theta: '14:00', sin: 0.50},
                { theta: '14:20', sin: 0.50},
                { theta: '14:40', sin: 0.50},
                { theta: '15:00', sin: 0.50},
                { theta: '15:20', sin: 0.50},
                { theta: '15:40', sin: 0.50},
                { theta: '16:00', sin: 0.50},
                { theta: '16:20', sin: 0.50}
                ]
        },
        insetPadding: {
            top: 40,
            left: 20,
            right: 40,
            bottom: 20
        },
        sprites: [{
            type: 'text',
            text: 'Redis被拒绝连接数',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            fields: ['sin'],
            label: {
                renderer: 'onAxisLabelRender1'
            }
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['theta'],
            label: {
                textPadding: 0,
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'line',
            xField: 'theta',
            yField: 'sin',
            smooth: true,
            highlight: true,
            showMarkers: false
        }]
    }
});