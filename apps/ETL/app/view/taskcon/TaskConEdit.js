Ext.define('ETL.view.taskcon.TaskConEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'taskcon-edit',

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
        bind: '{name}'
    }, {
        // xtype: 'combo',
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
        fieldLabel:'调度文件名称',
        name:'jobName',
        bind:'{jobName}'
    },{
        fieldLabel:'流程文件名称',
        name:'transName1',
        bind:'{transName1}'
    },{
        fieldLabel: '流程描述',
        //xtype: 'textarea',
        name: 'description',
        bind: '{description}'
    }],
    listeners: {
        render: 'OnTaskConRender'
    }

});
