Ext.define('DA.view.dataservice.entryset.EntrySetAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'entryset-add',


    controller: 'entryset',
    height: 350,
    layout: 'vbox',
    anchor: '100%',
    items: [{
        layout: 'hbox',
        // flex: 1,
        padding: 20,
        items: [{
            xtype: 'textfield',
            name: 'dir_name',
            width: 560,
            fieldLabel: '名称'
        }]
    }, {
        items: [{
            padding: 20,
            layout: 'hbox',
            flex: 1,
            items: [{
                flex: 1,
                xtype: 'textfield',
                padding: '0 10 0 0',
                name: 'dir_num',
                fieldLabel: '元数据标识'
            }, {
                xtype: 'textfield',

                name: 'ver_field',
                flex: 1,
                fieldLabel: '版本'
            }]
        }]
    }, {
        items: [{
            padding: 20,
            layout: 'hbox',
            flex: 1,
            items: [{
                xtype: 'datefield',
                padding: '0 10 0 0',
                name: 'update',
                flex: 1,
                fieldLabel: '更新时限'
            }, {
                flex: 1,
                xtype: 'datefield',
                name: 'updatelimit',
                fieldLabel: '更新时限'
            }]
        }]
    }, {
        items: [{
            padding: 20,
            layout: 'hbox',
            flex: 1,
            items: [{
                xtype: 'textfield',
                padding: '0 10 0 0',
                name: 'updaterate',
                flex: 1,
                fieldLabel: '更新频率'
            }, {
                flex: 1,
                xtype: 'textfield',
                name: 'meta_item',
                fieldLabel: '更新数量'
            }]

        }]

    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }]
});
