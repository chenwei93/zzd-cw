Ext.define('DA.view.dataservice.entry.EntryViewDatasetController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.entry-viewdataset',

    initViewModel: function () {
        this.loadEntity();
    }
});
