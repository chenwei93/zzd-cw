Ext.define('Starter.view.report.ReportEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'report-edit',


    defaults: {
        margin: 15,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    controller: 'report',
    items: [{
        items: [{
            fieldLabel: '标题',
            flex:1,
            name: 'title',
            bind: '{report.title}'
        }]
    }, {
        items: [{
            fieldLabel: '生成时间',
            name: 'createTime',
            flex:1,
            bind: '{report.createTime}'
        }, {
            fieldLabel: '更新时间',
            name: 'generateTime',
            flex:1,
            bind: '{report.generateTime}'
        }]

    }]


});