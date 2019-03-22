Ext.define('Cmdb.view.mgr.jkgl.JkglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.jkgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});