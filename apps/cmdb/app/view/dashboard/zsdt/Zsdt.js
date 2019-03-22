Ext.define('Cmdb.view.dashboard.zsdt.Zsdt', {
    extend: 'Ext.panel.Panel',
    xtype: 'zsdt',


    requires:['Cmdb.view.dashboard.zsdt.ZsdtController',
        'cmdb.view.dashboard.utils.chartcppxyncpxbl.ChartCppxyncpxbl',
        'cmdb.view.dashboard.utils.chartcpsyl.ChartCpsyl3D',
        'Cmdb.view.monitor.utils.ChartDypds',
        'cmdb.view.dashboard.utils.chartcpsyl.ChartCpsyl',
        'cmdb.view.dashboard.utils.chartncsyl.ChartNcsyl',
        'cmdb.view.dashboard.utils.chartrbjjljs.ChartRbjjljs',
        'cmdb.view.dashboard.utils.chartrncsyl.ChartRncsyl',
        'cmdb.view.dashboard.utils.charttxczdz.ChartTxczdz',
        'Cmdb.view.monitor.utils.ChartCPUSyqk',
        'cmdb.view.monitor.utils.ChartYzyyctj',

    ],
    controller: 'zsdt',
    scrollable: true,
    layout: 'column',
    defaults: {
        margin: 10
    },
    items: [
        {
        xtype: 'panel',
        title: '磁盘排序与内存排序比率',
        collapsible: true,
        items: [{
            xtype: 'chartcppxyncpxbl'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: '磁盘使用率',
        collapsible: true,
        items: [{
            xtype: 'chartcpsyl'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: 'CPU使用率',
        collapsible: true,
        items: [{
            xtype: 'chart-dypds'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: '内存使用率',
        collapsible: true,
        items: [{
            xtype: 'chartncsyl'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: 'CPU使用率',
        collapsible: true,
        items: [{
            xtype: 'chartrbjjljs'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: 'Redis内存使用量',
        collapsible: true,
        items: [{
            xtype: 'chartrncsyl'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: 'CPU使用率',
        collapsible: true,
        items: [{
            xtype: 'charttxczdz'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    },
        {
        xtype: 'panel',
        title: '数据共享实时曲线图',
        collapsible: true,
        items: [{
            xtype: 'chart-cpusyqk'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    }, {
        xtype: 'panel',
        title: '数据汇集柱状图',
        collapsible: true,
        items: [{
            xtype: 'chart-yzyyctj'
        }],
        tools: [
            {iconCls: 'x-fa fa-close', handler: 'onClick'}],
        height: 300,
        scrollable: true,
        columnWidth: 0.33
    }
    ]
});
