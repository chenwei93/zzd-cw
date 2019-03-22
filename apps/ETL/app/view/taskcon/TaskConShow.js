Ext.define('ETL.view.taskcon.TaskConShow', {
    extend: 'Ext.form.Panel',
    xtype: 'taskcon-show',

    layout: 'column',
    defaults: {
        xtype: 'displayfield',
        columnWidth: 1,
        margin: 5
    },
    viewModel:true,
    items: [{
        fieldLabel: '任务名称',
        name: 'name',
        bind: '{name}'
    }, {
       // xtype: 'combo',
        displayName: 'name',
        displayValue: 'value',
        fieldLabel: '运行主机',
        name: 'title',
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
