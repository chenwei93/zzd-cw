Ext.define('cmdb.view.monitor.utils.ChartYzyyctj', {
    extend: 'Ext.Panel',
    xtype: 'chart-yzyyctj',
    controller: 'chart-utils',
    requires:['Cmdb.view.monitor.utils.UtilsController'],
    layout: 'fit',
    items: {
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height:500,
        innerPadding: 20,

        store: {
            fields: ['os', 'data1'],
            data: [
                {os: '磁盘空间异常', data1: 50.3},
                {os: 'CPU使用率异常', data1: 17.9},
                {os: '内存使用率异常等', data1: 10.1},
                {os: '网络异常', data1: 21.5},
                {os: '安全异常', data1: 10.2}
            ]
        },
        insetPadding: 40,
        //图表的类使用绘图包开发的surfaces(表面)和sprites(精灵)
        sprites: [
            {
                type: 'text',
                text: '云资源异常统计饼图',
                region :'center',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 50, // the sprite x position
                y: 20  // the sprite y position
            }],
        series: [{
            type: 'pie',
            animation: {
                easing: 'easeOut',
                duration: 500
            },
            angleField: 'data1',  // bind pie slice angular span to market share
            // radiusField: 'data2', // bind pie slice radius to growth rate
            clockwise: false,
            highlight: {
                margin: 20
            },
            label: {
                field: 'os',      // bind label text to name
                display: 'outside',
                fontSize: 14
            },
            style: {
                strokeStyle: 'white',
                lineWidth: 1
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRenderPie'
            }
        }]
    }

});
