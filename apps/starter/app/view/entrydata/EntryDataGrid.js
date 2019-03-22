Ext.define('Starter.view.entrydata.EntrydataGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata-grid',
    requires: [
        'Ext.selection.CellModel'
    ],

    controller: 'entrydata-edit',
    width: 1100,
    height: 300,
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    autoLoad: true,
    frame: false,
    selModel: {
        type: 'cellmodel'
    },
    tbar: [{
        text: '保存',
        handler: function () {
            console.log('baocunbaocunbaocun')
        }
    }],
    store: {
        data: [{}]
    },
    columns: [{
        header: '信息项名称',
        dataIndex: 'itemsName',
        editor: {
            allowBlank: false
        }
    }, {
        header: '数据类型',
        dataIndex: 'dataType',
        editor: {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            store: {
                data: [{
                    name: '字符型',
                    value: 'string'
                }, {
                    name: '数值型',
                    value: 'numeric'
                }, {
                    name: '货币型',
                    value: 'currency'
                }, {
                    name: '日期型',
                    value: 'date'
                }, {
                    name: '日期时间型',
                    value: 'datetime'
                }, {
                    name: '逻辑型',
                    value: 'bit'
                }, {
                    name: '备注型',
                    value: 'des'
                }, {
                    name: '通用型',
                    value: 'general'
                }, {
                    name: '双精度型',
                    value: 'double'
                }, {
                    name: '整型',
                    value: 'int'
                }, {
                    name: '浮点型',
                    value: 'float'
                }]
            },
            displayField: 'name',
            valueField: 'name',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value'
        }
    }, {
        header: '长度',
        dataIndex: 'length',
        editor: {
            xtype: 'numberfield',

            allowBlank: false,
            minValue: 0,
            maxValue: 100000
        }
    }, {
        header: '共享类型',
        dataIndex: 'gglx',
        editor: {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            store: {
                data: [
                    {value: 'nocondition', name: '无条件共享'},
                    {value: 'condition', name: '有条件共享'},
                    {value: 'refuse', name: '不共享'}
                ]
            },
            displayField: 'name',
            valueField: 'name',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value'
        }
    }, {
        header: '共享条件',
        dataIndex: 'ggtj',
        editor: {
            allowBlank: false
        }
    }, {
        header: '共享方式',
        dataIndex: 'ggfs',
        editor: {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            store: {
                data: [{
                    name: '共享平台方式',
                    value: 'pt'
                }]
            },
            displayField: 'name',
            valueField: 'name',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value'
        }
    }, {
        header: '是否对社会开放',
        dataIndex: 'open',
        width: 200,
        trueText: '&#x2713;',
        falseText: '-',
        align: 'center',
        editor: {
            xtype: 'radiogroup',
            items: [
                {boxLabel: '是', inputValue: 1},
                {boxLabel: '否', inputValue: 2, checked: true}]
        }
    }, {
        header: '开放条件',
        dataIndex: 'kftj',
        editor: {
            allowBlank: false
        }
    }, {
        header: '更新周期',
        dataIndex: 'zhouqi',
        editor: {
            allowBlank: false
        }
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa  fa-plus',
                handler: 'onAddClick',
                margin: 5,
                tooltip: '新增'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                handler: 'onStop',
                margin: 5,
                tooltip: '修改'
            },
            {
                xtype: 'button',
                margin: 5,
                iconCls: 'x-fa fa-close',
                handler: 'onGen',
                tooltip: '删除'
            }
        ],

        cls: 'content-column',
        width: 90,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }]

});