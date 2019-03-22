Ext.define('DRDMS.view.entrydata.EntryDataShowController', {
    extend: 'DRDMS.base.ViewController',

    alias: 'controller.entrydata-show',

    initViewModel: function () {
        this.loadEntity();
    }
});
