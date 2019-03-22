Ext.define('Cmdb.view.asset.zckgl.zcbdxh.ZcbdxhController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zcbdxh',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});