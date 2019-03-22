Ext.define('DA.view.charts.ChartRykq', {
    extend: 'Ext.Panel',
    xtype: 'chartrykq',
    controller: 'ywbl',
    layout: 'fit',
    // bodyStyle :'overflow-x:hidden;overflow-y:scroll',
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
                    // model: 'Region',
                    rootVisible: false,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/entry/department.json',
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

        store: {
            fields: ['month', 'data1', 'data2'],
            data :[
                { month: '销售部', data1: 80,data2: 20},
                { month: '研发部', data1: 90,data2: 10},
                { month: '测试部', data1: 85,data2: 15},
                { month: '实施部', data1: 87,data2: 13},
                { month: '人事部', data1: 92,data2: 8}
            ]
        },
        insetPadding: {
            top: 40,
            left: 40,
            right: 40,
            bottom: 10
        },
        axes: [
            {
                type: 'numeric',
                fields: ['data1', 'data2'],
                position: 'left',
                grid: true,
                minimum: 0,
                renderer: 'onAxisLabelRenderLine'
            },
            {
                type: 'category',
                position: 'bottom',
                fields: 'month',
                grid: true
            }
            ],
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },
        series: [
            {
                type: 'line',
                title: '正常',
                xField: 'month',
                yField: 'data1',
                stacked: true,
                // fullStack: true,
                marker: {
                    type: 'square',
                    fx: {
                        duration: 200,
                        easing: 'backOut'
                    }
                },
                // highlightCfg: {
                //     scaling: 2
                // },
                tooltip: {
                    trackMouse: true,
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: 'onSeriesTooltipRender2'
                }
            },
            {
                type: 'line',
                title: '缺勤',
                xField: 'month',
                yField: 'data2',
                stacked: true,
                marker: {
                    type: 'cross',
                    fx: {
                        duration: 200,
                        easing: 'backOut'
                    }
                },
                // highlightCfg: {
                //     scaling: 2
                // },
                tooltip: {
                    trackMouse: true,
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: 'onSeriesTooltipRender2'
                }
            }
        ],
        // listeners: {
        //     itemhighlightchange: 'onItemHighlightChange'
        // }
    }

});
