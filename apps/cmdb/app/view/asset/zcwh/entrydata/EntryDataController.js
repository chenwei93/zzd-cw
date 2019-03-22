Ext.define('Cmdb.view.asset.zcwh.entrydata.EntryDataController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.entrydata',


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
    onShow2: function (grid, rowIndex, colIndex, cell, event, record, row) {
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
    onReset: function () {
        this.getView().getStore().reload();
    }


});