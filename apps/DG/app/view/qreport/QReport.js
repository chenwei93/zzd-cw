Ext.define('DG.view.qreport.QReport', {
    extend: 'Ext.grid.Panel',
    xtype: 'qreport',

    requires: [
        'DG.view.qreport.QReportModel',
        'DG.view.qreport.QReportController',
        'DG.view.qreport.ShowReport'
    ],
    controller: 'qreport',
    viewModel: 'qreport',
    bind: {
        store: '{list}'
    },
    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            defaults: {
                xtype: 'textfield',
                labelWidth: 70,
                columnWidth: 0.215
            },
            layout: 'column',
            items: [{
                fieldLabel: '规则名称',
                name: 'ruleName',
                bind: '{ruleName}',
            }, {
                fieldLabel: '信息资源名',
                bind: '{tableName}',
                name: 'tableName'
            }, {
                xtype: 'datefield',
                fieldLabel: '运行时间',
                name: 'beginTime',
                bind: '{beginTime}'
            }, {
                xtype: 'displayfield',
                value: '-',
                columnWidth: 0.015
            }, {
                xtype: 'datefield',
                name: 'endTime',
                bind: '{endTime}',
                columnWidth: 0.2
            }, '->', {
                xtype: 'button',
                ui: 'default',
                text: '查询',
                handler: 'onSearch',
                columnWidth: 0.07
            }, {
                xtype: 'button',
                text: '重置',
                handler: 'onReset',
                columnWidth: 0.07
            }]
        }]

    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '规则名称',
        flex: 1,
        dataIndex: 'ruleName'
    }, {
        text: '信息资源名',
        flex: 1,
        dataIndex: 'tableName'
    }, {
        text: '开始时间',
        flex: 1,
        dataIndex: 'beginTime'
    }, {
        text: '结束时间',
        flex: 1,
        dataIndex: 'endTime'
    }, {
        text: '异常数量',
        flex: 1,
        dataIndex: 'errorCount'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        defaults: {
            defaultType: 'button'
        },
        items: [{
            iconCls: 'x-fa fa-bars',
            tooltip: '详情',
            handler: 'onDetail'
        }, {
            iconCls: 'x-fa fa-eye',
            tooltip: '查看',
            handler: 'onShow'
        }],
        cls: 'content-column',
        width: 50,
        align: 'center',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
