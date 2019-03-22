Ext.define('ETL.view.rnode.RNodeAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'rnode-add',

    layout: 'column',
    defaults: {
        xtype: 'textfield',
        margin: 5,
        columnWidth: 0.5,
    },
    viewModel: true,
    config: {
        entityId: null
    },
    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSaveAdd'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancelAdd'
    }],
    items: [{
        fieldLabel: '名称',
        columnWidth: 1,
        name: 'title',
        bind: '{title}'
    }, {
        fieldLabel: 'IP地址',
        name: 'address',
        bind: '{address}',
    }, {
        fieldLabel: '标识名',
        name: 'name',
        bind: '{name}',
    }, {
        fieldLabel: '开放端口',
        name: 'port',
        bind: '{port}',
    }],
    listeners: {
        render: 'OnRNodeRender'
    }
});
