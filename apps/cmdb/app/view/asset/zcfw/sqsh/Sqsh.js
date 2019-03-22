Ext.define('Cmdb.view.asset.zcfw.sqsh.Sqsh', {
    extend: 'Ext.panel.Panel',
    xtype: 'sqsh',


    requires: [
        'Cmdb.view.asset.zcfw.sqsh.SqshTab',
        'Cmdb.view.asset.zcfw.sqsh.SqshModel',
        'Cmdb.view.asset.zcfw.sqsh.Simulated',
        'Cmdb.view.asset.zcfw.sqsh.SqshController'
    ],

    viewModel: 'sqsh',
    controller: 'sqsh',
    scrollable: true,
    bodyPadding: 10,
    tbar: [{
        ui: 'default',
        reference: 'pdbtn',
        iconCls: 'x-fa fa-arrow-right',
        text: '下一步',
        handler: 'onPD'
    }, {
        ui: 'default',
        reference: 'thbtn',
        iconCls: 'x-fa fa-undo',
        text: '退回',
        tooltip: '退回',
        needExra: 'th',
        handler: 'onTH'

    }, '-', {
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '开始处理',
        handler: 'onBegan'
    }],
    layout: 'hbox',
    items: [{
        flex: 2,
        items: [{
            xtype: 'sqsh-tab',
            height: 350
        }, {
            margin: '20 10',
            xtype: 'button',
            reference: 'editForm',
            bind: '{btnText}',
            handler: 'onClickA'
        }, {
            margin: '20 10',
            xtype: 'button',
            text: '上传附件',
            // handler: 'onClickFj'

        }, {
            layout: 'fit',
            xtype: 'form',
            trackResetOnLoad: true,
            items: [{
                name: 'shyj',
                reference: 'shyj',
                xtype: 'textarea',
                emptyText: '审批意见',
                fieldStyle: 'font-size: 16px; font-family: "Courier New";'
            }]
        }]
    }, {
        flex: 1,
        height: 500,
        scrollable: true,
        xtype: 'profiletimeline',
    }],
    listeners: {
        render: 'onSqshRender'
    }
});
