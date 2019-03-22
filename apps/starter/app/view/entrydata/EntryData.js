/**
 * This view is an example list of people.
 */
Ext.define('Starter.view.entrydata.EntryData', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata',

    requires: [
        'Starter.model.EntryData',
        'Starter.view.entrydata.EntryDataReader',
        'Starter.view.entrydata.EntryDataController',
        'Starter.view.entrydata.EntryDataModel',
        'Starter.view.entrydata.EntryDataExport',
        'Starter.view.entrydata.EntryDataDetails',
        'Starter.view.entrydata.EntryDataShow'
    ],


    controller: 'entrydata',

    listeners: {
        itemdblclick: 'onView'
    },

    viewModel: {
        type: 'entrydata'
    },
    bind: {
        store: '{list}'
    },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '信息资源名称',
        width: 220,
        dataIndex: 'resTitle',
        locked: true
    }, {
        text: '信息资源代码',
        dataIndex: ''
    }, {
        text: '信息资源提供方',
        columns: [{
            text: '信息资源提供方',
            dataIndex: 'rpOrgName'
        }, {
            text: '提供方内部部门',
            dataIndex: ''
        }]
    }, {
        text: '资源提供方代码',
        dataIndex: 'providerCode'
    }, {
        text: '信息资源摘要',
        dataIndex: 'abstracts'
    }, {
        text: '信息资源格式',
        columns: [{
            text: '信息资源格式分类',
            dataIndex: 'format'
        }, {
            text: '信息资源格式类型',
            dataIndex: 'contentType'
        }, {
            text: '其他类型资源格式描述',
            dataIndex: ''
        }]
    }, {
        text: '信息资源大普查',
        columns: [{
            text: '数据存储总量（G）',
            dataIndex: 'resSize',
            renderer: function (value) {
                if (value != null && value.hasOwnProperty('value')) {
                    value = value.value;
                }
                return value;
            }
        }, {
            text: '结构化信息记录总数（万）',
            dataIndex: 'resTotal',
            renderer: function (value) {
                if (value != null && value.hasOwnProperty('value')) {
                    value = value.value;
                }
                return value;
            }
        }, {
            text: '已共享的数据存储量（G）',
            dataIndex: 'resTotal1',
            renderer: function (value) {
                if (value != null && value.hasOwnProperty('value')) {
                    value = value.value;
                }
                return value;
            }
        }, {
            text: '已共享结构化记录数（万）',
            dataIndex: 'resSize1',
            renderer: function (value) {
                if (value != null && value.hasOwnProperty('value')) {
                    value = value.value;
                }
                return value;
            }
        }, {
            text: '已开放的数据存储量（G）',
            dataIndex: 'resTotal2',
            renderer: function (value) {
                if (value != null && value.hasOwnProperty('value')) {
                    value = value.value;
                }
                return value;
            }
        }, {
            text: '已开放结构化记录数（万）',
            dataIndex: 'resSize2',
            renderer: function (value) {
                if (value != null && value.hasOwnProperty('value')) {
                    value = value.value;
                }
                return value;
            }
        }]
    }, {
        text: '信息项信息',
        align: 'center',
        dataIndex: 'fields',
        // TODO 胡搞！
        renderer: function (value) {
            if (value == null) {
                return '(无)'
            } else {
                return "<INPUT type='button' value='详细'>";
            }
        },
        listeners: {
            click: function (index, record, tr, td, view) {
                if (record.textContent != '(无)') {
                    Ext.create('Ext.window.Window', {
                        modal: true,
                        title: '信息项信息',
                        width: 600,
                        height: 500,
                        autShow: true,
                        scrollable: true,
                        record: index.dataSource.data.items[tr].data.fields,
                        items: [{
                            xtype: 'entrydata-details'

                        }]
                    }).show();
                }

            }
        }
    }, {
        text: '共享属性',
        columns: [{
            text: '共享类型',
            dataIndex: 'gxlx'
        }, {
            text: '共享条件',
            dataIndex: 'extraGXTJ'
        }]
    }, {
        text: '共享方式',
        columns: [{
            text: '共享方式分类',
            dataIndex: 'gxfs'
        }, {
            text: '共享方式类型',
            dataIndex: 'format'
        }]
    }, {
        text: '开放属性',
        columns: [{
            text: '是否向社会开放',
            dataIndex: 'kflx'
        }, {
            text: '开放条件',
            dataIndex: ''
        }]
    }, {
        text: '更新周期',
        dataIndex: 'gxzq'
    }, {
        text: '发布日期',
        dataIndex: 'pubDate',
        editor: {
            xtype: 'datefield',
            format: 'Y-m-d H:i:s'
        },
        renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')
    }, {
        text: '关联及类目名称',
        dataIndex: ''
    }
    ],

    tbar: {
        items: [
            {
                xtype: 'button',
                text: '生成资源目录',
                ui: 'default',
                iconCls: 'x-fa fa-truck',
                handler: 'generate'
            }, {
                ui: 'default',
                text: '刷新',
                iconCls: 'x-fa fa-refresh',
                handler: 'reloadStore'

            }, '->', {
                xtype: 'treepicker',
                minPickerHeight: 200,
                rootVisible: false,
                displayField: 'text',
                store: Ext.create('Ext.data.TreeStore', {
                    fields: ['text'],
                    root: {
                        text: '部门',
                        expanded: true
                    },
                    proxy: {
                        type: 'ajax',
                        url: '/rest/tree/departments',
                        reader: {
                            type: "json",
                            rootProperty: 'children'
                        }
                    }
                }),
                listeners: {
                    render: function () {
                        this.getPicker().getStore().setRootVisible(false);
                        this.getPicker().expandAll();
                    },
                    select: 'onReload'
                }
            }, {
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
            }
        ]
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store:this.store

    }
});
