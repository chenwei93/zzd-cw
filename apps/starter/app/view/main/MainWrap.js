/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.main.MainWrap', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-wrap',
    layout: 'border',

    requires: [
        'Ext.plugin.Viewport',
        'Starter.view.main.Main',
        'Starter.view.main.MainHeader',
        'Starter.view.main.MainController',
        'Starter.view.main.MainModel',


        'Starter.view.analysis.AnalysisColumn',
        'Starter.view.analysis.AnalysisLine',
        'Starter.view.analysis.AnalysisPie',
        'Starter.view.biz.Biz',
        'Starter.view.catalog.Catalog',
        'Starter.view.dictionary.Dictionary',
        'Starter.view.entrydata.EntryData',
        'Starter.view.entrydata.EntryDataEdit',
        'Starter.view.entrydata.EntryDataProjection',
        'Starter.view.home.Home',
        'Starter.view.pages.BlankPage',
        'Starter.view.pages.Error404',
        'Starter.view.pages.Error500',
        'Starter.view.principal.Principal',
        'Starter.view.region.Region',
        'Starter.view.task.Task',
        'Starter.view.unitprofile.UnitProfile',
        'Starter.view.user.User',
        'Starter.view.utils.Pwd',
        'Starter.view.report.Report',

        'Starter.view.entryfl.EntryFL',
        'Starter.view.news.News',
        'Starter.view.news.NewsList'
    ],

    controller: 'main',
    viewModel: 'main',

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

            store: 'menuTreeStore',

            expanderFirst: false,
            expanderOnly: false,
            listeners: {
                itemclick: 'onNavigationItemClick',
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }
    }]
});
