Ext.define('Cmdb.view.asset.zcwh.ZcwhForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'zcwh-form',


    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSave'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancel'
    }],
    defaults: {
        margin: '20 10',
    },
    items: [{
        layout: 'hbox',
        items: [{
            xtype: 'textfield',
            flex: 1,
            fieldLabel: '名称',
            bind: '{zcwh.title}',
            name: 'title'
        }, {
            xtype: 'textfield',
            flex: 1,
            fieldLabel: '编码',
            bind: '{zcwh.code}',
            name: 'code'
        }]
    }, {
        layout: 'hbox',
        items: [{
            xtype: 'textarea',
            fieldLabel: '描述',
            flex: 1,
            name: 'description',
            bind: '{zcwh.description}'

        }]

    }]

});