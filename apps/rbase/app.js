/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'RBase',

    extend: 'RBase.Application',

    requires: [
        'Ext.chart.*', // 必须增加，否则build production时会错误
        'Ext.ux.*',

        'Ext.form.FieldSet',
        'Ext.form.field.Display',
        'Ext.form.field.File',
        'Ext.window.Toast',
        'RBase.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'RBase.view.main.MainWrap'

    //-------------------------------------------------------------------------
    // Most customizations should be made to RBase.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
