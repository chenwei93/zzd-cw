/**
 * Created by chenwei on 2017/8/14.
 */
Ext.define('AP.view.application.ApplicationGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'application-grid',


    margin: '10 0 0 0',
    scrollable: true,
    title: '所包含的服务内容',
    store: {},
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '服务名称',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '服务唯一码',
        dataIndex: 'qname',
        flex: 1
    }, {
        text: '类型',
        dataIndex: 'qualified',
        flex: 1
    }],
    listeners: {
        render: function () {
            var me = this;
            var services = me.up('window').record.data.services;
            if (services[0] != null) {
                var store = {
                    model: 'Service',
                    data: services
                };
                me.setStore(store);
            }
        }
    }
});