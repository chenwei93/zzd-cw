Ext.define('Cmdb.store.asset.DealFwzc', {
    extend: 'Ext.data.Store',

    storeId: 'deal-fwzc',

    fields: [
        'name', 'title', 'user'
    ],

    data: {
        items: [{
            name: 'sq', title: '申请', user: null
        }, {
            name: 'sqcs', title: '申请初审', user: 'mozs', table: 'fwsmwh-edit', show: 'fwsmwh-show', text: '填写服务说明维护'
        }, {
            name: 'ss', title: '实施', user: 'chenw', table: 'fwsmwh-edit', show: 'fwsmwh-show', text: '填写服务说明维护'
        }, {
            name: 'jgsh', title: '结果审核', user: 'wangs', table: 'fwsmwh-edit', show: 'fwsmwh-show', text: '填写服务说明维护'
        }, {
            name: 'jggz', title: '结果告知', user: 'fangr', table: 'fwsmwh-edit', show: 'fwsmwh-show', text: '填写服务说明维护'
        }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
