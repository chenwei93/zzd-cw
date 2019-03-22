Ext.define('Cmdb.view.monitor.zyk.ZykController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zyk',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});