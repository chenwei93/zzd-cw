Ext.define('Cmdb.view.asset.zcwh.entry.EntryViewDatasetController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.entry-viewdataset',

    initViewModel: function () {
        this.loadEntity();
    }
});
