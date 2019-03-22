/**
 * Created by chenwei on 2017/8/14.
 */
Ext.define('AP.view.application.ApplicationShow', {
    extend: 'Ext.form.Panel',
    xtype: 'application-show',

    // controller:'appliviewform',

    bodyPadding: '5 5 0',
    defaults: {
        layout: 'hbox',
        anchor: '100%',
        xtype: 'container',
        defaultType: 'displayfield',
        padding: '0 10 10 0'
    },
    items: [{
        items: [{
            name: 'name',
            fieldLabel: '应用标识名',
            anchor: '-5',
            flex: 1,
            bind: '{application.name}'
        }, {
            name: 'qname',
            fieldLabel: '应用唯一码',
            anchor: '-5',
            flex: 1,
            bind: '{application.qname}'
        }]
    }, {
        items: [{
            name: 'title',
            fieldLabel: '应用名称',
            anchor: '-5',
            flex: 1,
            bind: '{application.title}'

        }, {
            // name: 'status',
            fieldLabel: '状态',
            anchor: '-5',
            flex: 1,
            value: '运行中'
            // bind: '{application.status}'
        }]
    }, {
        items: [{
            name: 'description',
            fieldLabel: '应用说明',
            anchor: '-5',
            flex: 2,
            bind: '{application.description}'
        }]
    }, {
        items: [{
            flex: 2,
            xtype: 'application-grid',
            border: true,
            margin: 0
        }]
    }]
});