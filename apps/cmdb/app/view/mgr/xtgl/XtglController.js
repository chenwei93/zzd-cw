Ext.define('Cmdb.view.mgr.xtgl.XtglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.xtgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});