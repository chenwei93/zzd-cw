Ext.define('DA.view.entry.dataset.datasetInputScript', {
    extend: 'Ext.panel.Panel',
    xtype: 'dataset-inputscript',


    requires: [
        'DA.store.datasetInput'
    ],
    controller: 'dataset-operate',
    viewModel: true,
    layout: 'column',
    scrollable: true,
    defaults: {
        columnWidth: 1,
        margin: '5 10',
    },
    items: [{
        height: 20,
        html: '输入脚本'
    }, {
        name: 'expression',
        bind: '{entry_expression}',
        xtype: 'textarea',
        focusOnToFront: false,
        fieldStyle: 'font-size: 20px;font-family: Menlo;',
        reference: 'expression'
    }, {
        xtype: 'displayfield',
        readOnly: true,
        bind: '{showText}'
    }, {

        xtype: 'grid',
        height: 250,
        scrollable: true,
        listeners: {
            rowclick: 'onRowClick'
        },
        store: {
            autoLoad: true,
            fields: [
                'title', 'email', 'phone'
            ],

            data: [{
                title: '操作符',
                code: 'operation',
                type: 'operation',
                items: [
                    {
                        title: '加',
                        code: 'plus',
                        type: 'operation',
                        name: '+'
                    }, {
                        name: '-',
                        title: '减',
                        type: 'operation',
                        code: 'minus'
                    }, {
                        name: '*',
                        title: '乘',
                        type: 'operation',
                        code: 'multiply'
                    }, {
                        name: '/',
                        title: '除',
                        type: 'operation',
                        code: 'division'
                    }, {
                        name: '!',
                        title: '非',
                        type: 'operation',
                        code: 'not'
                    }, {
                        name: 'eq()',
                        title: '等于',
                        type: 'operation',
                        code: 'equal'
                    }, {
                        name: '<',
                        title: '小于',
                        type: 'operation',
                        code: 'less'
                    }, {
                        name: '>',
                        title: '大于',
                        type: 'operation',
                        code: 'more'
                    }, {
                        name: '&',
                        title: '且',
                        type: 'operation',
                        code: 'add'
                    }, {
                        name: '|',
                        title: '非',
                        type: 'operation',
                        code: 'not'
                    }, {
                        name: '(',
                        title: '左括号',
                        type: 'operation',
                        code: 'left'
                    }, {
                        name: ')',
                        title: '右括号',
                        type: 'operation',
                        code: 'right'
                    }]
            }, {
                title: '函数',
                type: 'fn',
                code: 'fn',
                items: [
                    {
                        title: 'Like',
                        type: 'fn',
                        code: 'sum',
                        name: 'like()'
                    }, {
                        title: 'In',
                        type: 'fn',
                        code: 'multiply',
                        name: 'in()'
                    }]
            }, {
                title: '字段',
                code: 'sjjzd',
                items: []

            }, {
                title: '数据集',
                code: 'entry',
                items: []

            }]
        },
        columns: [{
            dataIndex: 'title',
            flex: 1
        }],
        columnWidth: 0.5
    }, {
        xtype: 'grid',
        height: 250,
        scrollable: true,
        reference: 'showGrid',
        listeners: {
            rowdblclick: 'onRowDBClick'
        },
        columns: [{
            dataIndex: 'title',
            flex: 1
        }],
        columnWidth: 0.5
    }],

    buttons: [{
        ui: 'default',
        text: '保存',
        handler: 'onSaveScript'
    }, {
        ui: 'default',
        text: '取消',
        handler: 'onCancelScript'
    }],
    listeners: {
        render: 'onRenderScript'
    }
});
