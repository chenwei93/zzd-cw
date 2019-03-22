Ext.define('Cmdb.view.business.allzcml.AllZcmlController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.allzcml',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSelect: function (a, record) {
        var code = record.get('code');
        var gridView = this.lookup('gridShow');
        var column = [
            {
                dataIndex: 'type',
                text: '类型',
                flex: 1
            }, {
                dataIndex: 'name',
                text: '名称',
                flex: 1
            }, {
                dataIndex: 'factory',
                text: '厂家',
                flex: 1
            }, {
                dataIndex: 'xh',
                text: '型号',
                flex: 1
            }, {
                dataIndex: 'sbh',
                text: '设备号',
                flex: 1
            }, {
                dataIndex: 'zpe',
                text: '总配额',
                flex: 1
            }, {
                dataIndex: 'yfppe',
                text: '已分配配额',
                flex: 1
            }, {
                dataIndex: 'sype',
                text: '剩余配额',
                flex: 1
            }, {
                dataIndex: 'sspe',
                text: '实施配额',
                flex: 1
            }, {
                dataIndex: 'sykj',
                text: '剩余空间',
                flex: 1
            }, {
                dataIndex: 'zh',
                text: '租户',
                flex: 1
            }, {
                dataIndex: 'status',
                text: '运行状态',
                flex: 1,
                renderer: function (data) {
                    return '<span class="x-fa fa-circle" style="color: ' + data + ';"></span>'
                }
            }, {
                xtype: 'actioncolumn',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-circle-o',
                        tooltip: '配额',
                        handler: 'onPE'
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-cog',
                        tooltip: '实施',
                        handler: 'onSS'
                    }
                ],
                cls: 'content-column',
                width: 80,
                align: 'center',
                text: '操作'
            }];
        gridView.setColumns(column);
        if (code == "sancs") {
            var store = {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: 'app/view/business/allzcml/data/detailEntry.json'
                }
            };
        } else {
            var store = {
                autoLoad: true,
                data: ""
            };
        }
        gridView.setStore(store);


    },
    onDeptSelect: function (a, record) {
        var code = record.get('extraAttributes').code;
        var gridView = this.lookup('gridShow');
        var column = [
            {
                dataIndex: 'zh',
                text: '租户',
                flex: 1
            }, {
                dataIndex: 'name',
                text: '资产名称',
                flex: 1
            }, {
                dataIndex: 'pesl',
                text: '配额数量',
                flex: 1
            }, {
                dataIndex: 'peyl',
                text: '配额余量',
                flex: 1
            }, {
                dataIndex: 'sssl',
                text: '实施数量',
                flex: 1
            }, {
                dataIndex: 'bsdd',
                text: '部署地点',
                flex: 1
            }, {
                dataIndex: 'yxzt',
                text: '运行状态',
                flex: 1,
                renderer: function () {
                    return '<span class="x-fa fa-circle" style="color: green;"></span>'
                }
            }, {
                xtype: 'actioncolumn',
                text: '操作',
                items: [{
                    iconCls: 'x-fa fa-pencil',
                    handler: 'onDeptEdit'

                }]
            }];
        if (code == 'MZJ') {
            var store = {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: 'app/view/business/allzcml/data/MZJ.json'
                }

            };
        } else {
            var store = {
                autoLoad: true,
                data: ""
            }
        }
        gridView.setColumns(column);
        gridView.setStore(store);
    },

    onPE: function (view, row, col, btn, time, record, tr) {
        if (row == 0 || row == 2) {
            Ext.Msg.alert('提示','不可操作');
        } else {
            this.open({
                xtype: 'pemgr'
            }, {
                width: 500,
                height: 400,
                record: record,
                title: '配额管理'
            })
        }
    },
    onSS: function (view, row, col, btn, time, record, tr) {
        if (row == 0) {
            Ext.Msg.alert('提示','不可操作');
        }
    },
    onDeptEdit: function (view, row, col, btn, time, record, tr) {
        var peyl = record.get('peyl');
        if (peyl == 0) {
            Ext.Msg.alert('提示','当前配额余量为0，不可操作')
        }
    }

});