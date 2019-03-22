Ext.define('Cmdb.view.dashboard.gz.gdcl.GdclController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gdcl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onAxisLabelRenderLine: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        return layoutContext.renderer(label) + '%';
    },
    onBarTipRender1: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' on ' +
            record.get('dept') + ': ' +
            record.get(item.field).toFixed(1) );
    },
    onBarTipRender1: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' on ' +
            record.get('dept') + ': ' +
            record.get(item.field).toFixed(1)+ '%' );
    },
    onSeriesTooltipRender2: function (tooltip, record, item) {
        var title = item.series.getTitle();

        tooltip.setHtml(title + ' on ' + record.get('month') + ': ' +
            record.get(item.series.getYField()) + '%');

    },
    onTooltipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex],
            value = item.sprite.attr.dataY[item.index] -
                item.sprite.attr.dataStartY[item.index];

        tooltip.setHtml(record.get('dept') + browser+ '件占 ' +
            Ext.util.Format.number(value, '0.##') + '%');
    },
});