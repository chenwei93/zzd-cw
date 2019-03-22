Ext.define('DRDMS.model.GridDataset', {
    extend: 'DRDMS.model.Base',

    fields: [
        'name', 'title', 'dataLength', 'notNull', 'require',
        'common', 'valueRangeReference', 'dataType'
    ]
});