Ext.define('Cmdb.view.asset.zcwh.entrydata.EntryDataList', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata-list',


    requires: [
        'Cmdb.model.EntryData',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataListModel',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataListController',
    ],
    controller: 'entrydata-list',
    viewModel: {
        type: 'entrydata-list'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '刷新',
        ui: 'default',
        iconCls: 'x-fa fa-refresh',
        handler: 'onReset'
    }],
    listeners: {
        'rowdblclick': 'onShow'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '信息资源名称',
        width: 220,
        dataIndex: 'resTitle',
        locked: true
    }, {
        text: '信息资源分类',
        dataIndex: 'catalogGB',
        renderer: function (value) {
            if (value != undefined) {
                if (value.length == 0) {
                    return ""
                } else {
                    var a = value[0].code;
                    for (var i = 1; i < value.length; i++) {
                        a += ',' + value[i].code
                    }
                    return a
                }
            } else {
                return ""
            }

        }
    }, {
        text: '信息资源代码',
        dataIndex: 'bizCode'
    }, {
        text: '信息资源提供方',
        dataIndex: 'rpOrgName'
    }, {
        text: '资源提供方代码',
        dataIndex: 'providerCode'
    }, {
        text: '信息资源摘要',
        dataIndex: 'abstracts'
    }, {
        text: '信息资源格式',
        dataIndex: 'entityDesc'
    }, {
        text: '信息项信息',
        align: 'center',
        renderer: function () {
            return "<INPUT type='button' value='详细'>";
        },
        listeners: {
            click: function (index, record, tr, td, view, a) {
                if (record.textContent != '(无)') {
                    Ext.create('Ext.window.Window', {
                        modal: true,
                        title: '信息项信息',
                        width: 600,
                        height: 500,
                        autShow: true,
                        scrollable: true,
                        needId: a.data.id,
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
            dataIndex: 'gxlx',
            renderer: function (value) {
                if (value == undefined) {
                    return null
                } else {
                    return value.title
                }
            }
        }, {
            text: '共享条件',
            dataIndex: 'extraGXTJ',
        }, {
            text: '共享方式',
            dataIndex: 'gxfs',
            renderer: function (value) {
                if (value == undefined) {
                    return null
                } else {
                    return value.title
                }

            }
        }]
    }, {
        text: '开放属性',
        columns: [{
            text: '是否向社会开放',
            dataIndex: 'kflx',
            renderer: function (value) {
                if (value == undefined) {
                    return null
                } else {
                    return value.title
                }
            }
        }, {
            text: '开放条件',
            dataIndex: 'extraKFTJ',

        }]
    }, {
        xtype: 'datecolumn',
        text: '更新日期',
        dataIndex: 'mdDateUpd',
        format: 'Y-m-d h:i:s'
    }, {
        xtype: 'datecolumn',
        text: '发布日期',
        dataIndex: 'pubDate',
        editor: {
            xtype: 'datefield',
            format: 'Y-m-d h:i:s'
        },
        format: 'Y-m-d h:i:s'
    }, {
        text: '关联资源代码',
        dataIndex: ''
    }, {
        xtype: 'actioncolumn',
        items: [{
            iconCls: 'x-fa fa-eye',
            handler: 'onShow1',
            tooltip: '查看'
        }],
        cls: 'content-column',
        align: 'center',
        width: 70,
        locked: true
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});