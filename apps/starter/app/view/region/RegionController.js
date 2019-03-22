Ext.define('Starter.view.region.RegionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.region',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }

    // TODO - Add control logic or remove is not needed
});
