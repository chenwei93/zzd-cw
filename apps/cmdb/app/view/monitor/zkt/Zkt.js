Ext.define('Cmdb.view.monitor.zkt.Zkt', {
    extend: 'Ext.panel.Panel',
    xtype: 'zkt',

    requires: [
        'cmdb.view.monitor.utils.ChartYzyyctj',
        'Cmdb.view.monitor.utils.UtilsController',
        'Cmdb.view.monitor.utils.ChartCPUSyqk',
        'Cmdb.view.monitor.utils.ChartDypds',
        'cmdb.view.dashboard.utils.chartcppxyncpxbl.ChartCppxyncpxbl',
        'cmdb.view.dashboard.utils.UtilsController',
        'Cmdb.view.monitor.zkt.ZktTimeline',
    ],
    layout: 'hbox',
    scrollable: true,
    items: [
        {
        flex: 3,
        items: [{
            height: 180,
            items: [
                {
                    xtype: 'image',
                    height: 120,
                    cls: 'img',
                    src: 'resources/images/警报.png'
                }, {
                    layout: 'hbox',
                    defaults: {
                        margin: '20 5 5 5'
                    },
                    items: [{
                        xtype: 'textfield',
                        flex: 2
                    }, {
                        xtype: 'button',
                        style: {
                            borderRadius: '20%'
                        },
                        flex: 1,
                        text: '日志检索'
                    }, {
                        xtype: 'button',
                        style: {
                            borderRadius: '20%'
                        },
                        flex: 1,
                        text: '我的工单'
                    }]
                }]
        }, {
            layout: 'column',
            items: [{
                xtype: 'chart-yzyyctj',
                height: 300,
                columnWidth: 0.5
            }, {
                xtype: 'chart-cpusyqk',
                height: 300,
                columnWidth: 0.5
            }, {
                xtype: 'chart-dypds',
                height: 300,
                columnWidth: 0.5
            }, {
                xtype: 'chartcppxyncpxbl',
                height: 300,
                columnWidth: 0.5
            }]
        }]
    }, {
        scrollable: true,
        xtype: 'panel',
        height: '100%',
        items: [{
            xtype: 'zkt-timeline'
        }],
        flex: 2
    }]
});
