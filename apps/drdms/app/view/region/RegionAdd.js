Ext.define('DRDMS.view.region.RegionAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'region-add',

    controller: 'region',
    bodyPadding: 10,
    layout: 'hbox',
    items: [{
        xtype: 'textfield',
        flex: 1,
        margin: '0 10 0 0',
        fieldLabel: '地区',
        name: 'text'
    }, {
        flex: 1,
        xtype: 'textfield',
        margin: '0 10 0 0',
        fieldLabel: '地区编码',
        name: 'code'
    }, {
        xtype: 'textfield',
        flex: 1,
        fieldLabel: '行政级别',
        name: 'rank'
    }],
    buttons: [{
        text: '保存',
        handler: 'onSaveAdd'
    }, {
        text: '取消',
        handler: 'onCancelAdd'
    }]

});