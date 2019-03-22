Ext.define('Cmdb.view.portal.grxx.GrxxShow', {
    extend: 'Ext.form.Panel',
    xtype: 'grxx-show',


    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        margin: '10 10 10 10'
    },
    items: [{
        xtype: 'displayfield',
        name: 'name',
        fieldLabel: '人员名称',
        bind: '{grxx.name}'
    }, {
        xtype: 'displayfield',
        name: 'code',
        fieldLabel: '人员编码',
        bind: '{grxx.code}'
    }, {
        xtype: 'displayfield',
        name: 'sex',
        fieldLabel: '性别',
        bind: '{grxx.sex}'
    }, {
        xtype: 'displayfield',
        name: 'date',
        fieldLabel: '出生日期',
        bind: '{grxx.date}'
    }, {
        xtype: 'displayfield',
        name: 'telephone',
        fieldLabel: '联系电话',
        bind: '{grxx.telephone}'
    }, {
        xtype: 'displayfield',
        name: 'email',
        fieldLabel: '电子邮箱',
        bind: '{grxx.email}'
    }, {
        xtype: 'displayfield',
        name: 'zjtype',
        fieldLabel: '证件类型',
        renderer: function (data) {
            var arr = {
                edsfz: '二代身份证',
                jsz: '驾驶证',
                jmhkb: '居民户口本',
                gatxz: '港澳通行证',
                hz: '护照'
            };
            return arr[data];
        },
        bind: '{grxx.zjtype}'
    }, {
        xtype: 'displayfield',
        name: 'idcard',
        fieldLabel: '证件号码',
        bind: '{grxx.idcard}'
    }]
});