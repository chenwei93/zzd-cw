Ext.define('cmdb.view.dashboard.utils.chartyzyyc.ChartYzyyc', {
    extend: 'Ext.Panel',
    xtype: 'chartyzyyc',
    controller: 'utils',

    // width: 1000,
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
    items: {
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 500,
        innerPadding: 20,
        legend: {
            docked: 'bottom'
        },
        store: {
            fields: ['os', 'data1', 'data2' ],
            data: [
                { os: '磁盘空间异常', data1: 50.3 },
                { os: 'CPU使用率异常', data1: 17.9 },
                { os: '内存使用率异常等', data1: 10.1 },
                { os: '网络异常', data1: 21.5 },
                { os: '安全异常', data1: 10.2 }
            ]
        },
        insetPadding: 40,
        //图表的类使用绘图包开发的surfaces(表面)和sprites(精灵)
        sprites: [
        {
            type: 'text',
            // text: '云资源异常分类饼图（按类型）',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            animation: {
                easing: 'easeOut',
                duration: 500
            },
            angleField: 'data1',  // bind pie slice angular span to market share
            // radiusField: 'data2', // bind pie slice radius to growth rate
            clockwise: false,
            highlight: {
                margin: 20
            },
            label: {
                field: 'os',      // bind label text to name
                display: 'outside',
                fontSize: 14
            },
            style: {
                strokeStyle: 'white',
                lineWidth: 1
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRenderPie'
            }
        }]
    }

});