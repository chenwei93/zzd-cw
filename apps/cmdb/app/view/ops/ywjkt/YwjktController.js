Ext.define('Cmdb.view.ops.ywjkt.YwjktController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.ywjkt',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});