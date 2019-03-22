Ext.define('DRDMS.view.entryset.MetadataEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'entrymetadata-edit',


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
            fieldLabel: '系统标识',
            bind:'{entrymetadata.name}'
        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'text',
            fieldLabel: '名称',
            bind:'{entrymetadata.text}'
        }, {
            name: '_class',
            value: 'dcsp.drdms.domain.metadata.ObjectAttribute',
            hidden: true
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
            },
            bind:'{entrymetadata.dataType}'
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
            padding: '0 10 0 0',
            bind:'{entrymetadata.dataTypeAlias}'

        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'dataTypeDetail',
            fieldLabel: '数据类型描述',
            bind:'{entrymetadata.dataTypeDetail}'
        }]
    }, {
        items: [{
            xtype: 'textfield',
            padding: '0 10 0 0',
            name: 'shortTitle',
            flex: 1,
            fieldLabel: '短名',
            bind:'{entrymetadata.shortTitle}'
        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'fullName',
            fieldLabel: '全名',
            bind:'{entrymetadata.fullName}'
        }]
    }, {
        items: [{
            xtype: 'textfield',
            name: 'dataLength',
            flex: 1,
            fieldLabel: '数据长度',
            bind:'{entrymetadata.dataLength}'
        }]
    }, {
        items: [{
            xtype: 'textarea',
            name: 'sample',
            flex: 1,
            fieldLabel: '示例',
            bind:'{entrymetadata.sample}'
        }]
    }, {

        items: [{
            xtype: 'textarea',
            name: 'memo',
            flex: 1,
            fieldLabel: '描述',
            bind:'{entrymetadata.memo}'
        }]
    }, {

        items: [{
            xtype: 'radiogroup',
            fieldLabel: '国标规范',
            name: 'GB',
            flex: 1,
            items: [
                {boxLabel: '否', inputValue: 'false',checked: true}
            ],
            bind:'{entrymetadata.GB}'
        }, {
            xtype: 'radiogroup',
            fieldLabel: '必须',
            name: 'require',
            flex: 1,
            items: [
                {boxLabel: '是', inputValue: 'true', checked: true},
                {boxLabel: '否', inputValue: 'false'}
            ],
            bind:'{entrymetadata.require}'
        }]

    }, {
        items: [{
            xtype: 'textfield',
            padding: '0 10 0 0',
            name: 'defaultValue',
            flex: 1,
            fieldLabel: '默认值',
            bind:'{entrymetadata.defaultValue}'
        }, {
            flex: 1,
            xtype: 'textfield',
            name: 'description',
            fieldLabel: '约束说明',
            bind:'{entrymetadata.description}'
        }]
    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }]
})
;