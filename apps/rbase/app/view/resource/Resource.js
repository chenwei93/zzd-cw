/**
 * This view is an example list of people.
 */
Ext.define('RBase.view.resource.Resource', {
    extend: 'Ext.grid.Panel',
    xtype: 'resource',

    requires: [

        'RBase.model.Resource',
        'RBase.view.resource.ResourceModel',
        'RBase.view.resource.ResourceEdit',
        'RBase.view.resource.ResourceShow',
        'RBase.view.resource.ResourceController',
        'RBase.view.resource.ResourceAdd'
    ],
    viewModel: {
        type: 'resource'
    },
    controller: 'resource',

    bind: {
        store: '{list}'
    },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '标题',
        dataIndex: 'title',
        locked: true,
        width: 220
    }, {
        text: '资源格式',
        dataIndex: 'format'
    }, {
        text: '创建者',
        dataIndex: 'creator'
    }, {
        text: '版本',
        dataIndex: 'version'
    }, {
        text: '文件名/表名',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: '路径/库名',
        flex: 1,
        dataIndex: 'path'
    }, {
        xtype: 'actioncolumn',
        locked: true,
        items: [{
            iconCls: 'x-fa fa-eye',
            handler: 'onShow1',
            tooltip: '查看'
        }, {
            iconCls: 'x-fa fa-pencil',
            handler: 'onEdit',
            tooltip: '编辑'
        }, {
            iconCls: 'x-fa fa-close',
            handler: 'onDelete',
            tooltip: '删除'
        }],
        cls: 'content-column',
        width: 80,
        right: 0,
        align: 'center',
        text: '操作',
        tooltip: '操作 '
    }],

    listeners: {
        itemdblclick: 'onView'
    },
    tbar: [
    //     {
    //     ui:'default',
    //     iconCls:'x-fa fa-plus-circle',
    //     text: '新增',
    //     handler: 'onAdd'
    // },
        '->', {
        xtype: 'combo',
        reference: 'comborespool',
        queryMode: 'local',
        triggerAction: 'all',
        forceSelection: false,
        editable: false,
        text: 'title',
        displayField: 'text',
        valueField: 'value',
        emptyText: '资源池',
        store: {
            fields: ['text', 'value'],
            data: [
                {text: '文件数据源', value: 'WJSJY'},
                {text: '演示数据库池', value: 'YSSJKC'},
                {text: '权力事项数据库池', value: 'QLSXSJKC'}
            ]
        },
        listeners: {
            change: 'onChange'
        }
    }, {
        xtype: 'textfield',
        emptyText: '输入查询内容直接回车',
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        iconCls: 'x-fa fa-refresh',
        title: '重置',
        tooltip: '重置',
        handler: 'onReset'
    }, {
        iconCls: 'x-fa fa-navicon',
        title: '更多条件查询',
        tooltip: '更多条件查询',
        handler: 'onQuery'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
