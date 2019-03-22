Ext.define('Cmdb.view.dashboard.utils.chartgdcl.ChartGdcl', {
    extend: 'Ext.Panel',
    xtype: 'chart-gdcl',
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
            fields:['state','data1'],
            data:[
                { state: '办结', data1: 50.0 },
                { state: '待办', data1: 50.0 }

            ]
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: '工单处理状态',
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
                field: 'state',
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