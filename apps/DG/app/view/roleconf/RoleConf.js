Ext.define('DG.view.roleconf.RoleConf', {
    extend: 'Ext.grid.Panel',
    xtype: 'roleconf',

    requires: [
        'DG.view.roleconf.RoleConfModel',
        'DG.view.roleconf.RoleConfController',
        'DG.view.roleconf.ChooseSql',
        'DG.view.roleconf.RoleConfShow',
    ],
    controller: 'roleconf',
    viewModel: 'roleconf',
    bind: {
        store: '{list}'
    },
    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            defaults: {
                xtype: 'textfield',
                labelWidth: 70,
                margin: 2,
            },
            layout: 'column',
            items: [{
                fieldLabel: '规则名称',
                name: 'name',
                reference: 'name',
                columnWidth: 0.33
            }, {
                xtype: 'combo',
                fieldLabel: '调度规则',
                columnWidth: 0.33,
                store: {
                    autoLoad: true,
                    data: [{
                        name: '只执行一次',
                        value: 1
                    }, {
                        name: '每月',
                        value: 3
                    }, {
                        name: '每日',
                        value: 2
                    }]
                },
                reference: 'jobType',
                name: 'jobType',
                displayField: 'name',
                valueField: 'value',
            }, {
                xtype: 'combo',
                fieldLabel: '状态',
                columnWidth: 0.33,
                store: {
                    autoLoad: true,
                    data: [{
                        name: '创建',
                        value: 0
                    }, {
                        name: '发布',
                        value: 1
                    }]
                },
                displayField: 'name',
                valueField: 'value',
                reference: 'status',
                name: 'status'
            }, {

                xtype: 'datefield',
                fieldLabel: '运行时间',
                name: 'beginCreateTime',
                reference: 'beginCreateTime',
                bind: '{beginCreateTime}',
                columnWidth: 0.33
            }, {
                xtype: 'displayfield',
                value: '-',
                columnWidth: 0.01
            }, {
                xtype: 'datefield',
                name: 'endCreateTime',
                reference: 'endCreateTime',
                bind: '{endCreateTime}',
                columnWidth: 0.32
            }, {
                xtype: 'displayfield',
                columnWidth: 0.19
            }, '->', {
                xtype: 'button',
                ui: 'default',
                text: '查询',
                handler: 'onSearch',
                columnWidth: 0.07
            }, {
                xtype: 'button',
                text: '重置',
                handler: 'onReset',
                columnWidth: 0.07
            }]
        }]

    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '规则名称',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: '信息资源名',
        flex: 1,
        dataIndex: 'tableName'
    }, {
        text: '规则描述',
        flex: 1,
        dataIndex: 'description'
    }, {
        text: '调度规则',
        flex: 1,
        dataIndex: 'jobType'
    }, {
        text: '创建时间',
        flex: 1,
        dataIndex: 'createDate'
    }, {
        text: '状态',
        flex: 1,
        dataIndex: 'status',
        renderer: function (data) {
            var arr = {
                0: '创建',
                1: '发布'
            };
            try {
                return arr[data]

            } catch (e) {
                return data
            }
        }
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        items: [{
            iconCls: 'x-fa fa-pencil',
            tooltip: '编辑',
            handler: 'onEdit'
        }, {
            iconCls: 'x-fa fa-close',
            tooltip: '删除',
            handler: 'onDelete'
        }, {
            iconCls: 'x-fa fa-location-arrow',
            tooltip: '发布',
            handler: 'onPublish'
        }, {
            iconCls: 'x-fa fa-eye',
            tooltip: '查看',
            handler: 'onShow'
        }, {
            iconCls: 'x-fa fa-backward',
            tooltip: '退回',
            handler: 'onBackWard'
        }],
        width: 100,
        align: 'center',
        tooltip: '操作',
        renderer: function (view, cell, record, roe, col, store, table) {
            var status = record.get('status');
            switch (status) {
                case 0:
                    console.log('publish');
                    this.items[4].hidden = true;
                    this.items[0].hidden = false;
                    this.items[1].hidden = false;
                    this.items[2].hidden = false;
                    break;
                case 1:
                    console.log('new');
                    this.items[0].hidden = true;
                    this.items[1].hidden = true;
                    this.items[2].hidden = true;
                    this.items[4].hidden = false;
                    break;
                default:
                    console.log('no match')
            }
        }
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
