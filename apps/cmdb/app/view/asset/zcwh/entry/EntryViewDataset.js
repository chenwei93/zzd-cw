Ext.define('Cmdb.view.asset.zcwh.entry.EntryViewDataset', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryview-dataset',


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
        header: '数据类型',
        dataIndex: 'dataType',
        flex: 1,
        renderer: function (value) {
            if (value == 'Text') {
                return '文本'
            } else {
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
        header: '可查询',
        dataIndex: 'require',
        flex: 1,
        renderer: function (data) {
            if (data == 'false') {
                return "是";
            } else {
                return "否";
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