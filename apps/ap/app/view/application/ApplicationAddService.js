Ext.define('AP.view.application.ApplicationAddService', {
    extend: 'Ext.grid.Panel',
    xtype: 'appadd-service',

    tbar: [{
        tooltip: '添加',
        iconCls: 'x-fa fa-plus-circle',
        handler: 'onAddService'
    }, {
        tooltip: '删除',
        iconCls: 'x-fa fa-minus-circle',
        handler: 'onDelete'
    }, {
        tooltip: '清空',
        iconCls: 'x-fa fa-trash-o',
        handler: 'onRefresh'
    }],
    emptyText: "未选择服务",
    viewConfig: {
        deferEmptyText: false

    },
    selType: 'checkboxmodel',
    scrollable: true,
    columns: [{
        text: '服务名称',
        flex: 1,
        dataIndex: 'title'
    }],
    listeners: {
        render: function () {
            var me = this;
            var record = me.up('application-add').record;
            if (record != undefined) {
                if (record.data.services[0] != null) {
                    var store = {
                        autoLoad: true,
                        data: record.data.services
                    };
                    me.setStore(store);
                }

            }
        }
    }
});