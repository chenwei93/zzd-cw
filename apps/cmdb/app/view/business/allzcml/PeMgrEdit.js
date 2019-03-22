Ext.define('Cmdb.view.business.allzcml.PeMgrEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'pemgr-edit',


    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '确定',
        handler: 'onSure'
    }, {
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        text: '取消',
        handler: 'onCancel'
    }],
    layout: 'column',
    defaults: {
        xtype: 'numberfield',
        margin: 10,
        columnWidth: 1
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: '租户',
        name: 'zhname',
        readOnly: true,
        bind: '{show.zhname}'
    }, {
        fieldLabel: 'CPU配额',
        name: 'cpu',
        columnWidth: 0.8
    }, {
        value: '个',
        columnWidth: 0.1,
        xtype: 'displayfield'
    }, {
        fieldLabel: '内存配额',
        columnWidth: 0.8,
        name: 'ncpe'
    }, {
        value: 'Ｇ',
        columnWidth: 0.1,
        xtype: 'displayfield'
    }, {
        fieldLabel: '存储配额',
        columnWidth: 0.8,
        name: 'ccpe'
    }, {
        value: 'T',
        columnWidth: 0.1,
        xtype: 'displayfield'
    }]
});