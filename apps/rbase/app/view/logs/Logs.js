Ext.define('RBase.view.logs.Logs', {
    extend: 'Ext.grid.Panel',
    xtype: 'logs',

    requires: [
        'RBase.view.logs.LogsModel',
        'RBase.view.logs.LogsController'
    ],
    controller: 'logs',
    viewModel: {
        type: 'logs'
    },
    bind: {
        store: '{list}'

    },
    tbar: ['->', {
        xtype: 'textfield',
        labelWidth: 40,
        fieldLabel: 'SQL',
        reference: 'searchText',
        emptyText: '输入查询内容回车',
        triggers: {
            bar: {
                cls: 'x-form-clear-trigger',
                handler: function () {
                    this.reset();
                }
            }
        },
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        xtype: 'combo',
        fieldLabel: '成功',
        labelWidth: 40,
        displayField: 'text',
        valueField: 'value',
        emptyText: '成功状态',
        store: {
            fields: ['text', 'value'],
            data: [
                {text: '全部', value: 'all'},
                {text: '是', value: 'true'},
                {text: '否', value: 'false'}
            ]
        },
        listeners: {
            change: 'onChange'
        }

    }],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p><b>SQL:</b> {sql}</p>',
            '<p><b>参数:</b> {params}</p>',
            '<p><b>失败原因:</b> {failureMsg}</p>',{

            }
        )
    }],
    viewConfig: {
        stripeRows: false,
        getRowClass: function (record, rowIndex) {//CSS class name to add to the row.获得一行的css样式
            if (record.get('success') == false) {
                return 'gridrowbg';
            }


        }
    },
    columns: [{
        text: 'SQL',
        dataIndex: 'sql',
        flex: 2,
    }, {
        text: '调用时间',
        dataIndex: 'start',
        flex: 1,
        renderer: function (data) {
            var time = new Date(data);
            var showTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' +
                time.getDate() + ' ' +
                time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
            return showTime
        }
    }, {
        text: '结束时间',
        dataIndex: 'end',
        flex: 1,
        renderer: function (data) {
            var time = new Date(data);
            var showTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' +
                time.getDate() + ' ' +
                time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
            return showTime
        }
    }, {
        text: '用时',
        flex: 1,
        dataIndex: 'period'
    }, {
        xtype: 'booleancolumn',
        trueText: '是',
        falseText: '否',
        flex: 1,
        text: '成功',
        dataIndex: 'success',
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }

});