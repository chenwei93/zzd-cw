Ext.define('Cmdb.view.asset.zcfw.yzysq.zcqdGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'zcqd-grid',

    emptyText: "暂无数据",
    viewConfig: {
        deferEmptyText: false

    },
    listeners: {
        'rowdblclick': 'onClick'
    },
    tbar: {
        xtype: 'container',
        reference: 'tbarList',
        items: [
            {
            xtype: 'toolbar',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                flex: 1,
                name: 'text',
                reference: 'mlxName',
                fieldLabel: '目录项名称',
                emptyText: '目录项名称'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'code',
                reference: 'mlxCode',
                emptyText: '目录项编码',
                fieldLabel: '目录项编码'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'type',
                reference: 'mlxType',
                hidden: true
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'x_type',
                reference: 'mlxXType',
                hidden: true
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'allData',
                reference: 'allData',
                hidden: true
            }]
        }, {
            xtype: 'toolbar',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                name: 'des',
                flex: 1,
                reference: 'mlxDes',
                fieldLabel: '目录项描述',
                emptyText: '目录项描述'
            }, {
                xtype: 'button',
                reference: 'chooseBtn',
                text: '选择',
                handler: 'onChoose'
            }]
        }]
    },

    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'y_title',
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'y_code',
    }, {
        text: '登记时间',
        dataIndex: 'time',
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
        xtype: 'actioncolumn',
        hidden: true,
        reference: 'actionColumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-share-alt',
                tooltip: '共享',
                excode: 'sjzcgx',
                handler: 'onSjzc'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-undo',
                tooltip: '汇集',
                excode: 'sjzchj',
                handler: 'onSjzc'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-folder-open',
                tooltip: '开放',
                excode: 'sjzckf',
                handler: 'onSjzc'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]
});