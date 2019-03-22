Ext.define('cmdb.view.dashboard.utils.chartcpsyl.ChartCpsyl', {
    extend: 'Ext.Panel',
    xtype: 'chartcpsyl',
    controller: 'utils',

    width: 650,

    items: {
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 50,
        innerPadding: 20,


        store: {
            fields: ['os', 'data1' ],
            data: [
                { os: '周一', data1: 68.3 },
                { os: '周二', data1: 11.7 },
                { os: '周三', data1: 17.9 },
                { os: '周四', data1: 10.2 },
                { os: '周五', data1: 11.9 }
            ]
        },
        interactions: ['rotate'],
        //图表的类使用绘图包开发的surfaces(表面)和sprites(精灵)
        sprites: [
        {
            type: 'text',
            text: '磁盘使用率',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            angleField: 'data1',
            donut:40,
            label: {
                field: 'os',
                display: 'outside'
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRenderPie'
            }
        }]
    }

});