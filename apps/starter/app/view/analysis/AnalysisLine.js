Ext.define('Starter.view.analysis.AnalysisLine', {
    extend: 'Ext.Panel',
    xtype: 'analysis-line',

    requires: [
        'Starter.view.analysis.AnalysisController',
        'Starter.view.analysis.AnalysisModel'
    ],
    controller: 'analysis',
    bodyPadding:20,
    margin:'10 0 0 0',
    items: {
        xtype: 'cartesian',
        width: '100%',
        height: 600,
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        animation: {
            duration: 200
        },
        viewModel: {
            type: 'analysis'
        },
        bind: {
            store: '{line}'
        },
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },
        insetPadding: 40,
        innerPadding: {
            left: 40,
            right: 40,
            top:10
        },
        sprites: [{
            type: 'text',
            text: '上报趋势图',
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
            minimum: -1,
            maximum:10
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            // label: {
            //     rotate: {
            //         degrees: -45
            //     }
            // }
        }],
        series: [{
            type: 'line',
            xField: 'dateDisplay',
            yField: 'data1',
            style: {
                lineWidth: 2
            },
            marker: {
                radius: 4,
                lineWidth: 2
            },
            title: '数据库上报总量',
            label: {
                field: 'data1',
                display: 'over'
            },
            highlight: {
                fillStyle: '#000',
                radius: 5,
                lineWidth: 2,
                strokeStyle: '#fff'
            },
            tooltip: {
                trackMouse: true,
                showDelay: 0,
                dismissDelay: 0,
                hideDelay: 0,
                renderer: 'onSeriesTooltipRender'
            }
        },{
            type: 'line',
            xField: 'dateDisplay',
            yField: 'data2',
            style: {
                lineWidth: 2
            },
            marker: {
                radius: 4,
                lineWidth: 2
            },
            title: '文件上报总量',
            label: {
                field: 'data2',
                display: 'over'
            },
            highlight: {
                fillStyle: '#000',
                radius: 5,
                lineWidth: 2,
                strokeStyle: '#fff'
            },
            tooltip: {
                trackMouse: true,
                showDelay: 0,
                dismissDelay: 0,
                hideDelay: 0,
                renderer: 'onSeriesTooltipRender2'
            }
        }]
    }
});