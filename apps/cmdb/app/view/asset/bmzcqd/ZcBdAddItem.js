Ext.define('Cmdb.view.asset.bmzcqd.ZcBdAddItem', {
    extend: 'Ext.form.Panel',
    xtype: 'zcbd-additem',


    tbar: [{
        text: '保存',
        handler: 'onZcBdAddItemSure'
    }, {
        text: '取消',
        handler: 'onZcBdAddItemCancel'
    }],
    layout: 'column',
    scrollable: true,
    height:400,
    defaults: {
        columnWidth: 1,
        margin: '10 10 10 10',
        bodyStyle:{
            'background': 'transparent',
        }
    },
    bodyStyle:{
        'background': '#F3F3F3',
    },

    items: [
        {
            xtype: 'textfield',
            columnWidth: 1,
            name: 'name',
            fieldLabel: '名称'
        }, {
            xtype: 'textfield',
            name: 'code',
            fieldLabel: '编码'
        }, {
            xtype: 'combo',
            name: 'type',
            fieldLabel: '类型',
            displayField: 'name',
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
                change: 'onZcBdAddItemChange'
            },
            fieldLabel: '显示类型'
        }, {
            xtype: 'numberfield',
            name: 'percent',
            maxValue: 1,
            minValue: 0.5,
            fieldLabel: '占比'

        }
    ]
});