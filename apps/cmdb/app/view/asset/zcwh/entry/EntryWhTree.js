Ext.define('Cmdb.view.asset.zcwh.entry.EntryWhTree', {
    extend: 'Ext.tab.Panel',
    xtype: 'entrywh-tree',

    plain:true,
    frame:false,
    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryWhCatalogGB',
        'Cmdb.view.asset.zcwh.entry.EntryWhCatalogSS',
        'Cmdb.view.asset.zcwh.entry.EntryWhCatalogHY'
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