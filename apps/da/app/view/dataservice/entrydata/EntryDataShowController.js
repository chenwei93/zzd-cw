Ext.define('DA.view.dataservice.entrydata.EntryDataShowController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.entrydata-show',

    initViewModel: function () {
        this.loadEntity();
    }
});
