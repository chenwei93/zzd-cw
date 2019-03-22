Ext.define('Cmdb.view.dashboard.sj.sjgx.ChartSjgx', {
    extend: 'Ext.Panel',
    xtype: 'chartsjgx',
    controller: 'sjgx',
    // bodyStyle :'overflow-x:hidden;overflow-y:scroll',
    layout: 'fit',
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
        height: 600,
        store: {
            fields: ['time','data3', 'data4'],
            data: [
                {"time": new Date('2016-03-03 20:10').getTime(), "data3": 34, "data4": 24},
                {"time": new Date('2016-03-03 20:15').getTime(), "data3": 36, "data4": 24},
                {"time": new Date('2016-03-03 20:20').getTime(), "data3": 23, "data4": 14},
                {"time": new Date('2016-03-03 20:25').getTime(), "data3": 27, "data4": 21},
                {"time": new Date('2016-03-03 20:30').getTime(), "data3": 30, "data4": 25},
                {"time": new Date('2016-03-03 20:35').getTime(), "data3": 34, "data4": 18},
                {"time": new Date('2016-03-03 20:40').getTime(), "data3": 30, "data4": 18},
                {"time": new Date('2016-03-03 20:45').getTime(), "data3": 31, "data4": 27},
                {"time": new Date('2016-03-03 20:50').getTime(), "data3": 33, "data4": 15},
                {"time": new Date('2016-03-03 20:55').getTime(), "data3": 28, "data4": 16},
                {"time": new Date('2016-03-03 21:20').getTime(), "data3": 28, "data4": 14},
                {"time": new Date('2016-03-03 21:50').getTime(), "data3": 21, "data4": 9},
                {"time": new Date('2016-03-03 22:01').getTime(), "data3": 23, "data4": 18},
                {"time": new Date('2016-03-03 22:02').getTime(), "data3": 26, "data4": 16},
                {"time": new Date('2016-03-03 22:03').getTime(), "data3": 34, "data4": 15},
                {"time": new Date('2016-03-03 22:04').getTime(), "data3": 33, "data4": 13}
            ]
        },
        insetPadding: {
            top: 40,
            left: 40,
            right: 40,
            bottom: 10
        },
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },
        series: [
            {
                type: 'line',
                xField: 'time',
                title:  '接口数',
                yField: 'data3',
                stacked: true,
                marker: {
                    type: 'square',
                    fx: {
                        duration: 200,
                        easing: 'backOut'
                    }
                },
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
                xField: 'time',
                title: '共享数据',
                yField: 'data4',
                marker: {
                    type: 'triangle',
                    fx: {
                        duration: 200,
                        easing: 'backOut'
                    }
                },
                tooltip: {
                    trackMouse: true,
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: 'onSeriesTooltipRender2'
                }
            }
        ],
        axes: [
            {
            type: 'numeric',
            fields: ['data3', 'data4'],
            grid: true,
            position: 'left',
            minimum: 0,
            },
           {
            type: 'time',
            dateFormat: 'H:i',
            visibleRange: [0, 1],
            grid: true,
            position: 'bottom'
        }]
    }
});