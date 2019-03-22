Ext.define('DRDMS.view.dictionary.DictionaryTreeAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'dictionary-treeadd',

    frame: false,

    controller: 'dictionary-treeadd',
    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSSave'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCCancel'
    }],
    defaults:
        {
            layout: 'hbox',
            xtype: 'container',
            defaultType: 'textfield',
            anchor: '100%'
        },
    items: [{
        items: [{
            flex: 1,
            margin: 10,
            fieldLabel: '标题',
            name: 'title'
        }, {
            flex: 1,
            margin: 10,
            fieldLabel: '编码',
            name: 'code'
        }]
    }]
});