Ext.define('ETL.view.rnode.RNodeShow', {
    extend: 'Ext.form.Panel',
    xtype: 'rnode-show',


    viewModel: true,
    config: {
        entityId: null
    },
    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        xtype: 'displayfield',
        margin: 5,
    },
    items: [{
        fieldLabel: '名称',
        columnWidth: 1,
        bind: '{title}',
        text: 'title'
    }, {
        fieldLabel: 'IP地址',
        name: 'address',
        bind: '{address}'
    }, {
        fieldLabel: '开放端口',
        name: 'port',
        bind: '{port}',
    }, {
        fieldLabel: '标示名',
        name: 'name',
        bind: '{name}'
    }],
    listeners: {
        render: 'onShowRender'
    }
});
