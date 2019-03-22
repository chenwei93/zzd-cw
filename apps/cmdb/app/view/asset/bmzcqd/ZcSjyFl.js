Ext.define('Cmdb.view.asset.bmzcqd.ZcSjyFl', {
    extend: 'Ext.grid.Panel',
    xtype: 'zc-sjyfl',


    tbar: [{
        text: '新增',
        handler: 'onAdd'
    }],
    controller: 'zc-sjy',
    store: {
        autoLoad: true,
        proxy: {
            type: 'ajax2',
            url: 'app/store/data/asset/bmzcqd/Catalog.json'
        }
    },
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'text'
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'code'
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
    }],
    plugins: {
        ptype: 'rowwidget',
        onWidgetAttach: function (plugin, bodyComponent, record) {
            var code = record.get('code');
            var store = {
                autoLoad: true,
                folderSort: true,
                rootVisible: false,
                proxy: {
                    type: 'ajax',
                    url: 'app/store/data/asset/entry/' + code + '.json',
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
            };
            bodyComponent.setStore(store);
        },

        widget: {
            rootVisible: false,
            xtype: 'treepanel',
            autoLoad: true,
            bind: {
                store: null
            },
            columns: [{
                xtype: 'treecolumn',
                text: '名称',
                dataIndex: 'text',
                flex: 1
            }]
        }
    }

});