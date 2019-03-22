Ext.define('DA.view.dataservice.entry.EntryViewDataset', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryview-dataset',


    requires:[
        'DA.view.dataservice.entry.EntryViewDatasetController',
    ],
    bodyPadding: 10,
    height: 510,
    emptyText: "暂无数据",
    viewConfig: {
        deferEmptyText: false

    },
    columns: [{
        header: '字段名',
        dataIndex: 'name',
        flex: 1

    }, {
        header: '中文名',
        dataIndex: 'title',
        flex: 1
    }, {
        header: '数据长度',
        dataIndex: 'dataLength',
        flex: 1

    }, {
        header: '数据类型',
        dataIndex: 'dataType',
        flex: 1,
        renderer: function (value) {
                if (value == 'Text') {
                    return '文本'
                } else if (value == 'Numeric') {
                    return '数值型'
                } else if (value == 'Boolean') {
                    return '布尔型'
                } else if (value == 'Date') {
                    return '日期型'
                } else if (value == 'Directory') {
                    return '数据字典'
                }else if(value == 'Lob') {
                    return '大字段'
                }else{
                    return value
                }
            }
    }, {
        header: '可空',
        dataIndex: 'notNull',
        flex: 1,
        renderer: function (data) {
            if (data == 'false') {
                return "是";
            } else {
                return "否";
            }
        }

    }, {
        header: '主键',
        dataIndex: 'alias',
        flex: 1,
        renderer: function (data) {
            if (data == 'id') {
                return "是";
            } else {
                return "否";
            }
        }
    },{
        text: "业务类型",
        dataIndex: 'attributes',
        flex: 1,
        renderer: function (data) {
            var arr = {
                fj: '附件'
            };
            if (arr[data]) {
                return arr[data]
            } else {
                if (data && data.editor) {
                    var jude = data.editor.substring(0, data.editor.indexOf(':'));
                    if (jude == 'attachment') {
                        data = 'fj';
                        return arr[data]
                    }
                } else {
                    return data
                }


            }
        }

    }],
    listeners: {
        render: function () {
            var me = this;
            var entityId = me.up('entry-view').entityId;
            Ext.Ajax.request({
                url: '/drdms/api/entryDatas/' + entityId,
                success: function (rs) {
                    var rs = JSON.parse(rs.responseText),
                        items = "";
                    if (rs.hasOwnProperty('fields')) {
                        if (rs.fields.hasOwnProperty('items')) {
                            if (rs.fields.items != null) {
                                items = rs.fields.items;
                            }
                        }
                    }
                    var store = {
                        autoLoad: true,
                        data: items
                    };
                    me.setStore(store);
                }

            });
        }
    }
});
