Ext.define('DRDMS.view.entryset.EntryMetadataShow', {
    extend: 'Ext.form.Panel',
    xtype: 'entrymetadata-show',


    controller: 'entrymetadata',
    height: 500,
    scrollable: true,
    // layout: 'vbox',
    // anchor: '100%',
    defaults: {
        margin: 10,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%'
    },
    items: [{
        items: [{
            padding: '0 10 0 0',
            name: 'name',
            flex: 1,
            fieldLabel: '系统标识',
            bind: '{entrymetadata.name}'
        }, {
            flex: 1,
            name: 'text',
            fieldLabel: '名称',
            bind: '{entrymetadata.text}'
        }]
    }, {
        items: [{
            padding: '0 10 0 0',
            name: 'dataType',
            flex: 1,
            fieldLabel: '数据类型',
            bind: '{entrymetadata.dataType}'
        }, {
            flex: 1,
            name: 'valueRangeReference',
            fieldLabel: '值域',
        }]
    }, {

        items: [{
            flex: 1,
            name: 'dataTypeAlias',
            fieldLabel: '数据类型别名',
            padding: '0 10 0 0',
            bind: '{entrymetadata.dataTypeAlias}'

        }, {
            flex: 1,
            name: 'dataTypeDetail',
            fieldLabel: '数据类型描述',
            bind: '{entrymetadata.dataTypeDetail}'
        }]
    }, {
        items: [{
            padding: '0 10 0 0',
            name: 'shortTitle',
            flex: 1,
            fieldLabel: '短名',
            bind: '{entrymetadata.shortTitle}'
        }, {
            flex: 1,
            name: 'fullName',
            fieldLabel: '全名',
            bind: '{entrymetadata.fullName}'
        }]
    }, {
        items: [{
            name: 'dataLength',
            flex: 1,
            fieldLabel: '数据长度',
            bind: '{entrymetadata.dataLength}'
        }]
    }, {
        items: [{
            name: 'sample',
            flex: 1,
            fieldLabel: '示例',
            bind: '{entrymetadata.sample}'
        }]
    }, {

        items: [{
            name: 'memo',
            flex: 1,
            fieldLabel: '描述',
            bind: '{entrymetadata.memo}'
        }]
    }, {

        items: [{
            fieldLabel: '国标规范',
            name: 'GB',
            flex: 1,
            bind: '{entrymetadata.GB}'
        }, {
            fieldLabel: '必须',
            name: 'require',
            flex: 1,
            bind: '{entrymetadata.require}'
        }]

    }, {
        items: [{
            padding: '0 10 0 0',
            name: 'defaultValue',
            flex: 1,
            fieldLabel: '默认值',
            bind: '{entrymetadata.defaultValue}'
        }, {
            flex: 1,
            name: 'description',
            fieldLabel: '约束说明',
            bind: '{entrymetadata.description}'
        }]
    }]
});