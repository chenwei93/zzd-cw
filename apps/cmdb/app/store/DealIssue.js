Ext.define('Cmdb.store.DealIssue', {
    extend: 'Ext.data.Store',

    storeId: 'dealissue',

    fields: [
        'name', 'title', 'user'
    ],

    data: {
        items: [{
            name: 'yzysq', title: '云资源申请', user: null
        }, {
            name: 'sqsh', title: '申请审核', user: 'mozs', table: 'zyfp-edit', show: 'zyfp-show', text: '填写资源配置表'
        }, {
            name: 'blsh', title: '并联审核', user: null, table: 'zyfp-edit', show: 'zyfp-show', text: '填写资源配置表'
        }, {
            name: 'zgsh', title: '主管审核', user: 'wangs', table: 'zyfp-edit', show: 'zyfp-show', text: '填写资源配置表'
        }, {
            name: 'yzyss', title: '实施', user: null, table: 'zyfp-edit', show: 'zyfp-show', text: '填写资源配置表'
        }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
