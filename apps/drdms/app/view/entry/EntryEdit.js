Ext.define('DRDMS.view.entry.EntryEdit', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype: 'entry-edit',


    cls: 'wizards',

    height: 603,
    controller: 'entry-edit',
    requires: ['DRDMS.view.entry.EntryEditModel'],
    defaultFocus: 'entryedit-panelwizard',
    items: [{
        xtype: 'entryedit-panelwizard',
        colorScheme: 'blue',
        region: 'center'
        // }, {
        //     xtype: 'container',
        //     height: 30,
        //     region: 'south',
        //     layout: 'column',
        //     style: 'background-color: #e3e3e3;',
        //     fieldDefaults: {
        //         labelWidth: 60
        //     },
        // items: [{
        //     xtype: 'displayfield',
        //     name: 'createTime',
        //     format: 'Y-m-d H:i:s',
        //     fieldLabel: '生成时间',
        //     value: '2017-09-8',
        //     columnWidth: 0.25
        // }, {
        //     xtype: 'displayfield',
        //     name: 'postTime',
        //     fieldLabel: '上报时间',
        //     value: '2017-09-8',
        //
        //     columnWidth: 0.25
        // }, {
        //     xtype: 'displayfield',
        //     name: 'updateTime',
        //     fieldLabel: '更新时间',
        //     value: '2017-09-8',
        //
        //     columnWidth: 0.25
        // }, {
        //     xtype: 'displayfield',
        //     value: '2017-09-8',
        //     name: 'version',
        //     fieldLabel: '版本',
        //     columnWidth: 0.25
        // }]
    }],

    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSubmit'
    }, '-', {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: function () {
            var me = this;
            var win = me.up('window');
            if (win != undefined) {
                win.close();
            } else {
                Ext.Msg.alert({
                    title: '提示',
                    msg: '确定不保存当前内容？',
                    buttonText: {yes: '确定', no: '取消'},
                    fn: function (btn, text) {
                        if (btn == 'yes') {
                            location.reload();
                        }
                    }
                })
            }
        }
    }]
});
