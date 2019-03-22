Ext.define('Cmdb.view.portal.grxx.GrxxEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'grxx-edit',


    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        margin: '10 10 10 10'
    },
    tbar:[{
        text: '确定',
        handler: 'onSure'
    },{
        text:'取消',
        handler:'onCancel'
    }],
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: '人员名称',
        bind: '{grxx.name}'
    }, {
        xtype: 'textfield',
        name: 'code',
        fieldLabel: '人员编码',
        bind: '{grxx.code}'
    }, {
        xtype: 'textfield',
        name: 'sex',
        fieldLabel: '性别',
        bind: '{grxx.sex}'
    }, {
        xtype: 'datefield',
        name: 'date',
        fieldLabel: '出生日期',
        bind: '{grxx.date}'
    }, {
        xtype: 'textfield',
        name: 'telephone',
        fieldLabel: '联系电话',
        bind: '{grxx.telephone}'
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: '电子邮箱',
        bind: '{grxx.email}'
    }, {
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择状态',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '二代身份证', value: 'edsfz'},
                {name: '驾驶证', value: 'jsz'},
                {name: '居民户口本', value: 'jmhkb'},
                {name: '港澳通行证', value: 'gatxz'},
                {name: '护照', value: 'hz'}
            ]
        },
        name: 'zjtype',
        fieldLabel: '证件类型',
        bind: '{grxx.zjtype}'
    }, {
        xtype: 'textfield',
        name: 'idcard',
        fieldLabel: '证件号码',
        bind: '{grxx.idcard}'
    }]
});