/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.analysis.AnalysisController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.analysis',

    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex],
            dept = record.data.dept;
        tooltip.setHtml(dept +':'+browser+record.get(item.field)+'个');
    },
    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('dateDisplay') + '数据库上报数量: ' + record.get('data1'));
    },
    onSeriesTooltipRender2: function (tooltip, record, item) {
        tooltip.setHtml(record.get('dateDisplay') + '文件上报数量: ' + record.get('data2'));
    },
    onPieTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('dateDisplay') + '文件数: ' + record.get('data1'));
    },
    onPieTooltipRender2: function (tooltip, record, item) {
        tooltip.setHtml(record.get('dateDisplay') + '数据容量: ' + record.get('data2'));
    },
    onPieTooltipRender3: function (tooltip, record, item) {
        tooltip.setHtml(record.get('dateDisplay') + '记录数: ' + record.get('data3'));
    }


});
