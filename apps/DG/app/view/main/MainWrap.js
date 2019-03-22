/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DG.view.main.MainWrap', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-wrap',
    layout: 'border',

    bodyCls: 'main-wrap-bg',

    requires: [
        'Ext.plugin.Viewport',
        'DG.base.ViewController',
        'DG.ux.ProjectAjax',
        'DG.ux.ProjectResultReader',
        'DG.ux.ProjectResultSetReader',
        'DG.model.Base',

        'DG.view.main.Main',
        'DG.view.main.MainHeader',
        'DG.view.main.MainController',
        'DG.view.main.MainModel',

        'DG.view.bloodshow.BloodShow',
        'DG.view.bloodconf.BloodConf',
        'DG.view.qreport.QReport',
        'DG.view.roleconf.RoleConf',
        'DG.view.roleconf.RoleConfForm',
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
