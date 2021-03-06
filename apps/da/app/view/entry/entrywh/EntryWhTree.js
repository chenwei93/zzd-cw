Ext.define('DA.view.entry.entrywh.EntryWhTree', {
    extend: 'Ext.tab.Panel',
    xtype: 'entrywh-tree',


    requires: [
        'DA.view.entry.entrywh.EntryWhCatalogGB',
        'DA.view.entry.entrywh.EntryWhCatalogSS',
        'DA.view.entry.entrywh.EntryWhCatalogHY'
    ],
    // ui: 'navigation',
    tabPosition: 'bottom',
    // tabRotation: 0,
    controller: 'entrywh',
    tbar: [{
        text: '所有分类',
        ui: 'default',
        iconCls: 'x-fa fa-th',
        handler: 'onAll'
    }],
    items: [{
        title: '主题分类',
        xtype: 'entrywh-cataloggb'
    }, {
        title: '应用分类',
        xtype: 'entrywh-catalogss'
    }, {
        title: '行业分类',
        xtype: 'entrywh-cataloghy'
    }]
});
