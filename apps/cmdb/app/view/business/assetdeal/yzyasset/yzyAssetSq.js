Ext.define('Cmdb.view.business.assetdeal.yzyasset.yzyAssetSq', {
    extend: 'Ext.grid.Panel',
    xtype: 'yzyasset-sq',

requires:['Cmdb.view.business.assetdeal.yzyasset.yzyAssetSqController'],
    tbar: [{
        text: '申请',
        handler: 'onZcsq'
    }],
    store: {
        type: 'wddb'
    },
    controller: 'yzyasset-sq',
    columns: [{
        dataIndex: 'y_title',
        text: '待办名称',
        flex: 1
    }, {
        dataIndex: 'status',
        text: '状态',
        flex: 1
    }, {
        dataIndex: 'c_time',
        text: '处理时间',
        renderer: function (data) {
            if (data != undefined) {
                data = new Date(data);
                var Month = data.getMonth() + 1;
                var ret = data.getFullYear() + '年' +
                    Month + '月' +
                    data.getDate() + '日' +
                    data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
                return ret
            }
        },
        flex: 1
    }, {
        dataIndex: 'pre_person',
        text: '上一步操作人',
        renderer: function (data) {
            var arr = {
                wangs: '王石',
                chenw: '陈薇',
                fangr: '方荣',
                mozs: '莫智胜'
            };
            if (arr[data] == null) {
                return data
            } else {
                return arr[data]
            }
        },
        flex: 1
    }, {
        dataIndex: 'now_person',
        text: '当前处理人',
        renderer: function (data) {
            var arr = {
                wangs: '王石',
                chenw: '陈薇',
                fangr: '方荣',
                mozs: '莫智胜'
            };
            if (arr[data] == null) {
                return data
            } else {
                return arr[data]
            }
        },
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                reference: 'dealbtn',
                iconCls: 'x-fa fa-hand-paper-o',
                // tooltip: '处理',
                handler: 'onDeal'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作',
        renderer: function (a, b, record) {
            if (record.get('status') == 'sqsh') {
                this.items[0].tooltip = '申请审核';
            }
        }
    }],
    listeners: {
        render: 'onYzyAssetRender'
    }
});
