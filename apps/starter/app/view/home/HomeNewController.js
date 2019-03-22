Ext.define('Starter.view.home.HomeNewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homenew',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }

});