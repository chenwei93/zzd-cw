/**
 * This view is an example list of people.
 */
Ext.define('Cmdb.view.main.MainMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-menu',

    requires: [


    ],

    width: 250,
    split: false,
    bodyCls: 'menu-wrap',
    reference: 'menuContainer',
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
});
