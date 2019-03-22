Ext.define('ETL.view.taskcon.TaskShow', {
    extend: 'Ext.form.Panel',
    xtype:'task-show',
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
        //xtype: 'combo',
        displayName: 'name',
        displayValue: 'value',
        fieldLabel: '运行主机',
        name: 'title',
        bind: '{serverCatalog.title}'
    }, {
        fieldLabel: '流程描述',
        //xtype: 'textarea',
        name: 'description',
        bind: '{description}'
    },{
        fieldLabel:'是否发布',
        name:'status',
        bind:'{status}'
    },{
        fieldLabel:'是否正在运行',
        name:'status1',
        bind:'{status1}'
    },{
        fieldLabel:'创建时间',
        name:'createDate',
        bind:'{createDate}'
    }],
    listeners: {
        render: 'OnTaskRender'
    }
});