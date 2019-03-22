Ext.define('DA.view.da.worktask.WorkTaskTypeEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'worktask-typeedit',

    layout: 'column',
    defaults: {
        margin: 5,
        xtype: 'textfield',
        columnWidth: 0.5
    },
    tbar: [{
        text: '保存',
        ui: 'default',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],
    items: [{
        fieldLabel: '任务类型名称',
        name: 'title',
        bind: '{taskType.title}',
        columnWidth: 1
    }, {
        fieldLabel: '上级任务节点',
        name: 'preNode',
        reference:'preNode',
        bind: '{taskType.preNode}',
        listeners: {
            render: 'onShowMenu'
        }
    }, {
        fieldLabel: '下级任务节点',
        name: 'nextNode',
        bind: '{taskType.nextNode}',
        reference:'nextNode',
        listeners: {
            render: 'onShowMenu'
        }
    }, {
        xtype: 'combo',
        name: 'doType',
        store: {
            data: [{
                title: '手动', value: 2
            }, {
                title: '自动', value: 1
            }, {
                title: '手动、自动', value: 3
            }]
        },
        fieldLabel: '执行方式',
        displayField: 'title',
        valueField: 'value',
        bind: '{taskType.doType}',
    }, {
        xtype: 'numberfield',
        fieldLabel: '所需时间',
        name: 'time',
        columnWidth: 0.4,
        bind: '{taskType.time}'
    }, {
        xtype: 'combo',
        store: {
            data: [{
                title: '年', value: 'year'
            }, {
                title: '月', value: 'month'
            }, {
                title: '日', value: 'day'
            }]
        },
        value: 'day',
        displayField: 'title',
        valueField: 'value',
        columnWidth: 0.1
    }, {

        xtype: 'combo',
        name: 'role',
        store: {
            data: [{
                title: '角色1', value: 2
            }, {
                title: '角色2', value: 1
            }]
        },
        fieldLabel: '角色',
        displayField: 'title',
        valueField: 'value',
        bind: '{taskType.role}'
    }, {
        fieldLabel: '工单模版',
        name: 'orderTemplate',
        xtype: 'combo',
        store: {
            data: [{
                title: '元数据会审工单', value: 1
            }, {
                title: '数据资源目录上架工单', value: 2
            }, {
                title: '元数据采集工单', value: 3
            }]
        },
        displayField: 'title',
        valueField: 'title',
        columnWidth: 1,
        bind: '{taskType.orderTemplate}'
    }]
});
