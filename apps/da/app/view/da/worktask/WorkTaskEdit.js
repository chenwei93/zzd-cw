Ext.define('DA.view.da.worktask.WorkTaskEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'worktask-edit',


    layout: 'column',
    defaults: {
        xtype: 'textfield',
        margin: 5,
        columnWidth: 0.5
    },
    items: [{
        fieldLabel: '任务名称',
        name: 'taskName'
    }, {
        fieldLabel: '任务类型',
        name: 'taskType'
    }],
    tbar: [{
        ui: 'default',
        text: '任务提交'
    }, {
        ui: 'default',
        text: '任务退回'
    }]
});
