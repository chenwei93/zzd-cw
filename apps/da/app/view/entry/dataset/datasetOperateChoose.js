Ext.define('DA.view.entry.dataset.datasetOperateChoose', {
    extend: 'Ext.grid.Panel',
    xtype: 'dataset-choose',

    requires: [
        'DA.view.entry.dataset.datasetOperateChooseController',
        'DA.view.entry.dataset.datasetOperateChooseModel',
        'DA.model.Services'
    ],
    tbar: [
        //     {
        //     ui: 'default',
        //     text: '确定',
        //     handler: 'onSure'
        // }
        , '->', {

            xtype: 'textfield',
            fieldLabel: '标题',
            labelWidth: 30,
            reference: 'searchText',
            emptyText: '输入查询内容直接回车',
            triggers: {
                bar: {
                    cls: 'x-form-clear-trigger',
                    handler: function () {
                        this.reset();
                    }
                }
            },
            listeners: {
                specialkey: 'onSpecialkey'
            }
        }],
    // controller: 'dataset-choose',
    // selType: 'checkboxmodel',
    scrollable: true,
    viewModel: {
        type: 'dataset-choose'
    },
    bind: {
        store: '{list}'
    },
    columns: [{
        text: '数据集显示名',
        dataIndex: 'title',
        flex: 2
    }, {
        text: '数据集名称',
        dataIndex: 'key',
        flex: 1,
    }, {
        xtype: 'actioncolumn',
        items: [{
            iconCls: 'x-fa fa-copy',
            handler: 'onChoose',
            type: 'copy',
            tooltip: '复制'
        // }, {
        //     iconCls: 'x-fa fa-arrow-down',
        //     handler: 'onChoose',
        //     type: 'quote',
        //     tooltip: '引用'
        }],
        cls: 'content-column',
        width: 70,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    },
    listeners: {
        render: 'onChooseDataSetRender'
    }
});
