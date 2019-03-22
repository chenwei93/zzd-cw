Ext.define('Starter.view.utils.Pwd', {
    extend: 'Ext.panel.Panel',
    xtype: 'pwd',


    margin: 15,
    items: [{
        xtype: 'label',
        text: '输入您的电子邮件地址以获取更多重置密码说明',
        align: 'center'
    }, {
        xtype: 'textfield',
        cls: 'auth-textbox',
        height: 40,
        width: 300,
        name: 'email',
        hideLabel: true,
        allowBlank: false,
        emptyText: 'user@example.com',
        vtype: 'email'
    }, {
        xtype: 'button',
        reference: 'resetPassword',
        scale: 'large',
        width: 300,
        height: 40,
        iconAlign: 'right',
        iconCls: 'x-fa fa-angle-right',
        text: '重置密码',
        listeners: {
            click: 'onResetClick'
        }
    }]
});
