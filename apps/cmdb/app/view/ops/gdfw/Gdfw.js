Ext.define('Cmdb.view.ops.gdfw.Gdfw', {
    extend: 'Ext.grid.Panel',
    xtype: 'gdfw',


    requires: [
        'Cmdb.store.Wddb',
        'Cmdb.view.ops.gdfw.GdfwController',
        'Cmdb.view.ops.gdfw.GdfwModel'
    ],
    // viewModel: {
    //     type: 'gdfw'
    // },
    // bind: {
    //     store: '{list}'
    // },
    store: {
        type: 'wddb'
    },
    controller: 'gdfw',
    tbar: [{
        text: '新增工作',
        ui: 'default',
        handler: 'onNew'
    }, '->', {
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择状态',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '全部', value: 'All'},
                {name: '待办', value: 'Grdb'},
                {name: '已办', value: 'Gryb'}
            ]
        },
        listeners: {
            change: 'onChooseSelect'
        }
    }],
    columns: [{
        dataIndex: 'title',
        text: '资源名称',
        flex: 1
    }, {
        dataIndex: 'name',
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
        flex: 1
    }, {
        dataIndex: 'now_person',
        text: '当前处理人',
        flex: 1
    }, {
        dataIndex: 'next_person',
        text: '下一步操作人',
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-hand-paper-o',
                tooltip: '处理',
                handler: 'onDeal'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }],
    listeners: {
        render: 'onGdfwRender'
    }
});