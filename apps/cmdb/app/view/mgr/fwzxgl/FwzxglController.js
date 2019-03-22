Ext.define('Cmdb.view.mgr.fwzxgl.FwzxglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.fwzxgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});