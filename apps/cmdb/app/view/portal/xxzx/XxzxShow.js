Ext.define('Cmdb.view.portal.xxzx.XxzxShow', {
    extend: 'Ext.form.Panel',
    xtype: 'xxzx-show',


    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        xtype: 'displayfield',
        margin: '10 10 10 10'
    },
    items: [{
        name: 'title',
        columnWidth: 1,
        fieldLabel: '消息名称',
        bind: '{show.title}'
    }, {
        name: 'pre_person',
        fieldLabel: '发送人',
        renderer: function (data) {
            var arr = {
                wangs: '王石',
                chenw: '陈薇',
                fangr: '方荣',
                mozs: '莫智胜'
            };
            return arr[data]
        },
        bind: '{show.pre_person}'
    }, {
        name: 'region',
        fieldLabel: '消息来源',
        bind: '{show.region}'
    }, {
        name: 'des',
        columnWidth: 1,
        bind: '{show.des}',
        fieldLabel: '消息描述'
    }]
});