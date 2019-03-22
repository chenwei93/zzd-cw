Ext.define('Cmdb.view.asset.bmzcqd.ZcSjyEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'zcsjy-edit',


    tbar: [{
        text: '确定',
        handler: 'onZcSjyEditSure'
    }, {
        text: '取消',
        handler: 'onZcSjyEditCancel'
    }],
    layout: 'hbox',
    defaults: {

        flex: 1,
        margin: '10 10 10 10'
    },
    items: [{
        xtype: 'textfield',
        name: 'text',
        fieldLabel: '字段名称',
        bind: '{zcsjy.text}'
    }, {
        xtype: 'textfield',
        name: 'code',
        fieldLabel: '字段编码',
        bind: '{zcsjy.code}'
    }]
});