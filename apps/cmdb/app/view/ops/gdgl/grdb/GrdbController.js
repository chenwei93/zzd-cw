Ext.define('Cmdb.view.ops.gdgl.grdb.GrdbController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.grdb',
    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }

});