Ext.define('Cmdb.view.asset.bmzcqd.BmzcqdController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.bmzcqd',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onRender: function (view, event) {
        var self = this,
            xtype = view.up().xtype,
            treePanel = self.lookup('needTree');
        if (xtype != "qlzcqd") {
            var fileName = 'bmzcqd',
                file = 'BmzcqdTree';
        } else {
            var fileName = 'qlzcqd',
                file = 'QlzcqdTree';
        }
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'app/store/data/asset/' + fileName + '/' + file + '.json',

                reader: {
                    rootProperty: function (rs) {
                        if (rs.children != null) {
                            if (rs.children.length == 1) {
                                return rs.children[0].children[0].children;
                            } else {
                                return rs.children

                            }
                        }
                    },
                }
            }
        };
        treePanel.setStore(store);
    },
    onSelect: function (model, record, rowindex, event) {
        var self = this,
            code = record.get('code'),
            grid = self.lookup('needGrid'),
            store = Ext.getStore('mlxsl').data,
            arr = [],
            needData = store.items;
        Ext.Array.each(needData, (item, index, oldArr) => {
            var sl_code = item.get('sl_code');
            if (sl_code != null && sl_code == code) {
                arr.push(item.data);
            }
        });
        grid.setStore({autoLoad: true, data: arr});
        this.setTextValue(['mlxName', 'mlxCode', 'mlxDes'], ['text', 'code', 'des'], record);
    },

    //选择资源后设置Value
    setTextValue: function (itemArr, dataArr, record) {
        var me = this;
        Ext.Array.each(itemArr, (item, index, arr) => {
            me.lookup('mlxName').setValue(record.get(dataArr[index]));
        })
    },

    onApply: function (view, rowindex, colindex, btn, event, record, tr) {
        // this.open({
        //     xtype: 'zcqd'
        //
        // }, {
        //     width: 800,
        //     height: 600,
        //     title: '选择资产',
        //     gridView: this.getView()
        // });

        var name = record.get('y_title');
        this.open({
            xtype: 'yzysq',
        }, {
            width: 800,
            height: 600,
            needSQtype: record.get('type'),
            title: '申请' + name,
            needAllData: JSON.stringify(record.data)
        })
    },
    onAdd: function (btn) {
        var grid = btn.up('bmzcqd-grid'),
            store = grid.getStore(),
            data = store.getData();
        if (data.length == 0) {
            Ext.Msg.alert('提示', '当前未指定新增类型');
        } else {
            var type = data.items[0].get('type'),
                arr = {
                    jkzy: 'jkpz-edit',
                    yzysq: 'zc-edit',
                    rjfw: 'fwsmwh-edit'
                };
            this.open({
                xtype: arr[type],
                needType: 'edit',
            }, {
                width: 800,
                height: 600,
                title: '新增'
            })
        }
    },
    onEdit: function (tr, td, view, index, a, record) {
        var type = record.get('type'),
            arr = {
                jkzy: 'jkpz-edit',
                yzysq: 'zc-edit',
                rjfw: 'fwsmwh-edit'
            };

        this.open({
            xtype: arr[type],
            needType: 'edit',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            width: 700,
            height: 600,
            title: '编辑'
        })
    },
    onSetUp: function () {
        console.log('配置')
    },
    onCopy: function () {
        console.log('复制')
    },
    onShow: function (tr, td, view, index, a, record) {
        var type = record.get('type'),
            arr = {
                jkzy: 'jkpzwh-show',
                yzysq: 'zyfpwh-show',
                rjfw: 'fwsmwh-whshow'
            };

        this.open({
            xtype: arr[type],
            needType: 'show',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            width: 700,
            height: 600,
            title: '查看' + record.get('y_title')
        })
    },
    onCancel: function (btn) {
        btn.up('window').close()
    },
    onSure: function (btn) {
        btn.up('window').close()
    },
});