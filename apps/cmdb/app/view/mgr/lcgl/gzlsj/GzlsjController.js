Ext.define('Cmdb.view.mgr.lcgl.gzlsj.GzlsjController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gzlsj',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }
});