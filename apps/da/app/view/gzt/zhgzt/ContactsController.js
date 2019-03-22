Ext.define('DA.view.gzt.zhgzt.ContactsController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.contacts',

    initViewModel: function (vm) {
        vm.getStore('list1').loadPage(1);
    }
});
