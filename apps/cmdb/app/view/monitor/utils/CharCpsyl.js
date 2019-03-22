Ext.define('Cmdb.view.monitor.utils.CharCpsyl', {
    extend: 'Ext.Panel',
    xtype: 'chart-cpsyl',
    controller: 'chart-utils',

    // width: 650,

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
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 400,
        insetPadding: 50,
        innerPadding: 20,
        store: {
            fields: ['os', 'data1'],
            data: [
                {os: 'Android', data1: 1.9},
                {os: 'BlackBerry', data1: 1.7},
                {os: 'iOS', data1: 17.9},
                {os: 'Windows Phone', data1: 10.2},
                {os: '未识别', data1: 68.3}
            ]
        },

        interactions: ['rotate', 'itemhighlight'],
        sprites: [{
            type: 'text',
            text: '磁盘使用率',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            angleField: 'data1',
            donut: 50,

            // label: {
            //     field: 'os',
            // display: 'outside'
            // },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender1'
            }
        }]
    }]

});