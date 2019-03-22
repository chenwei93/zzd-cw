Ext.define('cmdb.view.dashboard.utils.chartncsyl.ChartNcsyl', {
    extend: 'Ext.Panel',
    xtype: 'chartncsyl',
    controller: 'utils',

    width: 650,

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 40,
        flipXY: true,

        store: {
            fields: ['month', 'data1'],
            data: [
                { month: '360卫士',   data1: 30 },
                { month: 'IE浏览器',  data1: 20 },
                { month: 'Idea',      data1: 50 },
                { month: 'Webstore', data1: 40  },
                { month: '腾讯QQ',    data1: 60  }
            ]
        },
        interactions: {
            type: 'itemedit',
            style: {
                lineWidth: 2
            },
            tooltip: {
                renderer: 'onItemEditTooltipRender'
            }
        },
        animation: {
            easing: 'easeOut',
            duration: 500
        },
        sprites: [
        {
            type: 'text',
            text: '内存使用率',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        axes: [
            {
            type: 'numeric',
            position: 'bottom',
            fields: 'data1',
            grid: true,
            renderer: 'onAxisLabelRenderLine'
        },
        {
            type: 'category',
            position: 'left',
            fields: 'month',
            grid: true
        }],
        series: [
            {
            type: 'bar',
            xField: 'month',
            yField: 'data1',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            highlightCfg: {
                strokeStyle: 'black',
                radius: 10
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }

});