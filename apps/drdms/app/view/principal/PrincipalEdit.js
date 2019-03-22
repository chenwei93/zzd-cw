Ext.define('DRDMS.view.principal.PrincipalEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'principal-edit',

    controller: 'principal',
    bodyPadding: 10,
    layout: 'hbox',
    items: [{
        xtype: 'textfield',
        flex: 1,
        margin: '0 10 0 0',
        fieldLabel: '部门名称',
        name: 'text',
        bind: '{principal.text}'
    }, {
        flex: 1,
        xtype: 'textfield',
        fieldLabel: '部门编码',
        name: 'code',
        bind: '{principal.code}'
    }, {
        hidden: true,
        xtype: 'textfield',
        flex: 1,
        value: 'dcsp.domain.biz.Principal',
        name: '_class',
    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }]

});