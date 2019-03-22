Ext.define('Cmdb.view.asset.zckgl.entryset.MetadataAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'entrymetadata-add',


    controller: 'entrymetadata',
    height: 500,
    scrollable: true,
    // layout: 'vbox',
    // anchor: '100%',
    defaults: {
        margin: 10,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    items: [{
        items: [{
            xtype: 'textfield',
            padding: '0 10 0 0',
            name: 'name',
            flex: 1,
            fieldLabel: '系统标识'
        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'text',
            fieldLabel: '名称'
        }]
    }, {
        items: [{
            xtype: 'combo',
            padding: '0 10 0 0',
            name: 'dataType',
            flex: 1,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            emptyText: '数据类型',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '文本', value: 'Text'},
                    {name: '数值型', value: 'Numeric'},
                    {name: '布尔型', value: 'Boolean'},
                    {name: '日期型', value: 'Date'},
                    {name: '数据字典', value: 'Directory'}
                ]
            },
            fieldLabel: '数据类型',
            listeners: {
                change: 'onChooseSelect'
            }
        }, {
            flex: 1,
            xtype: 'combo',
            name: 'valueRangeReference',
            reference: 'range',
            fieldLabel: '值域',
            displayField: 'title',
            valueField: 'code',
            store: {
                data: null
            }
        }]
    }, {

        items: [{
            flex: 1,
            xtype: 'textfield',
            name: 'dataTypeAlias',
            fieldLabel: '数据类型别名',
            padding: '0 10 0 0'

        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'dataTypeDetail',
            fieldLabel: '数据类型描述'
        }]
    }, {
        items: [{
            xtype: 'textfield',
            padding: '0 10 0 0',
            name: 'shortTitle',
            flex: 1,
            fieldLabel: '短名'
        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'fullName',
            fieldLabel: '全名'
        }]
    }, {
        items: [{
            xtype: 'textfield',
            name: 'dataLength',
            flex: 1,
            fieldLabel: '数据长度'
        }]
    }, {
        items: [{
            xtype: 'textarea',
            name: 'sample',
            flex: 1,
            fieldLabel: '示例'
        }]
    }, {

        items: [{
            xtype: 'textarea',
            name: 'memo',
            flex: 1,
            fieldLabel: '描述'
        }]
    }, {

        items: [{
            xtype: 'radiogroup',
            fieldLabel: '国标规范',
            name: 'GB',
            flex: 1,
            items: [
                {boxLabel: '否', inputValue: 'false', checked: true}
            ]
        }, {
            xtype: 'radiogroup',
            fieldLabel: '必须',
            name: 'require',
            flex: 1,
            items: [
                {boxLabel: '是', inputValue: 'true', checked: true},
                {boxLabel: '否', inputValue: 'false'}
            ]
        }]

    }, {
        items: [{
            xtype: 'textfield',
            padding: '0 10 0 0',
            name: 'defaultValue',
            flex: 1,
            fieldLabel: '默认值'
        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'description',
            fieldLabel: '约束说明'
        }]
    }],
    buttons: [{
        text: '保存',
        handler: 'onSaveAdd'
    }, {
        text: '取消',
        handler: 'onCancelAdd'
    }]
})
;