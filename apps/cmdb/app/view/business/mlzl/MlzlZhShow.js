Ext.define('Cmdb.view.business.mlzl.MlzlZhShow', {
    extend: 'Ext.grid.Panel',
    xtype: 'mlzl-zhshow',


    tbar: [{
        text: '新增',
        handler: 'onAdd'
    }],
    store: {
        autoLoad: true,
        data: [{
            zh: "中心",
            pe: "20",
            ss: "15"
        }, {
            zh: "民政局",
            pe: "2",
            ss: "2"
        }, {
            zh: "人社局",
            pe: "3",
            ss: "2"
        }, {
            zh: "卫生局",
            pe: "10",
            ss: "10"
        }, {
            zh: "教育局",
            pe: "5",
            ss: "5"
        }]
    },
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],
    columns: [{
        text: "租户",
        flex: 1,
        dataIndex: 'zh',
        editor: {
            allowBlank: false
        }
    }, {
        text: "配额",
        flex: 1,
        dataIndex: 'pe',
        editor: {
            allowBlank: false
        }

    }, {
        text: "实施",
        flex: 1,
        dataIndex: 'ss',
        editor: {
            allowBlank: false
        }

    }],
    listeners: {
        render: function () {
            var win = this.up('window');
            if (win) {
                if (win.showCode == 'sg') {
                    var store = {
                        autoLoad: true,
                        data: {
                            zh: "民政局",
                            pe: "5",
                            ss: "2"
                        }
                    };
                    this.setStore(store);
                }
            }
        }
    }
});