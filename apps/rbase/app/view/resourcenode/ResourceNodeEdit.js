Ext.define('RBase.view.resourcenode.ResourceNodeEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcenode-edit',


    controller: 'resourcenode',
    width: 600,
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        margin: 10,
        anchor: '100%'
    },
    items: [{
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '名称',
            flex: 1,
            bind: '{resourcenode.title}',
            text: 'title'
        }]
    }, {
        padding: '0 10 10 0',
        items: [{
            fieldLabel: 'IP地址',
            flex: 1,
            name: 'ip',
            bind: '{resourcenode.ip}'
        }, {
            fieldLabel: '开放端口',
            flex: 1,
            name: 'ports',
            bind: '{resourcenode.ports}',
            renderer: function (data) {
                if (data != null) {
                    return Object.keys(data);
                } else {
                    return null
                }

            }
        }]
    }, {
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '标示名',
            flex: 1,
            text: 'name',
            bind: '{resourcenode.name}'
        }, {
            fieldLabel: '本地',
            flex: 1,
            bind: '{resourcenode.local}',
            text: 'local',
            renderer: function (value) {
                if (value == 'true') {
                    return '是'
                } else {
                    return '否'
                }
            }

        }]
    }, {
        padding: '0 10 10 0',
        xtype: 'textarea',
        fieldLabel: '备注',
        text: 'memo',
        bind: '{resourcenode.memo}',
        flex: 2
    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }]
});