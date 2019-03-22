Ext.define('Cmdb.view.ops.gdgl.cjgd.RzCjgd', {
    extend: 'Ext.form.Panel',
    xtype: 'rz-cjgd',


    bodyPadding: 10,
    requires: [
        'Cmdb.view.ops.gdgl.cjgd.CjgdController',
    ],
    controller: 'cjgd',
    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '确定',
        handler: 'onSure'
    }, {
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        text: '取消',
        handler: 'onCancel'
    }],
    layout: 'column',
    defaults: {
        margin: 10,
        columnWidth: 1
    },
    items: [{
        layout: 'column',
        margin: 0,
        defaults: {
            margin: 10,
            columnWidth: 1
        },
        reference: 'addForm',
        items: [{
            fieldLabel: '<em class="required">*</em>' + '工作类型',
            name: 'eventtype',
            reference: 'gdType',
            xtype: 'combo',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            emptyText: '请选择工单类型',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '事件类型', value: 'event'},
                    {name: '问题类型', value: 'question'},
                    {name: '审计类型', value: 'audit'},
                    {name: '值班类型', value: 'attendance'},
                    {name: '巡检类型', value: 'inspection'},
                    {name: '应急演练类型', value: 'emergency'},
                    {name: '项目类型', value: 'project'}
                ]
            },
            listeners: {
                select: 'onSelect'
            },
            bind: '{show.eventtype}'
        }],


    }, {
        xtype: 'textfield',
        reference: 'gdTitle',
        fieldLabel: '<em class="required">*</em>' + '工单标题',
        name: 'title',
        bind: '{title}',
    }, {
        xtype: 'radiogroup',
        fieldLabel: '<em class="required">*</em>' + '优先级',
        cls: 'x-check-group-alt',
        name: 'rb_auto',
        items: [
            {boxLabel: '极低', inputValue: 1},
            {boxLabel: '低', inputValue: 2},
            {boxLabel: '中', inputValue: 3, checked: true},
            {boxLabel: '高', inputValue: 4},
            {boxLabel: '极高', inputValue: 5}
        ]
    }, {
        xtype: 'combo',
        name: 'nextperson',
        fieldLabel: '接收人',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择接收人',
        flex: 1,
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '王石', value: 'wangs'},
                {name: '陈薇', value: 'chenw'},
                {name: '方荣', value: 'fangr'},
                {name: '莫智胜', value: 'mozs'}
            ]
        }
    }, {
        xtype: 'textarea',
        fieldLabel: '工作描述',
        name: 'gddes'
    }, {
        fieldLabel: '附件',
        xtype: 'fileuploadfield', // Same as filefield above
        buttonOnly: true,
        buttonText: '选择文件'
    }],
    listeners: {
        render: 'onRzCjgdRender'
    }

});