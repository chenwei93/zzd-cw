Ext.define('cmdb.view.dashboard.utils.UtilsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.utils',

    onAxisLabelRenderLine: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        return layoutContext.renderer(label) + '%';
    },
    onSeriesTooltipRender2: function (tooltip, record, item) {
        var title = item.series.getTitle();

        tooltip.setHtml(title + ' on ' + record.get('month') + ': ' +
            record.get(item.series.getYField()) + '%');

    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('month') + ': ' + record.get('data1') + '%');
    },

    onSeriesTooltipRenderPie: function (tooltip, record, item) {
        tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    },

    onAxisLabelRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        var value = layoutContext.renderer(label);
        return value !== '0' ? (value / 100 + ',00G') : value;
    },
    onItemHighlightChange: function (chart, newHighlightItem, oldHighlightItem) {
        this.setSeriesLineWidth(newHighlightItem, 4);
        this.setSeriesLineWidth(oldHighlightItem, 2);
    },

    onAxisLabelRenderpd: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        var value = layoutContext.renderer(label);
        return value !== '0' ? (value + '个') : value;
    },

    onItemHighlightChange: function (chart, newHighlightItem, oldHighlightItem) {
        this.setSeriesLineWidth(newHighlightItem, 4);
        this.setSeriesLineWidth(oldHighlightItem, 2);
    },

    setSeriesLineWidth: function (item, lineWidth) {
        if (item) {
            item.series.setStyle({
                lineWidth: lineWidth
            });
        }
    },

    getSeriesConfig: function (field, title) {
        return {
            type: 'area',
            title: title,
            xField: 'year',
            yField: field,
            style: {
                opacity: 0.60
            },
            marker: {
                opacity: 0,
                scaling: 0.01,
                fx: {
                    duration: 200,
                    easing: 'easeOut'
                }
            },
            highlightCfg: {
                opacity: 1,
                scaling: 1.5
            },
            tooltip: {
                trackMouse: true,
                renderer: function (tooltip, record, item) {
                    tooltip.setHtml(title + ' (' + record.get('year') + '): ' + record.get(field));
                }
            }
        };
    },

    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    },

    onAfterRender: function () {
        var me = this,
            chart = me.lookupReference('chart');

        chart.setSeries([
            me.getSeriesConfig('usa', 'USA'),
        ]);
    },
    onSeriesTooltipRender1: function (tooltip, record, item) {
        tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    },
    onBarTipRender1: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' on ' +
            record.get('dept') + ': ' +
            record.get(item.field).toFixed(1) );
    },
    onStackGroupToggle: function (segmentedButton, button, pressed) {
        var chart = this.lookupReference('chart'),
            series = chart.getSeries()[0],
            value = segmentedButton.getValue();

        series.setStacked(value === 0);
        chart.redraw();
    },
});