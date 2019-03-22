Ext.define('DA.view.entry.entrywh.EntryWhFileUpload', {
    extend: 'Ext.form.Panel',
    xtype: 'fileupload',


    // requires:[
    //     'Starter.view.report.ReportController'
    // ],
    controller: 'entry-wh',
    bodyPadding: 10,

    defaults: {
        width: '100%',
        margin: '10 0 10 0'
    },

    items: [{
        name: 'department',
        reference: 'uploadForm',
        flex: 1,
        xtype: 'treepicker',
        fieldLabel: '部门',
        minPickerHeight: 200,
        displayField: 'text',
        store: Ext.create('Ext.data.TreeStore', {
            fields: ['text'],
            proxy: {
                type: 'ajax',
                url: '/base/tree/departments',
                reader: {
                    type: "json",
                    rootProperty: 'children'
                }
            }
        }),
        listeners: {
            render: function () {
                this.getPicker().getStore().setRootVisible(false);
                this.getPicker().expandAll();
            }
        },
        allBlank: false
    }, {
        flex: 1,
        xtype: 'textfield',
        fieldLabel: '标题',
        emptyText: '如不填写，默认使用导入的文件名',
        name: 'title'
    }, {
        xtype: 'radiogroup',
        name: 'sourceFormat',
        layout: 'column',
        fieldLabel: '导入格式',
        items: [
            {boxLabel: '国家编目标准模版&#160;', inputValue: 'Type5', checked: true},
            {boxLabel: '资源采集表（数据库类）&#160;', inputValue: 'Type1'},
            {boxLabel: '资源采集表（文件类）&#160;', inputValue: 'Type2'},
            {boxLabel: '资源调研表&#160;&#160;', inputValue: 'Type3'},
            {boxLabel: '信息系统调研表&#160;&#160;', inputValue: 'Type4'}
        ]
    }, {
        xtype: 'filefield',
        buttonText: '选择文件',
        reference: 'chooseFile',
        name: 'file',
        allBlank: false,
        hideLabel: true

    }],
    buttons: [{
        text: '导入',
        handler: 'fileUpload'
    }]
});
