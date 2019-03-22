/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.main.MainWrap', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-wrap',
    layout: 'border',

    requires: [
        'Ext.plugin.Viewport',
        'RBase.view.main.Main',
        'RBase.view.main.MainHeader',
        'RBase.view.main.MainController',
        'RBase.view.main.MainModel',

        'RBase.view.home.Home',
        'RBase.view.pages.BlankPage',
        'RBase.view.pages.Error404',
        'RBase.view.pages.Error500',
        'RBase.view.profile.Profile',
        'RBase.view.resource.Resource',
        'RBase.view.resource.ResourceSearch',
        'RBase.view.resourcenode.ResourceNode',
        'RBase.view.resourcepool.ResourcePool',
        'RBase.view.profile.Profile',
        'RBase.view.logs.Logs'
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
