Ext.define('DA.view.dataservice.entry.EntryViewLog', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryview-log',

    frame: false,

    store: {
        data: [{}]
    },

    height: 510,
    columns: [{
        header: '处理人',
        dataIndex: 'dealstaff',
        flex: 1,
        renderer: function (value) {
            return '陈薇'
        }
    }, {
        xtype:'datecolumn',
        format: 'Y-m-d H:i:s',
        header: '处理时间',
        dataIndex: 'createTime',
        width: 130,
        flex: 1
    }, {
        header: '操作',
        dataIndex: 'previousState',
        flex: 1,
        width: 70,
        renderer: function (value) {
            if (value == 'Published') {
                return '发布'
            } else if (value == 'Generated') {
                return '确认'

            } else if (value == 'UnSubmitted') {
                return '审核'
            } else if (value == null) {
                return '无'
            }
            else {
                return '生成'
            }
        }
    }, {
        header: '当前状态',
        dataIndex: 'currentState',
        renderer: function (value) {
            if (value == 'Published') {
                return '已发布'
            } else if (value == 'Generated') {
                return '新生成'

            } else if (value == 'UnSubmitted') {
                return '待审核'
            } else {
                return '待发布'

            }

        },
        width: 95
    }],
    listeners:{
        render:function () {
            var me = this;
            var entityId = me.up('entry-view').entityId;
            Ext.Ajax.request({
                url: '/drdms/api/entryDatas/'+entityId,
                // url: 'app/view/entry/data/' + entityId + '.json',
                success: function (rs) {
                    var rs = JSON.parse(rs.responseText).extraAttributes.biz;
                    var store = {
                        autoLoad: true,
                        data: rs
                    };
                    me.setStore(store);
                }
            });
        }
    }
});
