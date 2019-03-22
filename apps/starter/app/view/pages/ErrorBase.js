Ext.define('Starter.view.pages.ErrorBase', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.layout.container.VBox',
        'Ext.form.Label'
    ],

    layout: {
        type:'vbox',
        align: 'center',
        pack: 'center'
    },

    cls: 'error-page-container',

    defaults:{
        xtype: 'label'
    }
});