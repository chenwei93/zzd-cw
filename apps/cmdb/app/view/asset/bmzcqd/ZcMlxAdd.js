Ext.define('Cmdb.view.asset.bmzcqd.ZcmlxAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'zcmlx-add',

    tbar: [{
        xtype: 'button',
        text: '继承',
        handler: 'onInherit'
    }, {
        xtype: 'button',
        text: '数据元',
        handler: 'onChooseSx'
    }, '-', {
        text: '保存',
        handler: 'onSure'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],
    bodyPadding: 10,
    scrollable: true,
    items: [{
        xtype: 'panel',
        layout: 'hbox',
        defaults: {
            xtype: 'textfield',
            labelWidth: 60,
            flex: 1,
            margin: 5,
        },
        items: [{
            name: 'text',
            fieldLabel: '名称'
        }, {
            name: 'code',
            fieldLabel: '编码'
        }]

    }, {
        xtype: 'fieldset',
        title: '属性',
        defaults: {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                labelWidth: 45,
                margin: '0 10 10 0'
            }
        },
        reference: 'fieldset',
        items: [{
            items: [{
                xtype: 'textfield',
                name: 'sx_name',
                flex: 1,
                fieldLabel: '名称'
            }, {
                xtype: 'textfield',
                name: 'sx_code',
                flex: 1,
                fieldLabel: '编码'
            }, {
                xtype: 'textfield',
                name: 'sx_dataset',
                flex: 1,
                fieldLabel: '类型'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-plus',
                tooltip: '添加',
                handler: 'onAddSx'
            }]
        }]
    }, {
        xtype: 'panel',
        flex: 1,
        defaults:{
            margin: '20 0 10 0',
        },
        layout: 'column',
        items: [{
            xtype: 'textfield',
            name: 'glgx',
            readOnly: true,
            columnWidth: 1,
            listeners: {
                render: 'onRen'
            },
            fieldLabel: '关联关系'
        }, {
            xtype: 'textfield',
            readOnly: true,
            name: 'ylgx',
            columnWidth: 1,
            listeners: {
                render: 'onRen'
            },
            fieldLabel: '依赖关系'
        }]
    }]

});