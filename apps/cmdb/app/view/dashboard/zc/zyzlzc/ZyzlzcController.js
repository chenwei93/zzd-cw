Ext.define('Cmdb.view.dashboard.zc.zyzlzc.ZyzlzcController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zyzlzc',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onAxisLabelRender: function (axis, label, layoutContext) {
        return label.toFixed(label < 10 ? 1: 0) ;
    },
    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' 在 ' +
            record.get('month') + ': ' +
            record.get(item.field).toFixed(1) );
    }
});