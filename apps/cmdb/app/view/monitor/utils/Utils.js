Ext.define('Cmdb.view.monitor.utils.Utils', {
    extend: 'Ext.Panel',
    xtype: 'utils',


    requires:[
        'Cmdb.view.monitor.utils.UtilsController',
        'Cmdb.view.monitor.utils.CharCpsyl',
        'Cmdb.view.monitor.utils.ChartBjjljs',
        'Cmdb.view.monitor.utils.ChartCPUSyqk',
        'Cmdb.view.monitor.utils.ChartDypds',
        'Cmdb.view.monitor.utils.ChartNc',
        'Cmdb.view.monitor.utils.ChartNcsyl',
        'Cmdb.view.monitor.utils.ChartSjqs',
        'cmdb.view.monitor.utils.ChartYzyyctj'
    ],
    padding: 10,
    scrollable: true,
    items: [
        {
            items: [{
                xtype: 'chart-nc',
                flex: 1
            }, {
                xtype: 'chart-bjjljs',
                flex: 1
            }]
        }, {
            items: [{
                xtype: 'chart-sjqs',
                flex: 1
            }, {
                xtype: 'chart-ncsyl',
                flex: 1
            }]
        }, {
            items: [{
                xtype: 'chart-dypds',
                flex: 1
            }, {
                xtype: 'chart-cpusyqk',
                flex: 1
            }]
        }, {
            items: [{
                xtype: 'chart-cpsyl',
                flex: 1

            }, {
                xtype: 'chart-yzyyctj',
                flex: 1

            }]
        }]

});
