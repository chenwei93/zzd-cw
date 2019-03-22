Ext.define('Cmdb.view.portal.yyzx.YyzxController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.yyzx',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});