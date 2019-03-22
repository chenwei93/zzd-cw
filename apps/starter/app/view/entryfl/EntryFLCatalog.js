Ext.define('Starter.view.entryfl.EntryFLCatalog', {
    extend: 'Ext.tree.Panel',
    xtype: 'entryfl-catalog',


    requires: [
        'Starter.model.Catalog',
    ],

    scrollable: true,
    height: 500,
    controller: 'entry-fl',
    selType: 'checkboxmodel',
    rootVisible: false,
    tbar: [{
        text: '提交',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onOK'
    }, {
        text: '关闭',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onNo'
    }, '-', {
        text: '新增分类',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onCreate'

    }],
    columns: [{
        xtype: 'treecolumn',
        text: '主题名称',
        dataIndex: 'text',
        flex: 1,
        sortable: false
    }, {
        text: '主题编码',
        dataIndex: 'code',
        flex: 1,
        sortable: true
    }, {
        text: '主题描述',
        dataIndex: 'desc',
        flex: 2,
        sortable: false
    }],
    listeners: {
        render: function () {
            var me = this;
            var code = this.up().catalogCode;
            var store = {
                autoLoad: true,
                type: 'tree',
                model: 'Catalog',
                proxy: {
                    type: 'ajax',
                    url: '/rest/tree/catalogs/' + code,
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
            me.setStore(store);
        }
    }
});
