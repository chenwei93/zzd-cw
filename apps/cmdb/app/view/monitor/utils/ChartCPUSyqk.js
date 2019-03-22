Ext.define('Cmdb.view.monitor.utils.ChartCPUSyqk', {
    extend: 'Ext.Panel',
    xtype: 'chart-cpusyqk',
    controller: 'chart-utils',

    requires: [
        'Cmdb.view.monitor.utils.UtilsController'
    ],

    layout: 'fit',


    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height:500,
        store: {
            // storeId: 'USD2EUR',
            data: [
                {"time": new Date('2014-04-23 18:55:49:123').getTime(), "value": 46},
                {"time": new Date('2014-04-23 18:56:49:123').getTime(), "value": 45},
                {"time": new Date('2014-04-23 18:57:49:123').getTime(), "value": 44},
                {"time": new Date('2014-04-23 18:58:49:123').getTime(), "value": 51},
                {"time": new Date('2014-04-23 18:59:49:123').getTime(), "value": 18},
                {"time": new Date('2014-04-23 19:00:49:123').getTime(), "value": 64},
                {"time": new Date('2014-04-23 19:01:49:123').getTime(), "value": 58}
                // {"time": new Date('2014-04-23 19:02:49:123').getTime(), "value": 32},
                // {"time": new Date('2014-04-23 19:03:49:123').getTime(), "value": 33},
                // {"time": new Date('2014-04-23 19:04:49:123').getTime(), "value": 58},
                // {"time": new Date('2014-04-23 19:05:49:123').getTime(), "value": 83},
                // {"time": new Date('2014-04-23 19:06:49:123').getTime(), "value": 78},
                // {"time": new Date('2014-04-23 19:07:49:123').getTime(), "value": 56},
                // {"time": new Date('2014-04-23 19:08:49:123').getTime(), "value": 92},
                // {"time": new Date('2014-04-23 19:09:49:123').getTime(), "value": 39},
                // {"time": new Date('2014-04-23 19:10:49:123').getTime(), "value": 39},
                // {"time": new Date('2014-04-23 19:11:49:123').getTime(), "value": 45},
                // {"time": new Date('2014-04-23 19:12:49:123').getTime(), "value": 65},
                // {"time": new Date('2014-04-23 19:13:49:123').getTime(), "value": 61}
                ]

        },
        // interactions: {
        //     type: 'crosszoom',
        //     zoomOnPanGesture: false
        // },
        insetPadding: '20 20 10 10',
        series: [{
            type: 'line',
            title:['time'],
            xField: 'time',
            yField: 'value',
            style: {
                lineWidth: 2,
                fillStyle: '#115fa6',
                strokeStyle: '#115fa6',
                fillOpacity: 0.6,
                miterLimit: 3,
                lineCap: 'miter'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onAfterRender'
            }
        }],
        sprites: [
            {
                type: 'text',
                text: '接口调用监控',
                region :'center',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 50, // the sprite x position
                y: 20  // the sprite y position
            }],
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['value']
        }, {
            type: 'time',
            dateFormat: 'H:i',
            fromDate:new Date('2014-04-23 18:55:49:123').getTime(),
            toDate:new Date('2014-04-23 19:01:49:123').getTime(),
            visibleRange: [0, 100],
            position: 'bottom',
            fields: ['time']
        }]
    }

});