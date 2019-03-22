Ext.define('DA.view.entry.dataset.DatasetAddDataset', {
    extend: 'Ext.form.Panel',
    xtype: 'dataset-adddataset',


    layout: 'column',

    defaults: {
        columnWidth: 0.5,
        margin: 5,
        xtype: 'textfield'
    },
    tbar: [{
        text: '保存',
        handler: 'onAddDatasetSave'
    }, {
        text: '取消',
        handler: 'onAddDatasetCancel'

    }],

    items: [{
        fieldLabel: '名称',
        name: 'name',
        emptyText: '一般以英文表示'
    }, {
        fieldLabel: '显示名',
        name: 'title',
        emptyText: '一般以中文表示'
    }, {
        fieldLabel: '数据类型',
        name: 'dataType',
        emptyText: '请选择',
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        store: {
            autoLoad: true,
            data: [{
                name: '引用',
                value: 'Reference'
            }, {
                name: '文本',
                value: 'Text'
            }, {
                name: '数值',
                value: 'Numeric'
            }, {
                name: '日期',
                value: 'Date'
            }]
        },
        value: 'Reference'
    }, {
        fieldLabel: '是否必填',
        name: 'notNull',
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        store: {
            autoLoad: true,
            data: [{
                name: '是',
                value: true
            }, {
                name: '否',
                value: false
            }]
        },
        value: 'false'
    }]
});
