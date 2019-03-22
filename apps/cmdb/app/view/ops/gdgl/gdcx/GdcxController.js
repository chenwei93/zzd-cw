Ext.define('Cmdb.view.ops.gdgl.gdcx.GdcxController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gdcx',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onXjgd: function () {
        this.open({
            xtype: 'cjgd'
        }, {
            title: '新建工单',
            width: 800,
            height: 580,
            scrollable: true
        })
    },
});