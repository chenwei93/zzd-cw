Ext.define('DA.view.entry.entrywh.EntryWhTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'entrywh-tab',
    requires: [
        'DA.view.entry.entrywh.EntryWhTree',
        'DA.view.entry.entrywh.EntryWhGrid'

    ],
    width: '100%',
    height: '100%',

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