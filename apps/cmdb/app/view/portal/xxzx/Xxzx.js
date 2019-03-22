Ext.define('Cmdb.view.portal.xxzx.Xxzx', {
    extend: 'Ext.grid.Panel',
    xtype: 'xxzx',


    requires: [
        'Cmdb.view.portal.xxzx.XxzxShow',
        'Cmdb.view.portal.xxzx.XxzxEdit',
        'Cmdb.view.portal.xxzx.XxzxController',
        'Cmdb.view.portal.xxzx.XxzxModel'
    ],
    store: {
        type: 'xxzx'
    },

    controller: 'xxzx',
    tbar: [{
        text: '新消息',
        ui: 'default',
        iconCls: 'x-fa fa-commenting-o',
        handler: 'onNewMessage'
    }, '->', {
        xtype: 'datefield',
        emptyText: '开始日期'
    }, '-', {
        xtype: 'datefield',
        emptyText: '结束日期'
    }, {
        xtype: 'button',
        text: '搜索',
        handler: 'onSearch'
    }],
    columns: [{
        dataIndex: 'title',
        flex: 1,
        text: '消息名称'
    }, {
        dataIndex: 'region',
        flex: 1,
        text: '消息来源'
    }, {
        dataIndex: 'c_time',
        renderer: function (data) {
            if (data != undefined) {
                data = new Date(data);
                var Month = data.getMonth()+1;
                var ret = data.getFullYear() + '年' +
                    Month + '月' +
                    data.getDate() + '日' +
                    data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
                return ret
            }
        },
        flex: 1,
        text: '创建时间'
    }, {
        dataIndex: 'des',
        flex: 2,
        text: '消息描述'

    }],
    listeners: {
        render: function () {
            this.getStore().filterBy(function (record) {
                if (record.get('nextperson') == Ext.app.ViewController.LOGIN_USER.name) {
                    return true
                }
            })
        },
        rowdblclick: 'onRowDblclick'
    }
});
