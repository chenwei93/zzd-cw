Ext.define('Cmdb.view.asset.zcwh.ZcwhGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'zcwh-grid',


    emptyText: "暂无数据",
    viewConfig: {
        deferEmptyText: false

    },
    tbar: {
        xtype: 'container',
        items: [{
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
                hidden: true,
                reference: 'mlxType',
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
            }]
        }, {
            xtype: 'toolbar',
            layout: 'hbox',
            items: [{
                text: '新增',
                handler: 'onAdd'
            }, '->', {
                xtype: 'textfield',
                emptyText: '输入查询内容直接回车',
                reference: 'searchText',
                triggers: {
                    bar: {
                        cls: 'x-form-clear-trigger',
                        handler: function () {
                            this.reset();
                        }
                    }
                },
                listeners: {
                    // specialkey: 'onSpecialkey'
                }
            }]
        }]
    },
    // store: {
    //     type: 'mlxsl'
    // },
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'y_title'
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'y_code'
    }, {
        text: '登记时间',
        dataIndex: 'time',
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
        xtype: 'actioncolumn',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-pencil',
            handler: 'onWh',
            tooltip: '修改'
        }],
        cls: 'content-column',
        align: 'center',
        width: 50,
        text: '操作'
    }]
});