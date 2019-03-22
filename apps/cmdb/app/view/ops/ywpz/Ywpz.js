Ext.define('Cmdb.view.ops.ywpz.Ywpz', {
    extend: 'Ext.panel.Panel',
    xtype: 'ywpz',

    requires: ['Cmdb.view.ops.ywpz.YwpzController'],
    controller: 'ywpz',
    scrollable: true,
    layout: 'column',
    defaults: {
        margin: 10,
    },
    items: [],
    listeners: {
        render: 'onRender'
    },
});
