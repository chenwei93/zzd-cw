Ext.define('DRDMS.view.region.RegionEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'region-edit',

    controller: 'region',
    bodyPadding: 10,
    layout: 'hbox',
    items: [{
        xtype: 'textfield',
        flex: 1,
        margin: '0 10 0 0',
        fieldLabel: '地区',
        name: 'text',
        bind: '{region.text}'
    }, {
        flex: 1,
        xtype: 'textfield',
        fieldLabel: '地区编码',
        name: 'code',
        bind: '{region.code}'
    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }]

});