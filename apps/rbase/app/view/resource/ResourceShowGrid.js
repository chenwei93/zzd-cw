Ext.define('RBase.view.resource.ResourceShowGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'resource-showgrid',


    // plugins: {
    //     ptype: 'cellediting',
    //     clicksToEdit: 1
    // },

    store: {
        data: [{}]
    },
    listeners: {
        render: function () {
            var me = this;
            var record = me.up('window').record.data.metadata.fields.items;
            var store = {
                data: record
            };
            this.setStore(store);
        }
    },
    columns: [{
        header: '字段名',
        dataIndex: 'name',
        flex: 1,
        editor: {
            allowBlank: false
        }
    }, {
        header: '中文名',
        dataIndex: 'title',
        flex: 1,

        editor: {
            allowBlank: true
        }

    }]
});