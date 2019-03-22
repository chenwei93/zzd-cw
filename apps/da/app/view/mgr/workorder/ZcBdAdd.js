Ext.define('DA.view.mgr.workorder.ZcBdAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'zcbd-add',


    tbar: [{
        text: '保存',
        handler: 'onZcBdAddSure'
    }, {
        text: '取消',
        handler: 'onZcBdEditCancel'
    }, '-', {
        text: '配置',
        handler: 'onZcBdEditInherit'
    }],
    layout: 'column',
    scrollable: true,
    defaults: {
        margin: '10 10 10 10',
    },
    items: [
        {
            xtype: 'form',
            columnWidth: 1,
            bodyPadding: 10,
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                name: 'bd_title',
                fieldLabel: '标题',
                bind: '{show.bd_title}',
                flex: 1
            }]
        }, {
            xtype: 'form',
            columnWidth: 0.5,
            bodyPadding: 10,
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                name: 'bd_code',
                fieldLabel: '编码',
                bind: '{show.bd_code}',
                flex: 1
            }]
        }, {
            xtype: 'form',
            columnWidth: 0.5,
            bodyPadding: 10,
            layout: 'hbox',
            items: [{
                xtype: 'combo',
                name: 'bd_type',
                fieldLabel: '工作类型',
                bind: '{show.bd_type}',
                displayField: 'text',
                valueField: 'code',
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax2',
                        url: 'app/store/data/mgr/workorder/gdfl.json'
                    }
                },
                flex: 1
            }]
        }, {
            xtype: 'form',
            columnWidth: 1,
            bodyPadding: 10,
            layout: 'hbox',
            items: [{
                xtype: 'textarea',
                name: 'bd_des',
                fieldLabel: '描述',
                bind: '{show.bd_des}',
                flex: 1
            }]
        }, {
            xtype: 'form',
            columnWidth: 1,
            bodyPadding: 10,
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                reference: 'items',
                name: 'items',
                flex: 1,
                hidden: true
            }]
        }],
    listeners: {
        render: 'onZcBdAddRender'
    }
});
