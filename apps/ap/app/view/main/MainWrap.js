/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AP.view.main.MainWrap', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-wrap',
    layout: 'border',

    bodyCls: 'main-wrap-bg',

    requires: [
        'Ext.plugin.Viewport',
        'AP.view.main.Main',
        'AP.view.main.MainHeader',
        'AP.view.main.MainController',
        'AP.view.main.MainModel',

        'AP.view.home.Home',
        'AP.view.pages.BlankPage',
        'AP.view.pages.Error404',
        'AP.view.pages.Error500',
        'AP.view.application.Application',
        'AP.view.authority.Authority',
        'AP.view.service.Service',
        'AP.view.service.Services',
        'AP.view.application.ApplicationAdd',
        'AP.view.profile.Profile',
        'AP.view.service.ServiceWH'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
        region: 'center',
        xtype: 'app-main',
        flex: 1,
        reference: 'mainCard',
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
            style: {
                "font-weight": 'bold'
            },
            listeners: {
                itemclick: 'onNavigationItemClick',
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }
    }]
});
