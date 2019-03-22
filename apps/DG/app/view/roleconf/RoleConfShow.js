Ext.define('DG.view.roleconf.RoleConfShow', {
    extend: 'Ext.tab.Panel',
    xtype: 'roleconf-show',


    requires: [
        'DG.view.roleconf.RoleConfShowModel',
        'DG.view.roleconf.RoleConfShowController'
    ],
    controller: 'roleconf-show',
    tabPosition: 'bottom',
    viewModel: 'roleconf-show',
    defaults: {
        border: false,
        scrollable: true,
    },

    items: [
        {
            xtype: 'form',
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 5
            },
            title: '基本信息',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: '规则名称',
                    emptyText: '请输入规则名称',
                    name: 'ruleName',
                    bind: '{ruleName}'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '信息资源名称',
                    name: 'tableName',
                    readOnly: true,
                    bind: '{tableName}'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '规则描述',
                    name: 'ruleDescrption',
                    bind: '{ruleDescrption}'
                }]
        }, {
            xtype: 'grid',
            reference: 'show_clean',
            title: '清洗规则',
            columns: [
                {
                    xtype: 'rownumberer'
                }, {
                    text: '名称',
                    flex: 1,
                    dataIndex: 'name'
                }, {
                    text: '清洗策略',
                    flex: 1,
                    dataIndex: 'type',
                    renderer: function (data) {
                        var arr = {
                            1: '不处理',
                            2: '去掉重复的记录',
                            3: '去除为空记录',
                            4: '去除数据长度不符合'
                        };
                        return arr[data] ? arr[data] : data
                    }
                }, {
                    text: '执行条件',
                    flex: 1,
                    dataIndex: 'condition'
                }, {
                    text: '顺序',
                    flex: 1,
                    dataIndex: 'order'
                }]
        }, {
            title: '转换规则',
            xtype: 'grid',
            reference: 'show_change',
            columns: [
                {
                    xtype: 'rownumberer'
                }, {
                    text: '名称',
                    flex: 1,
                    dataIndex: 'name'
                }, {
                    text: '清洗策略',
                    flex: 1,
                    dataIndex: 'type',
                    renderer: function (data) {
                        var arr = {
                            1: '不处理',
                            2: '数值转换'
                        };
                        return arr[data] ? arr[data] : data
                    }
                }, {
                    text: '执行规则',
                    flex: 1,
                    dataIndex: 'rule'
                }, {
                    text: '执行条件',
                    flex: 1,
                    dataIndex: 'condition'
                }, {
                    text: '顺序',
                    flex: 1,
                    dataIndex: 'order'
                }],
        }, {
            xtype: 'grid',
            title: '比对规则',
            reference: 'show_compare',
            columns: [
                {
                    xtype: 'rownumberer'
                }, {
                    text: '名称',
                    flex: 1,
                    dataIndex: 'name'
                }, {
                    text: '比对名称',
                    flex: 1,
                    dataIndex: 'compareName'
                }, {
                    text: '执行条件',
                    flex: 1,
                    dataIndex: 'condition'
                }]

        }, {
            title: '自定义规则',
            reference: 'show_customize',
            xtype: 'form',
            defaults: {
                xtype: 'fieldset',
                margin: 5
            },
            items: []
        }, {
            title: '结果输出',
            layout: 'column',
            xtype: 'panel',
            items: [{
                xtype: 'displayfield',
                fieldLabel: '调度任务',
                name: 'type',
                bind: '{type}',
                columnWidth: 0.3,
                renderer: function (data) {
                    var arr = {
                        1: '只执行一次',
                        2: '每日',
                        3: '每月'
                    };
                    return arr[data] ? arr[data] : data
                }
            }, {
                xtype: 'displayfield',
                columnWidth: 0.5,
                fieldLabel: '开始时间',
                name: 'beginTime',
                bind: '{beginTime}'
            }, {
                xtype: 'displayfield',
                columnWidth: 0.2,
                name: 'repeat',
                fieldLabel: '重复执行',
                bind: '{repeat}',
                renderer: function (data) {
                    return data ? '是' : '否'
                }
            }, {
                xtype: 'grid',
                reference: 'show_result',
                columnWidth: 1,
                columns: [
                    {
                        xtype: 'rownumberer'
                    }, {
                        text: '规则类型',
                        flex: 1,
                        dataIndex: 'rolesType',
                        renderer: function (data) {
                            var arr = {
                                washLogType: '清洗规则',
                                convertLogType: '转换规则',
                                comparisonLogType: '比对规则',
                                customRulesLogType: '自定义规则'
                            };
                            return arr[data] ? arr[data] : data
                        }
                    }, {
                        text: '日志输入',
                        flex: 1,
                        dataIndex: 'log',
                        renderer: function (data) {
                            var arr = {
                                1: '处理总数',
                                2: '处理详情'
                            };
                            return arr[data] ? arr[data] : data

                        }
                    }]
            }]
        }],
    listeners: {
        render: 'onRender'
    }
});
