Ext.define('Starter.view.analysis.AnalysisPie',{
    extend:'Ext.Panel',
    xtype:'analysis-pie',


    requires: [
        'Starter.view.analysis.AnalysisController',
        'Starter.view.analysis.AnalysisModel'
    ],
    controller:'analysis',
    bodyPadding:20,
    scrollable:true,
    items: [{
        xtype: 'polar',
        width: '100%',
        height: 390,
        insetPadding: 50,
        innerPadding: 10,
        viewModel: {
            type: 'analysis'
        },
        bind: {
            store: '{pie}'
        },
        legend: {
            docked: 'right'
        },
        sprites: [{
            type: 'text',
            text: '各部门文件数占比图',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 390, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie3d',
            angleField: 'data1',
            label: {
                field: 'dateDisplay',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onPieTooltipRender'
            }
        }]
    },{
        xtype: 'polar',
        width: '100%',
        height: 390,
        insetPadding: 50,
        innerPadding: 10,
        viewModel: {
            type: 'analysis'
        },
        bind: {
            store: '{pie}'
        },
        legend: {
            docked: 'right'
        },
        sprites: [{
            type: 'text',
            text: '各部门数据容量占比图',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 390, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie3d',
            angleField: 'data2',
            label: {
                field: 'dateDisplay',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onPieTooltipRender2'
            }
        }]
    },{
        xtype: 'polar',
        width: '100%',
        height: 390,
        insetPadding: 50,
        innerPadding: 10,
        viewModel: {
            type: 'analysis'
        },
        bind: {
            store: '{pie}'
        },
        legend: {
            docked: 'right'
        },
        sprites: [{
            type: 'text',
            text: '各部门记录数占比图',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 390, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie3d',
            angleField: 'data3',
            label: {
                field: 'dateDisplay',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onPieTooltipRender3'
            }
        }]
    }]
});