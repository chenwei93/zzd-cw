Ext.define('Cmdb.view.asset.zckgl.gxgl.GxglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gxgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});