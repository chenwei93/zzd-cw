Ext.define('AP.view.application.ApplicationAddBase', {
    extend: 'Ext.form.Panel',
    xtype: 'appadd-base',


    defaults: {
        margin: '20',
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    items: [{
        items: [{
            fieldLabel: '标题'+ '<em style="color:red" >*</em>',
            flex: 2,
            labelWidth: 67,
            reference: 'title',
            margin: '0 0 10 0',
            name: 'title',
            bind: '{application.title}'

        }, {
            flex: 0.9,
            xtype: 'displayfield',
            cls: 'imgcenter',
            value: '<img src="resources/默认.png" class="imgs">',
            submitValue: false

        }]
    }, {
        items: [{
            fieldLabel: '应用标识'+ '<em style="color:red" >*</em>',
            labelWidth: 67,
            flex: 1,
            listeners: {
                focus: 'onFocus'
            },
            name: 'name',
            bind: '{application.name}'
        }, {
            fieldLabel: '组名'+ '<em style="color:red" >*</em>',
            labelWidth: 40,
            flex: 1,
            padding: '0 0 0 10',
            name: 'qualified',
            bind: '{application.qualified}'
        }, {
            xtype: 'fileuploadfield', // Same as filefield above
            buttonOnly: true,
            hideLabel: true,
            flex: 0.9,
            buttonText: '选择图标',
        }]
    }, {
        items: [{
            xtype: 'textarea',
            fieldLabel: '备注',
            flex: 1,
            labelWidth: 67,
            name: 'description',
            bind: '{application.description}'
        }]

    }]
});