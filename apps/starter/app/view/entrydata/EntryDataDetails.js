Ext.define('Starter.view.entrydata.EntryDataDetails', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata-details',

    columns: [{
        text: '信息项名称',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '数据类型',
        dataIndex: 'dataType'
    }, {
        text: '数据长度',
        dataIndex: 'dataLength'
    }],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        var store = this.up('window').record;
        console.log(store);
        if (store != null) {
            store = store.items;
        } else {
            store = {
                title: '暂无数据'
            };
        }
        var data = {
            autoLoad: true,
            data: store
        };
        me.setStore(data);
    }

});