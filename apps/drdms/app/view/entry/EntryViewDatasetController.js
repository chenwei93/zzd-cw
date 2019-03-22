Ext.define('DRDMS.view.entry.EntryViewDatasetController', {
    extend: 'DRDMS.base.ViewController',

    alias: 'controller.entry-viewdataset',

    initViewModel: function () {
        this.loadEntity();
    }
});
