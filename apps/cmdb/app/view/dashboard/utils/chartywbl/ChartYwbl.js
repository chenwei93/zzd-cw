Ext.define('Cmdb.view.dashboard.utils.chartywbl.ChartYwbl', {
    extend: 'Ext.Panel',
    xtype: 'chart-ywbl',
    controller: 'utils',

    width: 650,


    items: [{
        xtype: 'polar',
        reference: 'chart',
        theme: 'default-gradients',
        width: '100%',
        height: 200,
        insetPadding: 50,
        innerPadding: 20,
        store: {
            fields:['dept','data1'],
            data:[
                { dept: '技术', data1: 1.9 },
                { dept: '销售', data1: 1.7 },
                { dept: '决策', data1: 17.9 },
                { dept: '售后', data1: 10.2 },
                { dept: '生产', data1: 68.3}
                ]
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: '部门的业务图',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            angleField: 'data1',
            label: {
                field: 'dept',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender1'
            }
        }]
    }]

});