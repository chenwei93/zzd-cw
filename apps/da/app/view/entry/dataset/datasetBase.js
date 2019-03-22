Ext.define('DA.view.entry.dataset.datasetBase', {
    extend: 'Ext.form.Panel',
    xtype: 'dataset-base',


    layout: 'column',
    defaults: {
        xtype: 'textfield',
        columnWidth: 0.5,
        margin: 3
    },
    viewModel: true,
    items: [{
        fieldLabel: '显示名',
        name: 'entityTitle',
        bind: '{title}'
    }, {
        fieldLabel: '名称',
        name: 'entityName',
        bind: '{entityName}'
    }, {
        fieldLabel: '数据库',
        name: 'sql',
        readOnly: true,
        bind: '{sql}'
    }, {
        fieldLabel: '表',
        name: 'table',
        readOnly: true,
        bind: '{table}'
    }, {
        xtype: 'combo',
        fieldLabel: '分类',
        name: 'catalog',
        bind: '{catalog}'

    }, {
        fieldLabel: '标签',
        name: 'keyword',
        bind: '{keyword}'

    }]
});
