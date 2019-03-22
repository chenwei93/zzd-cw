Ext.define('DA.model.GridDataset', {
    extend: 'DA.model.Base',

    fields: [
        'name', 'title', 'dataLength', 'notNull', 'require',
        'common', 'valueRangeReference', 'dataType'
    ]
});
