Ext.define('DA.view.entry.services.ServicesBase', {
    extend: 'Ext.form.Panel',
    xtype: 'services-base',


    controller: 'services',

    layout: 'column',
    defaults: {
        xtype: 'textfield',
        margin: 5,
        columnWidth: 0.5
    },
    items: [{
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        store: {
            data: [
                {name: '查询服务', value: 'ENTITY'},
                {name: '校核服务', value: 'ENTITY!'},
                {name: '更新服务', value: 'EXT_UPDATE'},
                {name: '附件查看服务', value: 'EXT_ATTACHMENT'},
            ]
        },
        fieldLabel: '接口类型',
        name: 'qualified',
        listeners: {
            change: 'onComboChange'
        },
        value: 'ENTITY',
        bind: '{qualified}',
    }, {
        fieldLabel: '版本',
        name: 'version',
        bind: '{version}',
    }, {
        fieldLabel: '显示名',
        name: 'title',
        listeners: {
            blur: 'onBlur'
        },
        bind: '{title}'
    }, {
        fieldLabel: '标示名',
        name: 'name',
        reference: 'bsName',
        bind: '{name}'
    }, {
        fieldLabel: '请求方式',
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        store: {
            data: [
                {name: 'GET', value: 'GET'},
                {name: 'POST', value: 'POST'}
            ]
        },
        name: 'requestType',
        value: 'GET',
        bind: '{requestType}',
    }, {
        fieldLabel: '接口方式',
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        store: {
            data: [
                {name: 'Webserice', value: 'Webserice'},
                {name: 'REST', value: 'REST'},
                {name: 'RPC', value: 'RPC'},
            ]
        },
        name: 'jktype',
        value: 'REST',
        bind: '{jktype}',

    }, {
        fieldLabel: '缓存时间',
        columnWidth: 0.45,
        name: 'CacheExpire',
        value: '300',
        bind: '{CacheExpire}',
    }, {
        xtype: 'displayfield',
        value: '秒',
        columnWidth: 0.05
    }, {
        fieldLabel: '限定次数',
        columnWidth: 0.45,
        name: 'LimitPerHour',
        bind: '{LimitPerHour}'
    }, {
        xtype: 'displayfield',
        value: '/小时',
        columnWidth: 0.05
    }]
});
