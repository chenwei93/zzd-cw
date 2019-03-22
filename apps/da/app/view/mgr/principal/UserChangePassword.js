Ext.define('DA.view.mgr.principal.UserChangePassword', {
    extend: 'Ext.form.Panel',
    xtype: 'user-changepsd',


    requires: [
        'DA.view.mgr.principal.UserChangePasswordController'
    ],
    layout: 'column',
    padding: 2,
    defaults: {
        padding: 10,
        xtype: 'textfield',
        inputType: 'password',
        allowBlank: false,
        height: 40,
        columnWidth: 1
    },
    controller: 'user-changepsd',
    items: [{
        emptyText: '请输入新密码',
        reference: 'first'
    }, {
        emptyText: '请再次输入新密码',
        reference: 'second'
    }],
    buttons: {
        items: [{
            text: '确定',
            handler: 'onChangePsd',
            flex: 1
        }]
    }
});
