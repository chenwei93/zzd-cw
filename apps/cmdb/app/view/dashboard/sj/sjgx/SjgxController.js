Ext.define('Cmdb.view.dashboard.sj.sjgx.SjgxController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.sjgx',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSeriesTooltipRender2: function (tooltip, record, item) {
        var title = item.series.getTitle();
        // tooltip.setHtml(Ext.util.Format.date(new Date(record.get('time')),'H:i'));
        tooltip.setHtml(title + ' 在 ' +  Ext.util.Format.date(new Date(record.get('time')),'H:i') + ' 占 ' +
            record.get(item.series.getYField()) + '%');

    }
});