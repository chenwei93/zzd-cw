Ext.define('Cmdb.view.asset.zcwh.entrydata.EntryData', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata',


    requires: [
        'Cmdb.model.EntryData',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataModel',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataController',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataDetails',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataShow',
        'Cmdb.view.asset.zcwh.entrydata.EntrydataGrid',
    ],
    controller: 'entrydata',
    viewModel: {
        type: 'entrydata'
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
        locked: true,
        dataIndex: 'resTitle'
    }, {
        xtype: 'datecolumn',
        text: '信息资源发布日期',
        dataIndex: 'pubDate',
        format: 'Y-m-d H:i:s'
    }, {
        text: '信息资源摘要',
        dataIndex: 'abstracts'
    }, {
        text: '信息资源提供方',
        columns: [{
            text: '资源提供单位',
            dataIndex: 'rpOrgName'
        }, {
            text: '资源提供方地址',
            dataIndex: 'cntAdd'
        }]
    }, {
        text: '关键字说明',
        columns: [{
            text: '关键字',
            dataIndex: 'keyword'
        }, {
            text: '词典名称',
            dataIndex: ''
        }]
    }, {
        text: '信息资源分类',
        columns: [{
            text: '分类方式',
            dataIndex: 'catalogGB',
            renderer: function (value) {
                if (value != undefined) {
                    if (value.length == 0) {
                        return ""
                    } else {
                        var a = value[0].title;
                        for (var i = 1; i < value.length; i++) {
                            a += ',' + value[i].title
                        }
                        return a
                    }
                } else {
                    return ""
                }
            }
        }, {
            text: '类目名称',
            dataIndex: 'catalogGB',
            renderer: function (value) {
                if (value != undefined) {
                    if (value.length == 0) {
                        return ""
                    } else {
                        var a = value[0].title;
                        for (var i = 1; i < value.length; i++) {
                            a += ',' + value[i].title
                        }
                        return a
                    }
                } else {
                    return ""
                }
            }
        }, {
            text: '类目编码',
            dataIndex: 'catalogGB',
            renderer: function (value) {
                if (value != undefined) {
                    if (value.length == 0) {
                        return null
                    } else {
                        var a = value[0].code;
                        for (var i = 1; i < value.length; i++) {
                            a += ',' + value[i].code
                        }
                        return a
                    }
                } else {
                    return null
                }
            }
        }]
    }, {
        text: '在线资源链接地址',
        dataIndex: 'onLineSrc'
    }, {
        text: '信息资源标识符',
        dataIndex: 'resId'
    }, {
        text: '服务信息',
        columns: [{
            text: '服务地址',
            dataIndex: 'serviceURL'
        }, {
            text: '服务类型',
            dataIndex: 'serviceType',
            renderer: function (value) {
                if (value == undefined) {
                    return null
                } else {
                    return value.title
                }
            }
        }]

    }, {
        text: '元数据标识符',
        dataIndex: 'mdId'
    }, {
        text: '元数据维护方',
        columns: [{
            text: '元数据联系单位',
            dataIndex: 'rpOrgCenter'
        }, {
            text: '元数据维护方地址',
            dataIndex: 'cntAddCenter'
        }]

    }, {
        xtype: 'datecolumn',
        text: '元数据更新日期',
        dataIndex: 'mdDateUpd',
        editor: {
            xtype: 'datefield',
            format: 'Y-m-d h:i:s'
        },
        format: 'Y-m-d H:i:s'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                handler: 'onShow2',
                tooltip: '查看'
            }
        ],
        cls: 'content-column',
        align: 'center',
        width: 50,
        text: '操作',
        right: 0,
        locked: true

    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
