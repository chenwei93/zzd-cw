Ext.define('Cmdb.store.asset.DealJkzygl', {
    extend: 'Ext.data.Store',

    storeId: 'deal-jkzygl',

    fields: [
        'name', 'title', 'user'
    ],

    data: {
        items: [{
            name: 'sq', title: '申请', user: null
        }, {
            name: 'jsrysh', title: '技术人员审核', user: 'mozs',table: 'jkpz-edit', show: 'jkpz-show', text: '填写接口配置'
        }, {
            name: 'ldsh', title: '领导审核', user: 'wangs',table: 'jkpz-edit', show: 'jkpz-show', text: '填写接口配置'
        }, {
            name: 'ssjk', title: '实施', user: 'chenw',table: 'jkpz-edit', show: 'jkpz-show', text: '填写接口配置'
        }, {
            name: 'jggzjk', title: '结果告知', user: 'fangr',table: 'jkpz-edit', show: 'jkpz-show', text: '填写接口配置'
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
