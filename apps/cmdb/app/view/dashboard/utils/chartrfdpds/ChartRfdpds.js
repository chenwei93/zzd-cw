Ext.define('cmdb.view.dashboard.utils.chartrfdpds.ChartRfdpds', {
    extend: 'Ext.Panel',
    xtype: 'chartrfdpds',
    controller: 'utils',

    width: 650,

        items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,


        store: {
            fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],
            data :[
                { month: '20:10', data1: 20, data2: 37, data3: 35, data4: 4, other: 4 },
                { month: '20:20', data1: 20, data2: 37, data3: 36, data4: 5, other: 2 },
                { month: '20:30', data1: 19, data2: 36, data3: 37, data4: 4, other: 4 },
                { month: '20:40', data1: 18, data2: 36, data3: 38, data4: 5, other: 3 },
                { month: '20:50', data1: 22, data2: 35, data3: 39, data4: 4, other: 4 }
            ]
        },
        insetPadding: 40,
        //图表的类使用绘图包开发的surfaces(表面)和sprites(精灵)
        sprites: [
        {
            type: 'text',
            text: 'Redis发布或订阅频道数',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        axes: [
        {
            type: 'numeric',
            fields: ['data1' ],
            position: 'left',
            grid: true,
            minimum: 0,
            maximum: 50,
            renderer: 'onAxisLabelRenderpd'
        },
        {
            type: 'category',
            fields: 'month',
            position: 'bottom',
            grid: true,
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [
            {
                type: 'line',
                title: '税收',
                xField: 'month',
                yField: 'data1',
                highlightCfg: {
                    scaling: 2
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onSeriesTooltipRender'
                }
            }
        ],
        listeners: {
            itemhighlightchange: 'onItemHighlightChange'
        }
    }

});