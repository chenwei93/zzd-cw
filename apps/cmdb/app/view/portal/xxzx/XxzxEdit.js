Ext.define('Cmdb.view.portal.xxzx.XxzxEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'xxzx-edit',


    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        xtype: 'textfield',
        margin: '10 10 10 10'
    },
    tbar: [{
        text: '确定',
        handler: 'onSure'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],
    items: [{
        name: 'title',
        columnWidth: 1,
        fieldLabel: '消息名称'
    }, {
        xtype: 'combo',
        name: 'nextperson',
        fieldLabel: '接收人',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择接收人',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '王石', value: 'wangs'},
                {name: '陈薇', value: 'chenw'},
                {name: '方荣', value: 'fangr'},
                {name: '莫智胜', value: 'mozs'}
            ]
        }
    }, {
        name: 'region',
        fieldLabel: '消息来源'
    }, {
        xtype: 'textarea',
        name: 'des',
        columnWidth: 1,
        fieldLabel: '消息描述'
    }]
});