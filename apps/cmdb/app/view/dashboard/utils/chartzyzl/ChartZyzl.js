Ext.define('cmdb.view.dashboard.utils.chartzyzl.ChartZyzl', {
    extend: 'Ext.Panel',
    xtype: 'chartzyzl',
    controller: 'utils',

    height: 1000,

    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'radiogroup',
                flex: 2,
                items: [
                    {boxLabel: '日', inputValue: 1, checked: true},
                    {boxLabel: '月', inputValue: 2},
                    {boxLabel: '年', inputValue: 3}
                ],
            }, {
                xtype: 'datefield',
                margin: '0 0 0 20',
                labelWidth: 50,
                fieldLabel: '区间',
            }, {
                xtype: 'displayfield',
                value: '到',
                margin: '0 10 0 10',
            }, {
                xtype: 'datefield'
            }, '->', {
                xtype: 'treepicker',
                fieldLabel: '部门',
                labelWidth: 50,
                displayField: 'text',
                store: Ext.create('Ext.data.TreeStore', {
                    autoLoad: true,
                    model: 'Region',
                    rootVisible: false,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/entry/department.json',
                        reader: {
                            rootProperty: 'children'
                        }
                    }
                }),
                listeners: {
                    render: function () {
                        this.getPicker().getStore().setRootVisible(false);
                        this.getPicker().expandAll();
                    }
                }
            }, {
                text: '统计',
                handler: function () {
                    console.log('统计');
                }
            }]
        }]
    },
    items: [{
        xtype: 'cartesian',
        reference: 'chart',

        width: '100%',
        height: 400,

        store: {
            fields: ['month', 'data1', 'data2', 'data3', 'data4'],
            data: [
                {month: '2018-01-04', data1: 2, data2: 3, data3: 5, data4: 4},
                {month: '2018-02-04', data1: 2, data2: 3, data3: 6, data4: 5},
                {month: '2018-03-04', data1: 9, data2: 6, data3: 7, data4: 4},
                {month: '2018-04-04', data1: 8, data2: 6, data3: 8, data4: 5},
                {month: '2018-05-04', data1: 8, data2: 5, data3: 9, data4: 4},
                {month: '2018-06-04', data1: 7, data2: 4, data3: 2, data4: 4},
                {month: '2018-07-04', data1: 6, data2: 4, data3: 3, data4: 4}
            ]
        },
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },

        interactions: {
            type: 'itemedit',
            tooltip: {
                renderer: 'onEditTipRender'
            }
        },
        insetPadding: {
            top: 40,
            left: 40,
            right: 40,
            bottom: 40
        },
        sprites: {
            type: 'text',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            adjustByMajorUnit: true,
            grid: true,
            // fields: ['data1'],
            renderer: 'onAxisLabelRender',
            minimum: 0,
            maximum: 30,
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['month'],
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar',
            title: ['云资源', '数据资源', '服务资源', '接口资源'],
            xField: 'month',
            yField: ['data1', 'data2', 'data3', 'data4'],
            stacked: false,
            // pressed: true
            style: {
                opacity: 0.80
                // minGapWidth: 40
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                renderer: 'onBarTipRender'
            }
        }]
    }]
});