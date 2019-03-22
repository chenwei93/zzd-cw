Ext.define('Cmdb.view.asset.bmzcqd.ZcBdShow', {
    extend: 'Ext.form.Panel',
    xtype: 'zcbd-show',


    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        margin: '10 10 10 10'
    },
    items: [{
        xtype: 'displayfield',
        name: 'name',
        fieldLabel: '字段名称',
        bind: '{zcbd.name}'
    }, {
        xtype: 'displayfield',
        name: 'code',
        fieldLabel: '字段编码',
        bind: '{zcbd.code}'
    }, {
        xtype: 'displayfield',
        name: 'type',
        fieldLabel: '字段类型',
        bind: '{zcbd.type}'
    }, {
        xtype: 'displayfield',
        name: 'minsize',
        fieldLabel: '最小文本长度',
        bind: '{zcbd.minsize}'
    }, {
        xtype: 'displayfield',
        name: 'maxsize',
        fieldLabel: '最大文本长度',
        bind: '{zcbd.maxsize}'
    }, {
        xtype: 'displayfield',
        name: 'mustinput',
        fieldLabel: '是否必填',
        bind: '{zcbd.mustinput}'
    }, {
        xtype: 'displayfield',
        name: 'mrz',
        fieldLabel: '默认值',
        bind: '{zcbd.mrz}'
    }]
});