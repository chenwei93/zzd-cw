Ext.define('Starter.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }


    // TODO - Add control logic or remove is not needed
});
