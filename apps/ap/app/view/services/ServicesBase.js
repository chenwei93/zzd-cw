Ext.define('AP.view.services.ServicesBase', {
    extend: 'Ext.form.Panel',
    xtype: 'services-base',


    defaults: {
        margin: 10,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    controller: 'services',
    items: [{
        items: [{
            fieldLabel: '标题'+ '<em style="color:red" >*</em>' ,
            flex: 1,
            labelWidth: 65,
            reference: 'inputTitle',
            allowBlank: false,
            name: 'title',
            bind: '{service.title}'
        }, {
            margin: '0 0 0 10',
            xtype: 'displayfield',
            flex: 1
        }, {
            hidden: true,
            name: 'type',
            value: 'Custom'
        }]
    }, {
        items: [{
            fieldLabel: '服务名'+ '<em style="color:red" >*</em>',
            labelWidth: 65,
            flex: 1,
            allowBlank: false,
            name: 'name',
            listeners: {
                focus: 'onFocus'
            },
            bind: '{service.name}'
        }, {
            fieldLabel: '组名'+ '<em style="color:red" >*</em>',
            allowBlank: false,
            labelWidth: 65,
            margin: '0 0 0 10',
            flex: 1,
            name: 'qualified',
            bind: '{service.qualified}'
        }]
    }, {
        items: [{
            xtype: 'textarea',
            fieldLabel: '描述',
            labelWidth: 65,
            flex: 1,
            name: 'description',
            bind: '{service.description}'
        }]

    }]
});