/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DRDMS.view.main.MainWrap', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-wrap',
    layout: 'border',

    requires: [
        'Ext.plugin.Viewport',
        'DRDMS.view.main.Main',
        'DRDMS.view.main.MainHeader',
        'DRDMS.view.main.MainController',
        'DRDMS.view.main.MainModel',


        'DRDMS.view.home.HomeCenter',
        'DRDMS.view.home.HomeNode',
        'DRDMS.view.pages.BlankPage',
        'DRDMS.view.pages.Error404',
        'DRDMS.view.pages.Error500',
        'DRDMS.view.entry.EntryPendingCenter',
        'DRDMS.view.entry.EntryPendingNode',
        'DRDMS.view.entry.EntryPublishedCenter',
        'DRDMS.view.entry.EntryPublishedNode',
        'DRDMS.view.entrydata.EntryData',
        'DRDMS.view.entrydata.EntryDataList',
        'DRDMS.view.entry.EntryWH',
        'DRDMS.view.entry.EntrySearch',
        'DRDMS.view.resource.Resource',
        'DRDMS.view.principal.User',
        'DRDMS.view.stat.Stat',
        'DRDMS.view.region.Region',
        'DRDMS.view.principal.Principal',
        'DRDMS.view.catalog.CatalogZT',
        'DRDMS.view.catalog.CatalogSS',
        'DRDMS.view.catalog.CatalogHY',
        'DRDMS.view.dictionary.Dictionary',
        'DRDMS.view.entryset.EntryMetadata',
        'DRDMS.view.entryset.EntrySet',
        'DRDMS.view.keyword.Keyword',
        'DRDMS.view.entryset.ResourceFormat',
        'DRDMS.view.entrywh.EntryWhTab',
        'DRDMS.view.entry.EntryFL',
        'DRDMS.view.entry.EntryChangeLogCenter',
        'DRDMS.view.entry.EntryChangeLog',
        'DRDMS.view.realmnode.RealmNode'
    ],

    controller: 'main',
    viewModel: 'main',

    bodyCls: 'main-wrap-bg',
    items: [{
        region: 'center',
        xtype: 'app-main',
        flex: 1,
        reference: 'mainCard',
        userCls: 'main-container',
        navigationBar: false
    }, {
        xtype: 'app-header',
        region: 'north',
        viewModel: true,
        height: 55
    }, {
        region: 'west',
        width: 250,
        split: false,
        bodyCls: 'menu-wrap',
        reference: 'treelistContainer',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        border: false,
        scrollable: 'y',
        items: {
            xtype: 'treelist',
            reference: 'navigationTree',
            itemId: 'navigationTree',
            ui: 'navigation',
            store: 'menuTreeStore-center',
            expanderFirst: false,
            expanderOnly: false,
            style: {
                "font-weight": 'bold'
            },
            listeners: {
                itemclick: 'onNavigationItemClick',
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }
    }],
    listeners: {
        render: function () {
            var me = this;
            Ext.Ajax.request({
                url: '/base/api/test',
                success: function (rs) {
                    var jude = JSON.parse(rs.responseText).isCenter;
                    if (jude == false) {
                        var store = 'menuTreeStore-node';
                        me.lookup('navigationTree').setStore(store);
                    }
                }
            });
        }
    }
});
