Ext.define('Cmdb.view.monitor.utils.UtilsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chart-utils',






    // The 'target' here is an object that contains information
    // about the target value when the drag operation on the column ends.
    onEditTipRender: function (tooltip, item, target, e) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), target.yField),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(
            browser + ' 在 ' + item.record.get('month') + ': ' +
            target.yValue.toFixed(1) );
    },

    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' 在 ' +
            record.get('month') + ': ' +
            record.get(item.field).toFixed(1) );
    },
    // onBarTipRender1: function (tooltip, record, item) {
    //     var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
    //         browser = item.series.getTitle()[fieldIndex];
    //
    //     tooltip.setHtml(browser + ' on ' +
    //         record.get('dept') + ': ' +
    //         record.get(item.field).toFixed(1) );
    // },
    onSeriesTooltipRender2: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' 在 ' + record.get('month') + ': ' +
            record.get(item.field) + 'MB');
    },
    onSeriesTooltipRender3: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' 在 ' + record.get('month') + ': ' +
            record.get(item.field) + 'GB');
    },

    onAxisLabelRender1: function(axis, label, layoutContext) {
        return Ext.util.Format.number(label, '0.00');
    },
    onAxisLabelRender: function (axis, label, layoutContext) {
        return label.toFixed(label < 10? 1: 0)+ 'GB';
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        var title = item.series.getTitle();
        tooltip.setHtml(title+' 在 '+record.get('month') + ': ' + record.get('data1')+'GB');
    },
    onSeriesTooltipRender1: function (tooltip, record, item) {
        tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    },
    onSeriesTooltipRenderPie: function (tooltip, record, item) {
        tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    },

    onAfterRender: function (tooltip, record, item) {
        // var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
        //     browser = item.series.getTitle()[fieldIndex];
        // console.log(record);
        var date1=Ext.util.Format.date(new Date(record.get('time')),'H:i');
        tooltip.setHtml( '数量 在 ' +date1+ ': ' +
            record.get(item.field) );
    }
});
