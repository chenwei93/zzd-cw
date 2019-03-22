Ext.define('DG.view.roleconf.resultOutput', {
    extend: 'Ext.form.Panel',
    xtype: 'result-output',

    defaults: {
        xtype: 'fieldset',
        collapsible: false
    },
    items: [{
        title: '数据规则-调度',
        layout: 'column',
        items: [
            {
                xtype: 'combo',
                fieldLabel: '调度任务',
                store: {
                    data: [{
                        name: '只执行一次',
                        value: 1
                    }, {
                        name: '每月',
                        value: 3
                    }, {
                        name: '每日',
                        value: 2
                    }],
                },
                displayField: 'name',
                valueField: 'value',
                name: 'type',
                bind: '{jobType}',
                columnWidth: 0.4
            }, {
                xtype: 'datefield',
                fieldLabel: '开始时间',
                name: 'beginTime',
                bind: '{jobBeginTime}',
                submitFormat: 'Y-m-d H:i:s',
                format: 'Y-m-d H:i:s',
                columnWidth: 0.3
            }, {
                xtype: 'checkboxfield',
                name: 'checkbox1',
                reference: 'checkBox1',
                boxLabel: '重复执行',
                columnWidth: 0.3
            }]
    }, {
        title: '结果输出',
        items: [{
            xtype: 'grid',
            height: 250,
            reference: 'resultGrid',
            tbar: [{
                ui: 'default',
                text: '添加',
                handler: 'onResultOutputAdd'
            }],
            store: {
                data: []
            },
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '规则类型',
                xtype: 'widgetcolumn',
                widget: {
                    xtype: 'combo',
                    bind: '{record.rolesType}',
                    displayField: 'name',
                    valueField: 'value',
                    store: {
                        data: [{
                            name: '清洗规则',
                            value: 'washLogType'
                        }, {
                            name: '转换规则',
                            value: 'convertLogType'
                        }, {
                            name: '比对规则',
                            value: 'comparisonLogType'
                        }, {
                            name: '自定义规则',
                            value: 'customRulesLogType'
                        }]
                    }
                },
                flex: 1,
                dataIndex: 'rolesType'
            }, {
                xtype: 'widgetcolumn',
                widget: {
                    xtype: 'combo',
                    bind: '{record.log}',
                    displayField: 'name',
                    valueField: 'value',
                    store: {
                        data: [{
                            name: '处理总数',
                            value: 1
                        }, {
                            name: '处理详情',
                            value: 2
                        }]
                    }
                },
                text: '日志输入',
                flex: 1,
                dataIndex: 'log'
            }, {
                xtype: 'actioncolumn',
                text: '操作',
                items: [{
                    iconCls: 'x-fa fa-close',
                    tooltip: '删除',
                    handler: 'onOneRemove'
                }],
                width: 50,
                align: 'center',
                tooltip: '操作'
            }]
        }]
    }]
});
