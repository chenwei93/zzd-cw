Ext.define('DA.view.da.worktask.WorkTaskTypeShow', {
    extend: 'Ext.form.Panel',
    xtype: 'worktask-typeshow',

    layout: 'column',
    defaults: {
        margin: 5,
        xtype: 'displayfield',
        columnWidth: 0.5
    },
    items: [{
        fieldLabel: '任务类型名称',
        bind: '{taskType.title}',
        columnWidth: 1
    }, {
        fieldLabel: '上级任务节点',
        bind: '{taskType.preNode}'
    }, {
        fieldLabel: '下级任务节点',
        bind: '{taskType.nextNode}'
    }, {
        fieldLabel: '执行方式',
        bind: '{taskType.doType}',
        renderer: function (data) {
            var arr = {
                2: '手动',
                1: '自动',
                3: '手动、自动'
            };
            return arr[data];
        }
    }, {
        fieldLabel: '所需时间',
        bind: '{taskType.time}'
    }, {
        fieldLabel: '角色',
        bind: '{taskType.role}'
    }, {
        fieldLabel: '标志',
        bind: '{taskType.tag}',
        renderer: function (data) {

            return data ? '正常' : '废止'
        }
    }, {
        fieldLabel: '工单模版',
        columnWidth: 1,
        bind: '{taskType.orderTemplate}'


    }]
});
