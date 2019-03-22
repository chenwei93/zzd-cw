Ext.define('Cmdb.view.monitor.bb.BbController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.bb',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});