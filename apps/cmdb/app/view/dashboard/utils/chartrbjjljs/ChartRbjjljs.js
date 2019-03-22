Ext.define('cmdb.view.dashboard.utils.chartrbjjljs.ChartRbjjljs', {
    extend: 'Ext.Panel',
    xtype: 'chartrbjjljs',
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
                { month: 'Jan', data1: 20, data2: 37, data3: 35, data4: 4, other: 4 },
                { month: 'Feb', data1: 20, data2: 37, data3: 36, data4: 5, other: 2 },
                { month: 'Mar', data1: 19, data2: 36, data3: 37, data4: 4, other: 4 },
                { month: 'Apr', data1: 18, data2: 36, data3: 38, data4: 5, other: 3 },
                { month: 'May', data1: 18, data2: 35, data3: 39, data4: 4, other: 4 },
                { month: 'Jun', data1: 17, data2: 34, data3: 42, data4: 4, other: 3 },
                { month: 'Jul', data1: 16, data2: 34, data3: 43, data4: 4, other: 3 },
                { month: 'Aug', data1: 16, data2: 33, data3: 44, data4: 4, other: 3 },
                { month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4, other: 4 },
                { month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4, other: 3 },
                { month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4, other: 4 },
                { month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4, other: 3 }
            ]
        },
        insetPadding: 40,
        //图表的类使用绘图包开发的surfaces(表面)和sprites(精灵)
        sprites: [
        {
            type: 'text',
            text: 'CPU使用率',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        axes: [
        {
            type: 'numeric',
            fields: ['data1', 'data2', 'data3' ],
            position: 'left',
            grid: true,
            minimum: 0,
            renderer: 'onAxisLabelRender'
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
            },
            {
            type: 'line',
            title: '税收',
            xField: 'month',
            yField: 'data2',
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        },
            {
            type: 'line',
            title: '投资',
            xField: 'month',
            yField: 'data3',
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