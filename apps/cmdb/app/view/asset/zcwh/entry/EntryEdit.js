Ext.define('Cmdb.view.asset.zcwh.entry.EntryEdit', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype: 'entry-edit',


    cls: 'wizards',

    height: 523,
    controller: 'entry-edit',
    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryEditModel',
        'Cmdb.view.asset.zcwh.entry.EntryEditController',
        'Cmdb.view.asset.zcwh.entry.EntryEditFormBase',
        'Cmdb.view.asset.zcwh.entry.EntryEditFormExt',
        'Cmdb.view.asset.zcwh.entry.EntryEditGridDataset',
    ],
    defaultFocus: 'entryedit-panelwizard',
    items: [{
        xtype: 'entryedit-panelwizard',
        colorScheme: 'blue',
        region: 'center'
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
