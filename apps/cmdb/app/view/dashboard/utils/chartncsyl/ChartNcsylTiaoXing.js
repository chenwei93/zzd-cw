Ext.define('cmdb.view.dashboard.utils.chartncsyl.ChartNcsylTiaoXing', {
    extend: 'Ext.Panel',
    xtype: 'chartncsyltiaoxing',
    controller: 'utils',

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
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 10,

        store: {
            fields: ['month', 'data1','data2'],
            data: [
                { month: '人社局', data1: 30, data2: 36 },
                { month: '公安局', data1: 40 , data2: 32},
                { month: '商务委', data1: 25 , data2: 21},
                { month: '教委', data1: 18 , data2: 26 },
                { month: '建委', data1: 44 , data2: 32 }
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
        // sprites: [
        // {
        //     type: 'text',
        //     text: '业务办理量统计图（按部门）',
        //     fontSize: 22,
        //     width: 100,
        //     height: 30,
        //     x: 40, // the sprite x position
        //     y: 20  // the sprite y position
        // }],
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },
        axes: [
            {
            type: 'numeric',
            position: 'left',
            fields: ['data1','data2'],
            grid: true,
            minimum: 0,
            // renderer: 'onAxisLabelRender'
        },
        {
            type: 'category',
            position: 'bottom',
            fields: 'month',
            grid: true
        }],
        series: [
            {
            type: 'bar',
            xField: 'month',
            yField: ['data1','data2'],
            title: ['一月','二月'],
            stacked: false,
            style: {
                opacity: 2.80,
                minGapWidth: 30
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