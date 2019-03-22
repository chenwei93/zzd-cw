Ext.define('Cmdb.view.asset.zcfw.Zcfw', {
    extend: 'Ext.grid.Panel',
    xtype: 'zcfw',


    requires: [
        'Cmdb.view.asset.zcfw.yzysq.Yzysq',
        'Cmdb.view.asset.zcfw.sqsh.Sqsh',
        'Cmdb.view.asset.zcfw.ZcfwController',
        'Cmdb.view.asset.zcfw.ZcfwModel'
    ],
    store: {
        type: 'wddb'
    },
    controller: 'wddb',
    tbar: [{
        ui: 'default',
        text: '资产申请',
        handler: 'onZcsq'
    }, '->', {
        xtype: 'combo',
        reference: 'chooseType',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择状态',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '待办', value: 'db'},
                {name: '已办', value: 'yb'},
                {name: '办结', value: 'bj'},
                {name: '关注', value: 'gz'}
            ]
        },
        value: 'db',
        listeners: {
            change: 'onChooseSelect'
        }
    }, {
        xtype: 'datefield',
        emptyText: '开始日期'
    }, '-', {
        xtype: 'datefield',
        emptyText: '结束日期'
    }, {
        xtype: 'button',
        text: '搜索',
        handler: 'onSearch'

    }],
    columns: [{

        dataIndex: 'y_title',
        text: '名称',
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
                var Month = data.getMonth()+1;
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
        render: 'onWddbRender'
    }
});