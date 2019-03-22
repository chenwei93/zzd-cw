Ext.define('Cmdb.store.asset.DealSjkfgl', {
    extend: 'Ext.data.Store',

    storeId: 'deal-sjkfgl',

    fields: [
        'name', 'title', 'user'
    ],

    data: {
        items: [{
            name: 'sq', title: '申请', user: null
        }, {
            name: 'kf_jsrysh', title: '技术人员审核', user: 'mozs', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'kf_ldsh', title: '领导审核', user: 'wangs', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'kf_ss', title: '实施', user: 'chenw', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'kf_jggz', title: '结果告知', user: 'fangr', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
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
