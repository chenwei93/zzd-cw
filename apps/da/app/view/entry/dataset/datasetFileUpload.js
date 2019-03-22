Ext.define('DA.view.entry.dataset.datasetFileUpload', {
    extend: 'Ext.form.Panel',
    xtype: 'fileupload',


    controller: 'dataset-addview',
    bodyPadding: 10,

    defaults: {
        width: '100%',
        margin: '10 0 10 0'
    },

    items: [{
        html: '选择上传的文件xxxxxxxxxxxxxxxxxxxx'
    }, {
        xtype: 'fileuploadfield',
        buttonText: '选择文件',
        reference: 'chooseFile',
        name: 'file',
        buttonOnly: true,
        hideLabel: true
    }],
    buttons: [{
        text: '上传',
        handler: 'fileUpload'
    }]
});
