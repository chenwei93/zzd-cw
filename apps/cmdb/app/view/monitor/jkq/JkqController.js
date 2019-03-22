Ext.define('Cmdb.view.monitor.jkq.JkqController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.jkq',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});