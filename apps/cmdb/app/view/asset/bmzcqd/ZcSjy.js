Ext.define('Cmdb.view.asset.bmzcqd.ZcSjy', {
    extend: 'Ext.tree.Panel',
    xtype: 'zc-sjy',


    requires: [
        'Cmdb.view.asset.bmzcqd.ZcSjyController',
        'Cmdb.view.asset.bmzcqd.ZcSjyEdit',
        'Cmdb.view.asset.bmzcqd.ZcSjyFl',
        'Cmdb.view.asset.bmzcqd.ZcSjyZd',
    ],
    tbar: [{
        text: '新增',
        handler: 'onAdd'
    }],
    controller: 'zc-sjy',
    rootVisible: false,
    store: {
        type: 'tree',
        autoLoad: true,
        folderSort: true,
        proxy: {
            type: 'ajax',
            url: 'app/store/data/asset/entryset/package.json',
            reader: {
                rootProperty: function (rs) {
                    if (rs.children != null) {
                        if (rs.children.length == 1) {
                            return rs.children[0].children;
                        } else {
                            return rs.children
                        }
                    }
                }
            }
        }
    },
    columns: [{
        xtype: 'treecolumn',
        text: '名称',
        flex: 1,
        dataIndex: 'text'
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'extraAttributes',
        renderer: function (data) {
            return data.name
        }
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '修改',
                handler: 'onEdit'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]
});
