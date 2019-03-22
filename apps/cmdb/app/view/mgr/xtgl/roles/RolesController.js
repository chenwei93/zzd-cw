Ext.define('Cmdb.view.mgr.xtgl.roles.RolesController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.roles',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});
