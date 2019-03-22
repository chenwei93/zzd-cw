Ext.define('DRDMS.view.entry.EntryCatalog', {
    extend: 'Ext.tree.Panel',
    xtype: 'entrycatalog',


    requires: [
        'DRDMS.model.Catalog',
        'DRDMS.view.entry.EntryCatalogController'
    ],

    scrollable: true,
    controller: 'entry-catalog',
    selType: 'checkboxmodel',
    rootVisible: false,
    tbar: [{
        text: '确定',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onOK'
    }, {
        text: '关闭',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onNo'
    }],
    columns: [{
        xtype: 'treecolumn', //this is so we know which column will show the tree
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
            var code = this.up('window').catalogF;
            var store = {
                autoLoad: true,
                type: 'tree',
                model: 'Catalog',
                proxy: {
                    type: 'ajax',
                    url: '/base/api/tree/catalogs/' + code,
                    reader: {
                        rootProperty: 'children',
                        transform: function (rs) {
                            for (var i = 0; i < rs.children.length; i++) {
                                rs.children[i].expanded = true
                            }
                            return rs;
                        }
                    }
                }
            };
            me.setStore(store);
        }
    }
});