Ext.define('Cmdb.view.ops.gdgl.gryb.GrybController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gryb',

    
    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    }

});