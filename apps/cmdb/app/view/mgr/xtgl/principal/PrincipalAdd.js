Ext.define('Cmdb.view.mgr.xtgl.principal.PrincipalAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'principal-add',

    controller: 'principal',
    defaults: {
        margin: 5
    },
    layout: 'hbox',
    items: [{
        flex: 1,
        width: '100%',
        items: [{
            xtype: 'textfield',
            fieldLabel: '部门名称',
            name: 'text'
        }, {
            xtype: 'textfield',
            fieldLabel: '部门编码',
            name: 'code'
        }]
    }, {
        flex: 1,
        items: [{
            xtype: 'treepicker',
            displayField: 'text',
            fieldLabel: '地区',
            store: Ext.create('Ext.data.TreeStore', {
                // autoLoad: true,
                model: 'Region',
                rootVisible: false,
                proxy: {
                    type: 'ajax',
                    url: '/base/api/tree/regions',
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
                select: function (picker, record, eOpts) {
                    var idRel = record.raw.idRel;
                    this.setValue(idRel);
                }
            },
            name: 'region'
        }, {
            xtype: 'textfield',
            fieldLabel: '顺序',
            name: 'orders'
        }]
    }, {
        items: [{
            xtype: 'textfield',
            fieldLabel: 'parent',
            name: 'parent',
            hidden: true,
            bind: '{principal.idRel}'
        }]

    }],
    buttons: [{
        text: '新增',
        handler: 'onCreate'
    }, {
        text: '取消',
        handler: 'onClose'
    }]
});