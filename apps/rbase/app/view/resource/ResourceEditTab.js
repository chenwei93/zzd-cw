Ext.define('RBase.view.resource.ResourceEditTab', {
    extend: 'Ext.grid.Panel',
    xtype: 'resource-edittab',


    scrollable: true,
    height: 230,
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    store: {
        data: [{}]
    },
    tbar: [{
        iconCls: 'x-fa fa-plus',
        handler: 'onFieldsAdd',
        tooltip: '新增'
    }],

    columns: [{
        header: '字段名',
        dataIndex: 'name',
        editor: {
            allowBlank: false
        }
    }, {
        header: '中文名',
        dataIndex: 'title',
        editor: {
            allowBlank: true
        }
    }, {
        header: '数据类型',
        dataIndex: 'dataType',
        flex: 1,
        editor: {
            xtype: 'combo',
            displayName: 'value',
            displayField: 'name',
            name: 'dataType',
            queryMode: 'local',
            store: {
                data: [{
                    name: 'Numeric',
                    value: '数值型'
                }, {
                    name: 'Date',
                    value: '日期型'
                }, {
                    name: 'Boolean',
                    value: '布尔型'
                }, {
                    name: 'Text',
                    value: '文本型'
                }]
            }
        }
    }, {
        header: '长度',
        dataIndex: 'dataLength',
        flex: 1,
        align: 'right',
        editor: {
            xtype: 'numberfield',

            allowBlank: false,
            minValue: 0,
            maxValue: 100000
        }
    }, {
        xtype: 'checkcolumn',
        header: '主键?',
        dataIndex: 'alias',
        headerCheckbox: false,
        flex: 1,
        stopSelection: false
    }, {
        xtype: 'checkcolumn',
        header: '可空?',
        dataIndex: 'notNull',

        headerCheckbox: false,
        flex: 1,
        stopSelection: false
    }, {
        xtype: 'actioncolumn',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-close',
            handler: 'onFieldsDelete',
            tooltip: '删除'
        }],
        text: '操作',
        tooltip: '操作'

    }],
    listeners: {
        render: function () {
            var win = this.up('window');
            if (win) {
                var data = win.record.data;
                if (data.metadata) {
                    if (data.metadata.fields) {
                        if (data.metadata.fields.items) {
                            var store = {
                                autoLoad: true,
                                data: data.metadata.fields.items
                            };
                            this.setStore(store);
                        }
                    }
                }
            }

        }
    }
})
