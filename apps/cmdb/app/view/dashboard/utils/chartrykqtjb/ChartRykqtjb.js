Ext.define('Cmdb.view.dashboard.utils.chartrykqtjb.ChartRykqtjb', {
    extend: 'Ext.Panel',
    xtype: 'column-rykqtjb',
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
    items: [{
        xtype: 'cartesian',
        reference: 'chart',

        width: '100%',
        height: 460,

        store: {
            fields:['dept','total','late'],
            data:[
                {dept:'人社局',total:20,late:2},
                {dept:'公安局',total:40,late:5},
                {dept:'商务委',total:5,late:1},
                {dept:'建委',total:100,late:20},
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
            bottom: 20
        },
        // sprites: [{
        //     type: 'text',
        //     text: '人员考勤统计表',
        //     fontSize: 22,
        //     width: 100,
        //     height: 30,
        //     x: 40, // the sprite x position
        //     y: 20  // the sprite y position
        // }],
        axes: [{
            type: 'numeric',
            position: 'left',
            adjustByMajorUnit: true,
            grid: true,
            fields: ['total','late'],
            // renderer: 'onAxisLabelRender',
            renderer: 'onAxisLabelRenderLine'
            // minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            fields: ['dept'],
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar',
            title: [ '办结', '在办' ],
            xField: 'dept',
            yField: [ 'total', 'late' ],
            stacked: true,
            fullStack: true,
            style: {
                opacity: 0.80
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                renderer: 'onBarTipRender1'
            }
        }]
    }]



});