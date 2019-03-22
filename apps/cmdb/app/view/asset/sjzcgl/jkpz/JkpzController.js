Ext.define('Cmdb.view.asset.sjzcgl.jkpz.JkpzController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.jkpz',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});