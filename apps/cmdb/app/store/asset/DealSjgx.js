Ext.define('Cmdb.store.asset.DealSjgx', {
    extend: 'Ext.data.Store',

    storeId: 'deal-sjgx',

    fields: [
        'name', 'title', 'user'
    ],

    data: {
        items: [{
            name: 'sq', title: '申请', user: null
        }, {
            name: 'jsryqrsh', title: '技术人员确认', user: 'fangr', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'jsryshsh', title: '技术人员审核', user: 'mozs', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'ldshsh', title: '领导审核', user: 'wangs', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'sssh', title: '实施', user: 'chenw', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'jggzsh', title: '结果告知', user: 'fangr', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
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
