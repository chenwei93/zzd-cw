Ext.define('DA.view.entry.entrywh.EntryWhYwType', {
    extend: 'Ext.form.Panel',
    xtype: 'entrywh-ywtype',


    requires: [
        'DA.view.entry.entrywh.EntryWhYwTypeController',
        'DA.view.entry.entrywh.EntryWhYwTypeModel'
    ],
    controller: 'entrywh-ywtype',
    tbar: [{
        ui: 'default',
        text: '保存',
        handler: 'onSure'
    }, {
        ui: 'default',
        text: '取消',
        handler: 'onCancel'
    }],
    layout: 'column',
    bodyPadding: 10,
    defaults: {
        margin: 5,
        columnWidth: 0.5
    },
    viewModel: {
        type: 'entrywh-ywtype'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: '本地根路径',
        name: 'local',
        bind: '{local}',
        columnWidth: 1
    }, {
        xtype: 'textfield',
        reference: 'nowZd',
        readOnly: true,
        fieldLabel: '当前字段',
        name: 'field',
        bind: '{field}'
    }, {
        xtype: 'combo',
        reference: 'allZd',
        fieldLabel: '附件名字段',
        displayField: 'title',
        valueField: 'name',
        name: 'title_field',
        bind: '{title_field}'

    }, {
        xtype: 'radiogroup',
        fieldLabel: '嵌入类型',
        name: 'embed',
        columnWidth: 1,
        reference: 'qrtype',
        items: [
            {boxLabel: '是', inputValue: 'true'},
            {boxLabel: '否', inputValue: 'false'}
        ]
    }],
    listeners: {
        render: 'onRender'
    }
});
