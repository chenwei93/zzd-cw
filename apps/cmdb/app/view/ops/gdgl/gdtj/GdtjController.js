Ext.define('Cmdb.view.ops.gdgl.gdtj.GdtjController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gdtj',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});