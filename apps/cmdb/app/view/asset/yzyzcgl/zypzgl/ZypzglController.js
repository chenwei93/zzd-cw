Ext.define('Cmdb.view.asset.yzyzcgl.zypzgl.ZypzglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zypzgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});