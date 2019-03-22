/**
 * This view is an example list of people.
 */
Ext.define('DA.view.main.MainLoader', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-loader',

    requires: [],
    layout:'border',


    //bodyCls: 'main-wrap-bg',
    // bodyPadding: 20,

    // tbar: [{
    //     xtype: 'breadcrumb',
    //     reference: 'breadcrumb',
    //     showIcons: false,
    //     listeners: {
    //         selectionchange: 'onNavigationTreeSelectionChange'
    //     }
    // }],

    items: {
        region:'center',
        layout: 'card',
        reference: 'maincard',
        // flex: 1,
        userCls: 'main-container',
        navigationBar: false
    },
});
