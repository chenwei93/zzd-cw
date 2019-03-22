Ext.define('Cmdb.view.ops.rzgl.Rzgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'rzgl',


    requires: [
        'Cmdb.view.ops.rzgl.RzglController',
        'Cmdb.view.ops.rzgl.RzglModel',
        'Cmdb.view.ops.rzgl.RzglShow',
        'Cmdb.view.ops.gdgl.cjgd.RzCjgd'
    ],
    viewModel: {
        type: 'rzgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'rzgl',
    scrollable: true,
    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'datefield',
                labelWidth: 70,
                fieldLabel: '产生日期',
            }, '-', {
                xtype: 'datefield',
            }, '->', {
                xtype: 'combo',
                displayField: 'name',
                valueField: 'value',
                fieldLabel: '级别',
                labelWidth: 50,
                store: {
                    data: [{
                        name: '信息', value: 'information'
                    }, {
                        name: '调试', value: 'debug'
                    }, {
                        name: '警告', value: 'warn'
                    }, {
                        name: '错误', value: 'error'
                    }, {
                        name: '严重错误', value: 'serious'
                    }]
                }
            }, {
                xtype: 'textfield',
                labelWidth: 50,
                fieldLabel: '关键字',
            }, '->', {
                text: '查询',
                handler: 'onSearch'
            }]
        }]
    },
    columns: [{
        text: '时间',
        dataIndex: 'date',
        renderer: function (data) {
            if (data != undefined) {
                data = new Date(Number(data));
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
        text: '内容',
        dataIndex: 'content',
        flex: 2
    }, {
        text: '级别',
        dataIndex: 'level',
        renderer: function (data) {
            var arr = {
                information: '信息',
                debug: '调试',
                warn: '警告',
                error: '错误',
                serious: '严重错误'
            };
            if (arr[data]) {
                return arr[data]
            } else {
                return data
            }
        },
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                tooltip: '查看异常',
                handler: 'onShowError'

            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-external-link-square',
                tooltip: '生成工单',
                handler: 'onCreateGD'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }],

    columnLines: true,
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        plugins: 'ux-progressbarpager'
    }
});
