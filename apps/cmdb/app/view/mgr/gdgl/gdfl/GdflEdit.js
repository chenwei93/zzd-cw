Ext.define('Cmdb.view.mgr.gdgl.gdfl.GdflEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'gdfl-edit',


    layout: 'column',
    tbar: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],
    defaults: {
        xtype: 'textfield',
        columnWidth: 0.5,
        margin: 10,
    },
    items: [{
        fieldLabel: '标题',
        name: 'text',
        bind: '{show.text}'
    }, {
        fieldLabel: '编码',
        name: 'code',
        bind: '{show.code}'
    }]
});