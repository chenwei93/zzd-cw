Ext.define('Cmdb.view.asset.zcwh.entrydata.EntryDataShowController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.entrydata-show',

    initViewModel: function () {
        this.loadEntity();
    }
});
