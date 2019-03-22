Ext.define('DA.view.dataservice.entrydata.EntryDataDetails', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata-details',


    emptyText: "暂无数据",
    viewConfig: {
        deferEmptyText: false

    },
    columns: [{
        text: '信息项名称',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '信息项标识',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: '数据类型',
        dataIndex: 'dataType',
        renderer: function (value) {
            if (value == 'Text') {
                return '文本'
            } else {
                return value
            }
        }
    }, {
        text: '数据长度',
        dataIndex: 'dataLength'
    }],
    listeners: {
        render: function () {
            var me = this;
            var needId = this.up('window').needId;
            if (needId != null) {
                Ext.Ajax.request({
                    url: '/drdms/api/entryDatas/' + needId,
                    success: function (rs) {
                        var store = JSON.parse(rs.responseText).fields.items;
                        var data = {
                            autoLoad: true,
                            data: store
                        };
                        me.setStore(data);
                    }
                })
            }

        }
    }

});
