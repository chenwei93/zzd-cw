/**
 * Created by chenwei on 2017/8/14.
 */
Ext.define('AP.view.service.ServiceShow', {
    extend: 'Ext.form.Panel',
    xtype: 'service-show',
    //controller:'',

    width: 600,
    margin: 20,
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%'
    },
    items: [{
        padding: 10,

        items: [{
            fieldLabel: '服务名称',
            name: 'title',
            flex: 1,
            bind: '{service.title}'
        }]
    }, {
        padding: 10,
        items: [{
            fieldLabel: '服务唯一码',
            name: 'qname',
            flex: 1,
            bind: '{service.qname}'
        }, {
            fieldLabel: '所属目录',
            name: 'e_title',
            flex: 1,
            bind: '{service.e_title}'
        }]

    }, {
        padding: 10,
        items: [{
            fieldLabel: '状态',
            flex: 1,
            value: '正常'
        }, {
            fieldLabel: '服务配置',
            name: 'configuration',
            flex: 1,
            bind: '{service.configuration}'
        }]
    }, {
        padding: 10,

        items: [{
            fieldLabel: '服务说明',
            name: 'description',
            flex: 2,
            bind: '{service.description}'
        }]
    }]


});