/**
 * This view is an example list of people.
 */
Ext.define('Starter.view.report.Report', {
    extend: 'Ext.grid.Panel',
    xtype: 'report',

    requires: [
        'Starter.model.Report',
        'Starter.view.report.ReportController',
        'Starter.view.report.ReportModel',
        'Starter.view.report.ReportEdit',
        'Starter.view.report.ReportFileUpload'

    ],

    //title: '调研表列表',

    viewModel: {
        type: 'report'
    },
    bind: {
        store: '{list}'
    },
    columns: [
        {xtype: 'rownumberer'},
        {text: '标题', dataIndex: 'title', flex: 1},
        {text: '采集方式', dataIndex: 'sourceType', renderer: 'renderSourceType'},
        {text: '调研内容', dataIndex: 'targetClass', renderer: 'renderTargetClass'},
        {text: '所属部门', dataIndex: 'department', renderer: 'renderWithName'},
        {text: '所属地区', dataIndex: 'region', renderer: 'renderWithName'},
        {text: '采集人', dataIndex: 'author', renderer: 'renderWithName'},
        {text: '采集时间', dataIndex: 'createTime', xtype: 'datecolumn', format: 'Y-m-d H:i:s', flex: 1},
        {text: '生成时间', dataIndex: 'generateTime', xtype: 'datecolumn', format: 'Y-m-d H:i:s', flex: 1},
        {text: '生成目录', dataIndex: 'generated', xtype: 'booleancolumn', trueText: '已生成', falseText: '未生成'}
    ],
    controller: 'report',

    listeners: {
        itemdblclick: 'onView'
    },

    tbar: [
        {
            text: '导入调研表',
            iconCls: 'x-fa fa-upload',
            ui: 'default',
            handler: 'imports'
        }, {
            ui: 'default',
            text: '刷新',
            iconCls: 'x-fa fa-refresh',
            handler: 'reloadStore'

        }, '->', {
            xtype: 'combo',
            queryMode: 'local',
            triggerAction: 'all',
            forceSelection: false,
            editable: false,
            name: 'title',
            displayField: 'name',
            valueField: 'value',
            emptyText: '是否生成',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '已生成', value: true},
                    {name: '未生成', value: false}
                ]
            }
        }, {
            xtype: 'textfield',
            emptyText: '输入查询内容直接回车'
        }, {
            iconCls: 'x-fa fa-refresh',
            title: '重置',
            handler: 'onreset'
        }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});
