Ext.define('Cmdb.view.asset.zckgl.bzgl.BzglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.bzgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});