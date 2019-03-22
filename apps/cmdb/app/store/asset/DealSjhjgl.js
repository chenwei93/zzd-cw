Ext.define('Cmdb.store.asset.DealSjhjgl', {
    extend: 'Ext.data.Store',

    storeId: 'deal-sjhjgl',

    fields: [
        'name', 'title', 'user'
    ],

    data: {
        items: [{
            name: 'sq', title: '申请', user: null
        }, {
            name: 'hj_jsrysh', title: '技术人员审核', user: 'mozs', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'hj_jsryqr', title: '技术人员确认', user: 'fangr', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'hj_ldsh', title: '领导审核', user: 'wangs', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'hj_ssjk', title: '实施', user: 'chenw', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
        }, {
            name: 'hj_jggzjk', title: '结果告知', user: 'fangr', table: 'sjbdwh-form', show: 'sjbdwh-show', text: '填写数据资产配置表'
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
