Ext.define('Starter.view.home.HomeUpdataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-update',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }

});