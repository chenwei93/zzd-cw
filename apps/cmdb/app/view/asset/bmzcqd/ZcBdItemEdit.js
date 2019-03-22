Ext.define('Cmdb.view.asset.bmzcqd.ZcBdItemEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'zcbd-itemedit',


    tbar: [{
        text: '保存',
        handler: 'onZcBdItemEditSure'
    }, {
        text: '取消',
        handler: 'onZcBdAddItemCancel'
    }],
    layout: 'column',
    viewModel: {
        type: 'zcbd-itemedit'
    },
    height:400,
    scrollable: true,
    defaults: {
        columnWidth: 1,
        margin: '10 10 10 10',
        bodyStyle: {
            'background': 'transparent',
        }
    },
    bodyStyle: {
        'background': '#F3F3F3',
    },

    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '名称',
            bind: '{name}'
        }, {
            xtype: 'textfield',
            name: 'code',
            fieldLabel: '编码',
            readOnly: true,
            bind: '{code}'
        }, {
            xtype: 'combo',
            name: 'type',
            fieldLabel: '类型',
            displayField: 'name',
            readOnly: true,
            valueField: 'value',
            store: {
                fields: ['name', 'value'],
                data: [{
                    name: '字符型',
                    value: 'string'
                }, {
                    name: '布尔型',
                    value: 'boolean'
                }, {
                    name: '日期型',
                    value: 'date'
                }, {
                    name: '数值型',
                    value: 'number'

                }]
            },
            bind: '{type}'
        }, {
            xtype: 'combo',
            name: 'show_type',
            displayField: 'name',
            valueField: 'value',
            store: {
                fields: ['name', 'value'],
                data: [{
                    name: '单行文本',
                    value: 'textfield'
                }, {
                    name: '多行文本',
                    value: 'textarea'
                }, {
                    name: '单选',
                    value: 'radiogroup'
                }, {
                    name: '下拉菜单',
                    value: 'combo'
                }, {
                    name: '日期',
                    value: 'datefield'
                }]
            },
            listeners: {
                change: 'onChange'
            },
            fieldLabel: '显示类型',
            readOnly: true,
            bind: '{show_type}'
        }, {
            xtype: 'numberfield',
            name: 'percent',
            maxValue: 1,
            minValue: 0.5,
            readOnly: true,
            fieldLabel: '占比',
            bind: '{percent}'

        }
    ],
    listeners: {
        render: 'onZcBdItemEditRender'
    }
});