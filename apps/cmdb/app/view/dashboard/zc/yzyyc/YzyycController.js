Ext.define('Cmdb.view.dashboard.zc.yzyyc.YzyycController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.yzyyc',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSeriesTooltipRenderPie: function (tooltip, record, item) {
        tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    }
});