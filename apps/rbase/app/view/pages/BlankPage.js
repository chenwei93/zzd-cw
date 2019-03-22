Ext.define('RBase.view.pages.BlankPage', {
    extend: 'Ext.container.Container',
    xtype: 'pageblank',

    requires: [
        'Ext.layout.container.VBox'
    ],

    layout:{
        type: 'vbox',
        pack:'center',
        align:'center'
    },

    items: [
        {
            cls: 'blank-page-container',
            html: '<div class=\'fa-outer-class\'><span class=\'x-fa fa-clock-o\'></span></div>' +
            '<h1>Coming Soon!</h1><span class=\'blank-page-text\'>Stay tuned for updates</span>'
        }
    ]
});
