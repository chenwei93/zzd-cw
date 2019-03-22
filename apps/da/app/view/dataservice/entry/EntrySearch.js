Ext.define('DA.view.dataservice.entry.EntrySearch', {
    extend: 'Ext.panel.Panel',
    xtype: 'entry-search',
    requires: [
        'DA.view.dataservice.entry.EntrySearchController'
    ],
    controller: 'entry-search',
    width: 600,
    bodyPadding: 10,
    layout: 'anchor',
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        anchor: '100%'
    },

    items: [{
        margin: '200 0 0 0',
        items: [{
            xtype: 'textfield',
            reference: 'searchText',
            width: '80%',
            margin: '0 0 0 130',
            height: 36,
            emptyText: '目录名称、关键字搜索',
            listeners: {
                specialkey: 'onSpecialkey'
            }
        }, {
            xtype: 'button',
            margin: '0 130 0 10%',
            text: '搜索',
            height: 36,
            width: '20%',
            handler: 'onSearch'
        }]
    }, {
        items: [{
            margin: '50 0 0 0',
            xtype: 'grid',
            reference: 'resultGrid',
            flex: 1,
            store: {},
            title: '搜索结果',
            height: 450,
            listeners: {
                'rowdblclick': 'onShow'
            },
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '目录标题',
                dataIndex: 'resTitle',
                flex: 1
            }, {
                text: "资源类型",
                sortable: true,
                flex: 1,
                dataIndex: 'contentType',
                renderer: function (value) {
                    if (value == 'Dataset') {
                        return '数据库表'
                    } else {
                        return value
                    }
                }
            }, {
                text: "资源格式",
                sortable: true,
                flex: 1,
                dataIndex: 'format',
                renderer: function (value) {
                    if (value == 'Db') {
                        return '数据库'
                    } else {
                        return value
                    }
                }
            }, {
                text: "摘要",
                sortable: true,
                flex: 1,
                dataIndex: 'abstracts'
            }],
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                store: this.store
            }

        }]
    }
    ],
    listeners: {
        render: function () {
            var me = this;
            var items = me.items.items[1];
            items.setVisible(false);
        }
    }
})
;
