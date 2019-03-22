Ext.define('cmdb.view.dashboard.utils.chartcppxyncpxbl.ChartCppxyncpxbl', {
    extend: 'Ext.Panel',
    xtype: 'chartcppxyncpxbl',
    controller: 'utils',
    layout: 'fit',
    requires: [
        'cmdb.view.dashboard.utils.UtilsController'
    ],
    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        // flipXY : true,
        insetPadding: 50,


        store: {
            fields: [
                'month',
                'high',
                'low'
            ],
            data: [
                { month: '2018-01-02', high: 14.7, low: 5.6  },
                { month: '2018-01-03', high: 16.5, low: 6.6  },
                { month: '2018-01-04', high: 18.6, low: 7.3  },
                { month: '2018-01-05', high: 20.8, low: 8.1  },
                { month: '2018-01-06', high: 23.3, low: 9.9  },
                { month: '2018-01-07', high: 26.2, low: 11.9 },
                { month: '2018-01-09', high: 27.7, low: 13.3 },
                { month: '2018-01-10', high: 27.6, low: 13.2 },
                { month: '2018-01-12', high: 26.4, low: 12.1 },
                { month: '2018-01-13', high: 23.6, low: 9.9  },
                { month: '2018-01-14', high: 17  , low: 6.8  },
                { month: '2018-01-15', high: 14.7, low: 5.8  }
            ]
        },
        sprites: [
            {
                type: 'text',
                text: '磁盘排序与内存排序比率',
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
                minimum: 0,
                // titleMargin: 20,
            },
            {
                type: 'category',
                position: 'bottom'
            }
        ],
        series: {
            type: 'bar',
            xField: 'month',
            stacked: false,
            yField: ['high','low'],
            style: {
                minGapWidth: 10
            }
        }
    }

});
