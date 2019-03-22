Ext.define('DA.view.entry.dataset.datasetOperateGrid', {
    extend: 'Ext.tab.Panel',
    xtype: 'dataset-grid',


    requires: [
        'DA.view.entry.dataset.datasetInput'
    ],
    plain: true,
    frame: false,
    items: [
        {
            xtype: 'gridpanel',
            title: '数据集配置',
            scrollable: true,
            reference: 'dataset-grid',
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            tbar: [{
                tooltip: '新增',
                iconCls: 'x-fa fa-plus',
                handler: 'onAdd'
            }],
            // listeners: {
            //     'cellclick': 'onChange'
            // },

            viewConfig: {
                stripeRows: true,
                enableTextSelection: false,
                markDirty: false
            },
            trackMouseOver: false,
            disableSelection: true,
            columns: [{
                flex: 2,
                text: '名称',
                dataIndex: 'name',
            }, {
                text: '显示名',
                flex: 1,
                dataIndex: 'title',
                editor: true

            }, {
                flex: 1,
                text: '数据类型',
                dataIndex: 'dataType',
                editor: {
                    xtype: 'combo',
                    displayField: 'name',
                    valueField: 'value',
                    store: {
                        autoLoad: true,
                        data: [{
                            name: '文本',
                            value: 'Text'
                        }, {
                            name: '数值',
                            value: 'Numeric'
                        }, {
                            name: '日期',
                            value: 'Date'
                        }, {
                            name: '引用',
                            value: 'Reference'
                        }]
                    }
                },
                renderer: function (data) {
                    var arr = {
                        'Text': '文本',
                        'Numeric': '数值',
                        'Date': '日期',
                        'Reference': '引用',
                        'Expression': '表达式'
                    };
                    return arr[data]
                }
            }, {
                text: '长度',
                flex: 1,
                dataIndex: 'dataLength',
                editor: true

            }, {
                xtype: 'checkcolumn',
                text: '是否主键',
                flex: 1,
                dataIndex: 'alias',
                listeners: {
                    checkchange: 'onCheckChange'
                }
            }, {
                xtype: 'checkcolumn',
                text: '显示',
                headerCheckbox: true,
                flex: 1,
                dataIndex: 'display'
            }, {
                xtype: 'checkcolumn',
                text: '查询',
                headerCheckbox: true,
                flex: 1,
                dataIndex: 'query'
            }, {
                flex: 1,
                text: '连接类型',
                dataIndex: 'joint',
                editor: {
                    xtype: 'combo',
                    displayField: 'name',
                    valueField: 'value',
                    store: {
                        autoLoad: true,
                        data: [{
                            name: '普通',
                            value: 'Normal'
                        }, {
                            name: 'Joint',
                            value: 'Joint'
                        }, {
                            name: 'Union',
                            value: 'Union'
                        }]
                    }
                },
                renderer: function (data) {
                    if (data == 'Normal') {
                        return '普通'
                    } else {
                        return data
                    }
                }
            }, {
                xtype: 'actioncolumn',
                text: '操作',
                flex: 1,
                items: [{
                    iconCls: 'x-fa fa-edit',
                    handler: 'onEdit',
                    tooltip: '表达式 '
                }, {
                    iconCls: 'x-fa fa-remove',
                    handler: 'onRemove',
                    tooltip: '删除'
                }],
                align: 'center',
                dataIndex: 'expression'
            }]
        },
        {
            xtype: 'form',
            frame: false,
            border: false,
            title: '数据集自定义',
            layout: 'column',
            scrollable: true,
            defaults: {
                columnWidth: 1,
                margin: '5 10',
            },
            items: [{
                height: 20,
                html: '输入脚本'
            }, {
                name: 'sqlcustomize',
                xtype: 'textarea',
                fieldStyle: 'font-size: 16px;font-family: Menlo;',
                height: 150,
                reference: 'sqlcustomize'
            }, {
                xtype: 'displayfield',
                readOnly: true,
                bind: '{showText1}'
            }, {
                xtype: 'grid',
                height: 200,
                scrollable: true,
                listeners: {
                    rowclick: 'onRowXClick'
                },
                store: {
                    autoLoad: true,
                    fields: [
                        'title', 'email', 'phone'
                    ],

                    data: [{
                        title: '操作符',
                        code: 'operation',
                        type: 'operation',
                        items: [
                            {
                                title: '加',
                                code: 'plus',
                                type: 'operation',
                                name: '+'
                            }, {
                                name: '-',
                                title: '减',
                                type: 'operation',
                                code: 'minus'
                            }, {
                                name: '*',
                                title: '乘',
                                type: 'operation',
                                code: 'multiply'
                            }, {
                                name: '/',
                                title: '除',
                                type: 'operation',
                                code: 'division'
                            }, {
                                name: '!',
                                title: '非',
                                type: 'operation',
                                code: 'not'
                            }, {
                                name: 'eq()',
                                title: '等于',
                                type: 'operation',
                                code: 'equal'
                            }, {
                                name: '<',
                                title: '小于',
                                type: 'operation',
                                code: 'less'
                            }, {
                                name: '>',
                                title: '大于',
                                type: 'operation',
                                code: 'more'
                            }, {
                                name: '&',
                                title: '且',
                                type: 'operation',
                                code: 'add'
                            }, {
                                name: '|',
                                title: '非',
                                type: 'operation',
                                code: 'not'
                            }, {
                                name: '(',
                                title: '左括号',
                                type: 'operation',
                                code: 'left'
                            }, {
                                name: ')',
                                title: '右括号',
                                type: 'operation',
                                code: 'right'
                            }]
                    }, {
                        title: '函数',
                        type: 'fn',
                        code: 'fn',
                        items: [
                            {
                                title: 'Like',
                                type: 'fn',
                                code: 'sum',
                                name: 'like()'
                            }, {
                                title: 'In',
                                type: 'fn',
                                code: 'multiply',
                                name: 'in()'
                            }]
                    }, {
                        title: '字段',
                        code: 'zd',
                        items: []

                    }, {
                        title: '数据集',
                        code: 'entry',
                        items: []

                    }]
                },
                columns: [{
                    dataIndex: 'title',
                    flex: 1
                }],
                columnWidth: 0.5
            }, {
                xtype: 'grid',
                height: 250,
                scrollable: true,
                reference: 'showGrid',
                listeners: {
                    rowdblclick: 'onRowDBXClick'
                },
                columns: [{
                    dataIndex: 'title',
                    flex: 1
                }],
                columnWidth: 0.5
            }]
        }]

});
