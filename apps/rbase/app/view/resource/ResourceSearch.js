Ext.define('RBase.view.resource.ResourceSearch', {
    extend: 'Ext.grid.Panel',
    xtype: 'resourcesearch',

    requires: [
        'Ext.form.field.Display',
        'RBase.view.resource.ResourceSelect',
        'RBase.view.resource.ResourceSearchController'
    ],
    controller: 'resourcesearch',
    store: {},
    tbar: {
        xtype: 'container',
        border: false,
        items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'displayfield',
                width: 90,
                value: '目录:'
            }, {
                xtype: 'textfield',
                flex: 2,
                reference: 'selecebtn',
                emptyText: '目录标题'
            }, {
                xtype: 'button',
                text: '选择',
                handler: 'onSelect'
            }]
        }, {
            xtype: 'toolbar',
            items: [{
                xtype: 'displayfield',
                width: 90,
                value: '条件:'
            }, {
                xtype: 'combo',
                flex: 2,
                queryMode: 'local',
                triggerAction: 'all',
                forceSelection: false,
                editable: false,
                text: 'title',
                displayField: 'text',
                valueField: 'value',
                emptyText: '字段名称',
                reference: 'field_name',
                store: {
                    fields: ['text', 'value'],
                    data: [
                        {text: 'ID', value: 'id'},
                        {text: '标题', value: 'bt'},
                        {text: '资源状态', value: 'zt'},
                        {text: '文件格式', value: 'gs'},
                        {text: '摘要', value: 'zy'}
                    ]
                }
            }, {
                xtype: 'combo',
                width: 80,
                queryMode: 'local',
                triggerAction: 'all',
                forceSelection: false,
                editable: false,
                text: 'title',
                displayField: 'text',
                valueField: 'value',
                emptyText: '关系',
                store: {
                    fields: ['text', 'value'],
                    data: [
                        {text: '大于', value: 'bigy'},
                        {text: '等于', value: 'dy'},
                        {text: '小于', value: 'xy'},
                        {text: 'like', value: 'like'}
                    ]
                },
                anchor: '-5'
            }, {
                xtype: 'textfield',
                flex: 2,
                reference: 'text_field',
                emptyText: '请输入......'
            }, {
                xtype: 'button',
                text: '清空',
                handler: function () {
                    this.prev().setValue("");
                }
            }, {
                xtype: 'button',
                text: '搜索',
                handler: 'onSearch'
            }]
        }]
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }


});