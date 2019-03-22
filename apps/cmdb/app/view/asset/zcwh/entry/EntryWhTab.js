Ext.define('Cmdb.view.asset.zcwh.entry.EntryWhTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'entrywh-tab',
    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryWhTree',
        'Cmdb.view.asset.zcwh.entry.EntryWhGrid'

    ],
    width: '100%',
    // height: 513,

    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true
    },
    layout: 'border',
    items: [
        {
            title: '选择分类',
            region: 'west',
            floatable: false,
            collapsed: true,
            width: 320,
            xtype: 'entrywh-tree'
        }, {
            collapsible: false,
            region: 'center',
            xtype: 'entrywh-grid'
        }
    ]
});