/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolShowController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.resourcepool-show',

    initViewModel: function (vm) {
        this.loadEntity();
    }

});
