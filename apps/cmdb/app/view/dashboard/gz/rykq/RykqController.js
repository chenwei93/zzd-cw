Ext.define('Cmdb.view.dashboard.gz.rykq.RykqController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.rykq',

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
    onItemHighlightChange: function (chart, newHighlightItem, oldHighlightItem) {
        this.setSeriesLineWidth(newHighlightItem, 4);
        this.setSeriesLineWidth(oldHighlightItem, 2);
    },
    onSeriesTooltipRender2: function (tooltip, record, item) {
        var title = item.series.getTitle();

        tooltip.setHtml(record.get('month') +  title + ' 占 ' +
            record.get(item.series.getYField()) + '%');

    }
});