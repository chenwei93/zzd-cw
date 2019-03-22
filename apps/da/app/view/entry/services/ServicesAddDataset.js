Ext.define('DA.view.entry.service.ServicesAddDataset', {
    extend: 'Ext.form.Panel',
    xtype: 'services-adddataset',


    layout: 'column',

    defaults: {
        columnWidth: 0.5,
        margin: 5,
        xtype: 'textfield'
    },
    controller: 'services-operate',
    tbar: [{
        text: '保存',
        handler: 'onAddDatasetSave'
    }, {
        text: '取消',
        handler: 'onAddDatasetCancel'

    }],
    listeners: {
        render: 'onAddDatasetRender'
    }
});
