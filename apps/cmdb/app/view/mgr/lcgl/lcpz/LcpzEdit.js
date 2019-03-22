Ext.define('Cmdb.view.mgr.lcgl.lcpz.LcpzEdit', {
    extend: 'Ext.panel.Panel',
    xtype: 'lcpz-edit',


    tbar: [{
        text: '保存',
        handler: 'onSave',
        ui: 'default'
    }, {
        text: '取消',
        handler: 'onCancel',
        ui: 'default'
    }],


    items: [{
        xtype: 'form',
        layout: 'column',
        reference: 'form',
        defaults: {
            xtype: 'textfield',
            columnWidth: 0.5,
            margin: 10
        },
        items: [{
            fieldLabel: '流程名称',
            name: 'title',
            bind: '{show.title}'
        }, {
            fieldLabel: '流程编码',
            name: 'code',
            bind: '{show.code}'

        }]
    }, {
        xtype: 'grid',
        reference: 'grid',
        selModel: 'cellmodel',
        plugins: {
            ptype: 'cellediting',
            clicksToEdit: 1
        },
        tbar: [{
            iconCls: 'x-fa fa-plus',
            handler: 'onAddGridRecord'
        }],
        columns: [
            {
                text: '节点名称',
                dataIndex: 'text',
                flex: 1,
                editor: {
                    allowBlank: false
                }
            }, {
                text: '对应表单',
                dataIndex: 'bd',
                flex: 1,
                renderer: function (data) {
                    var arr = {
                        jkzy: '事件管理表单模版'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                },
                editor: {
                    xtype: 'combo',
                    displayField: 'value',
                    valueField: 'name',
                    store: {
                        data: [{
                            name: "jkzy", value: '事件管理表单模版'
                        }]
                    }
                }

            }, {
                text: '执行主体类型',
                dataIndex: 'type',
                renderer: function (data) {
                    var arr = {
                        auto: '自动',
                        dept: '部门',
                        user: '人员',
                        virtual: '虚拟组'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                },
                editor: {
                    xtype: 'combo',
                    displayField: 'value',
                    valueField: 'name',
                    store: {
                        data: [{
                            name: "auto", value: '自动'
                        }, {
                            name: "dept", value: '部门'
                        }, {
                            name: "user", value: '人员'
                        }, {
                            name: "virtual", value: '虚拟组'
                        }]
                    }
                },
                flex: 1
            }, {

                text: '执行主体',
                dataIndex: 'user',
                renderer: function (data) {
                    var arr = {
                        wangs: '王石',
                        chenw: '陈薇',
                        mozs: '莫智胜',
                        fangr: '方荣'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                },
                editor: {
                    xtype: 'tagfield',
                    displayField: 'value',
                    valueField: 'name',
                    store: {
                        data: [{
                            name: "wangs", value: '王石'
                        }, {
                            name: "chenw", value: '陈薇'
                        }, {
                            name: "mozs", value: '莫智胜'
                        }, {
                            name: "fangr", value: '方荣'
                        }]
                    }
                },
                flex: 1
            }, {
                xtype: 'actioncolumn',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-times',
                        tooltip: '删除',
                        handler: 'onDelete'
                    }
                ],

                cls: 'content-column',
                width: 50,
                align: 'center',
                text: '操作'
            }]
    }],
    listeners: {
        render: 'onRender'
    }

});