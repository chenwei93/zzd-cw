Ext.define('Cmdb.view.monitor.sjt.SjtController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.sjt',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});