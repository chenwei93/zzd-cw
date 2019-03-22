Ext.define('Cmdb.view.monitor.utils.ChartSjqs', {
    extend: 'Ext.Panel',
    xtype: 'chart-sjqs',
    controller: 'chart-utils',

    // width: 650,
    height: 400,

    requires:[
        'Cmdb.view.monitor.utils.UtilsController'
    ],
    items: [{
        xtype: 'cartesian',
        reference: 'chart',

        width: '100%',
        height: 400,

        store: {
            fields: ['month', 'data1', 'data2', 'data3', 'data4'],
            data: [
                {month: '11:40', data1: 2, data2: 3, data3: 5, data4: 4},
                {month: '12:00', data1: 2, data2: 3, data3: 6, data4: 5},
                {month: '12:20', data1: 9, data2: 6, data3: 7, data4: 4},
                {month: '12:40', data1: 8, data2: 6, data3: 8, data4: 5},
                {month: '13:00', data1: 8, data2: 5, data3: 9, data4: 4},
                {month: '13:20', data1: 7, data2: 4, data3: 2, data4: 4},
                {month: '13:40', data1: 6, data2: 4, data3: 3, data4: 4}
            ]
        },
        legend: {
            type: 'sprite',
            docked: 'top'
        },
        interactions: {
            type: 'itemedit',
            tooltip: {
                renderer: 'onEditTipRender'
            }
        },
        insetPadding: {
            top: 40,
            left: 40,
            right: 40,
            bottom: 40
        },
        sprites: {
            type: 'text',
            text: '事件趋势',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        },
        axes: [
            {
            type: 'numeric',
            position: 'left',
            adjustByMajorUnit: true,
            grid: true,
            fields: ['data1', 'data2', 'data3', 'data4'],
            renderer: 'onAxisLabelRender',
            minimum: 0,
            maximum: 20,
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
            type: 'bar',
            title: ['紧急', '警告', '提醒', '恢复'],
            xField: 'month',
            yField: ['data1', 'data2', 'data3', 'data4'],
            stacked: true,
            style: {
                opacity: 0.80,
                minGapWidth: 40
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                renderer: 'onBarTipRender'
            }
        }]
    }]
});
