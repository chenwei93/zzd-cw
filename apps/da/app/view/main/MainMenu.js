/**
 * This view is an example list of people.
 */
Ext.define('DA.view.main.MainMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-menu',

    requires: [],

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
        left: '0',
        expanderFirst: false,
        expanderOnly: false,
        style: {
            "font-weight": 'bold',
            // 'margin-left': '-11px'
        },
        listeners: {
            itemclick: 'onNavigationItemClick',
            selectionchange: 'onNavigationTreeSelectionChange'
        }
    }
});
