Ext.define('Starter.view.entrydata.EntryDataExport', {
    extend: 'Ext.form.Panel',
    xtype: 'entrydata-export',

    bodyPadding: 10,
    items: [{
        xtype: 'component',
        html: [
            '<h3>导出Excel</h3>',
            '<p>根据国家目录梳理工具的导入模板，生成导出文件</p>'
        ]
    }, {
        width: '100%',
        xtype: 'treepicker',
        fieldLabel: '部门',
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
        listeners:{
            render:function () {
                this.getPicker().getStore().setRootVisible(false);
                this.getPicker().expandAll();
            },
            select:function (data) {
                var id = data.getValue();
                var button = this.up('form').down('button');
                button.setHref('/api/exportData?department='+id);
                console.log(this.up('form').down('button').href)
            }
        },
        allBlank:false
    }],
    buttons: [{
        text: '导出',
        href: '/api/exportData?department='
    }]
});