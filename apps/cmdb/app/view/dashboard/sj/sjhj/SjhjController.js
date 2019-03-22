Ext.define('Cmdb.view.dashboard.sj.sjhj.SjhjController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.sjhj',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' 在 ' +
            record.get('month') + ' 是 ' +
            record.get(item.field)+ ' 件 ');
    },

});