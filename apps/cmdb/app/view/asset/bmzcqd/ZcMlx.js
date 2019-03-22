Ext.define('Cmdb.view.asset.bmzcqd.Zcmlx', {
    extend: 'Ext.panel.Panel',
    xtype: 'zc-mlx',


    requires: [
        'Cmdb.view.asset.bmzcqd.ZcmlxController',
        'Cmdb.view.asset.bmzcqd.ZcChooseSJY',
        'Cmdb.view.asset.bmzcqd.ZcChooseGx',
        'Cmdb.view.asset.bmzcqd.ZcmlxAdd',
        'Cmdb.view.asset.bmzcqd.ZcmlxGrid',
    ],
    controller: 'zc-mlx',
    scrollable: true,
    layout: 'hbox',
    items: [{
        flex: 1,
        tbar: [{
            text: '新增',
            handler: 'onAdd'
        }],
        xtype: 'treepanel',
        reference: 'mlxTree',
        rootVisible: false,
        scrollable: true,
        store: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'app/store/data/asset/qlzcqd/QlzcqdTree.json',
            }
        },
        columns: [{
            xtype: 'treecolumn',
            text: '名称',
            dataIndex: 'text',
            flex: 1
        }],
        listeners: {
            select: 'onSelect'
        }

    }, {
        flex: 2,
        xtype: 'gridpanel',
        scrollable: true,
        reference: 'dataSetGrid',
        columns: [{
            text: '名称',
            dataIndex: 'text',
            flex: 1
        }, {
            text: '编码',
            dataIndex: 'code',
            flex: 1
        }, {
            text: '类型',
            dataIndex: 'type',
            renderer: function (data) {
                var arr = {
                    string: '字符型',
                    number: '数字型',
                    dataset: '数据字典',
                    date: '日期型',
                    boolean: '布尔型',
                    Text:'文本型',
                    Date:'日期型',
                    Directory:'数据字典',
                    Composite:'数据字典'
                };
                if (arr[data] != null) {
                    return arr[data];
                } else {
                    return data
                }
            },

            flex: 1
        }, {
            text: '继承',
            dataIndex: 'inherit',
            renderer: function (data) {
                if (data == true) {
                    return '是'
                } else {
                    return '否'
                }
            }
        }]

    }]


});
