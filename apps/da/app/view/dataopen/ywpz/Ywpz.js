Ext.define('DA.view.dataservice.ywpz.Ywpz', {
    extend: 'Ext.panel.Panel',
    xtype: 'ywpz',

    requires: ['DA.view.dataservice.ywpz.YwpzController'],
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
