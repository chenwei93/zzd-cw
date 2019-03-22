Ext.define('Cmdb.view.asset.zcwh.entrydata.EntryDataListController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.entrydata-list',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (view, record, index) {
        // debugger
        var id = record.id;

        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '目录详情',
            width: 800,
            height: 612
        });
    },
    onShow1: function (grid, rowIndex, colIndex, cell, event, record, row) {
        // debugger
        var id = record.get('id');

        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '目录详情',
            width: 800,
            height: 612
        });
    },
    onReset: function () {
        this.getView().getStore().reload();
    }

    // TODO - Add control logic or remove is not needed
});