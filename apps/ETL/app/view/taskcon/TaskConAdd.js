Ext.define('ETL.view.taskcon.TaskConAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'taskcon-add',

    layout: 'column',
    defaults: {
        xtype: 'textfield',
        columnWidth: 1,
        margin: 5
    },
    viewModel:true,
    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSaveAdd'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancelAdd'
    }],
    items: [{
        fieldLabel: '任务名称',
        name: 'name',
        //bind: '{name}'
    }, {
        xtype: 'combo',
        displayField: 'title',
        valueField: 'name',
        fieldLabel: '运行主机',
        store:{
            autoLoad:true,
            proxy:{
                type:'ajax',
                url:ETL.base.ViewController.HTTP_PREFIX+"/showServerCatalogs",
                actionMethods:{
                    read:'POST'
                }
            }
        },
        name: 'ipName',
        bind: '{serverCatalog.title}'
    }, {
        emptyText: '调度文件',
        xtype: 'filefield',
        hideLabel: true,
        name: 'file'
    }, {
        emptyText: '运行流程',
        xtype: 'filefield',
        hideLabel: true,
        name: 'file'
    }, {
        fieldLabel: '流程描述',
        xtype: 'textarea',
        name: 'desc',
        bind: '{desc}'
    }],
    listeners: {
        render: 'OnTaskConRender'
    }

});
