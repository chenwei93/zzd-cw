Ext.define('cmdb.view.dashboard.utils.chartrncsyl.ChartRncsyl', {
    extend: 'Ext.Panel',
    xtype: 'chartrncsyl',
    controller: 'utils',

    width: 650,

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 40,


        store: {
            fields: ['year', 'usa'],
            data: [
                {
                    "year": 1984,
                    "usa": "4040.70"
                },
                {
                    "year": 1985,
                    "usa": "4346.75"
                },
                {
                    "year": 1986,
                    "usa": "4590.13"
                },
                {
                    "year": 1987,
                    "usa": "4870.23"
                },
                {
                    "year": 1988,
                    "usa": "5252.63"
                },
                {
                    "year": 1989,
                    "usa": "5657.70"
                },
                {
                    "year": 1990,
                    "usa": "5979.58"
                },
                {
                    "year": 1991,
                    "usa": "6174.05"
                },
                {
                    "year": 1992,
                    "usa": "6539.30"
                },
                {
                    "year": 1993,
                    "usa": "6878.70"
                },
                {
                    "year": 1994,
                    "usa": "7308.78"
                },
                {
                    "year": 1995,
                    "usa": "7664.05"
                },
                {
                    "year": 1996,
                    "usa": "8100.18"
                },
                {
                    "year": 1997,
                    "usa": "8608.53"
                },
                {
                    "year": 1998,
                    "usa": "9089.15"
                },
                {
                    "year": 1999,
                    "usa": "9660.63"
                },
                {
                    "year": 2000,
                    "usa": "10284.75"
                },
                {
                    "year": 2001,
                    "usa": "10621.83"
                }
            ]
        },

        sprites: [
        {
            type: 'text',
            text: 'Redis内存使用量',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        axes: [
            {
            type: 'numeric',
            position: 'left',
            fields: ['usa'],
            grid: true,
            minimum: 0,
            maximum: 20000,
            majorTickSteps: 10,
            renderer: 'onAxisLabelRender'
            },
            {
            type: 'category',
            position: 'bottom',
            fields: 'year',
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        listeners: {
            afterrender: 'onAfterRender'
        }
    }

});