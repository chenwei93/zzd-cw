Ext.define('DRDMS.view.realmnode.RealmNodeEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'realmnode-edit',


    controller: 'realmnode',
    defaults: {
        margin: 5
    },
    layout: 'hbox',
    items: [{
        flex: 1,
        items: [{
            width: '100%',
            xtype: 'textfield',
            fieldLabel: '节点标题',
            name: 'title',
            bind: '{realmnode.title}'
        }, {
            width: '100%',
            xtype: 'treepicker',
            displayField: 'text',
            fieldLabel: '节点单位',
            name: 'nodeOrganizationName',
            store: Ext.create('Ext.data.TreeStore', {
                autoLoad: true,
                model: 'Principal',
                rootVisible: false,
                proxy: {
                    type: 'ajax',
                    url: '/base/api/tree/departments',
                    reader: {
                        rootProperty: 'children'
                    }
                }
            }),
            listeners: {
                render: function () {
                    this.getPicker().getStore().setRootVisible(false);
                    this.getPicker().expandAll();
                },
                // select: function (picker, record, eOpts) {
                //     console.log(record);
                //     var idRel = record.raw.idRel;
                //     this.setValue(idRel);
                // }
            },
            bind: '{realmnode.nodeOrganizationName}'


        }]
    }, {
        flex: 1,
        items: [{
            xtype: 'textfield',
            width: '100%',
            fieldLabel: '节点编码',
            name: 'code',
            bind: '{realmnode.code}'

        }]
    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onClose'
    }]
});