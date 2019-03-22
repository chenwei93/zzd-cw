Ext.define('Cmdb.view.portal.zhgzt.ContactsController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.contacts',

    initViewModel: function (vm) {
        vm.getStore('list1').loadPage(1);
    }
});