Ext.define('Cmdb.view.asset.zcywgl.ZcywglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zcywgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});