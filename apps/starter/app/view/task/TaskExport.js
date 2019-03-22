Ext.define('Starter.view.task.TaskExport', {
    extend: 'Ext.form.Panel',
    xtype: 'task-export',

    bodyPadding: 10,

    controller: 'task',

    items: [{
        xtype: 'component',
        html: [
            '<p>根据国家目录梳理工具的导入模板，生成导出文件</p>',
            '<p>因导出时间可能较长，建议使用后台导出功能，导出后在任务清单中可下载</p>'
        ]
    }, {
        width: '100%',
        xtype: 'treepicker',
        fieldLabel: '指定部门',
        minPickerHeight: 200,
        expanded: true,
        displayField: 'text',
        store: Ext.create('Ext.data.TreeStore', {
            fields: ['text'],
            proxy: {
                type: 'ajax',
                url: '/rest/tree/departments',
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
            },
            select: 'onSelectDepartment'
        },
        reference: 'chooseDept'
    }, {
        layout: 'column',
        items: [{
            xtype: 'textfield',
            columnWidth: 0.9,
            name: 'title',
            emptyText: '如填写，将作为下载文件名。可不填',
            fieldLabel: '导出文件名'

        }, {
            xtype: 'displayfield',
            columnWidth: 0.1,
            value: '.xlsx'
        }]
    }],
    buttons: [{
        text: '导出并下载',
        reference: 'exportBtn',
        handler: 'onDownload'
        // href: '/api/exportData?download=true&department='
    }, {
        text: '后台导出',
        reference: 'exportHT',
        handler: 'export'
    }]
});