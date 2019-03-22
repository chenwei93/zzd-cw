Ext.define('Starter.view.analysis.AnalysisColumn', {
    extend: 'Ext.Panel',
    xtype: 'analysis-column',

    requires: [
        'Starter.view.analysis.AnalysisController',
        'Starter.view.analysis.AnalysisModel'
    ],

    bodyPadding:20,
    margin:'30 0 0 0',
    controller:'analysis',
    items: [{
        xtype: 'cartesian',
        width: '100%',
        height: 500,
        viewModel: {
            type: 'analysis'
        },
        bind: {
            store: '{column}'
        },
        legend: {
            type: 'sprite',
            docked: 'right'
        },
        insetPadding: 40,
        innerPadding: {
            left: 40,
            right: 40,
            top:10
        },
        sprites: [{
            type: 'text',
            text: '各部门资源总量图',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40,
            y: 20
        }],
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            fields: 'data1',
            minimum: 0
            // maximum:100
        },{
            type: 'numeric',
            grid: true,
            position: 'right',
            fields: 'data2',
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            fields: 'dept'

        }],
        series: [{
            type: 'bar',
            title: ['文件数', '记录数'],
            label: {
                field: ['data1', 'data2'],
                display: 'insideEnd'
            },
            xField: 'dept',
            stacked: false,
            yField: ['data1', 'data2'],
            style: {
                opacity: 0.80,
                minGapWidth: 20
            },
            tooltip: {
                renderer: 'onBarTipRender'
            }
        }]
    }]

});