Ext.define('Cmdb.view.portal.grxx.Grxx', {
    extend: 'Ext.grid.Panel',
    xtype: 'grxx',


    requires: [
        'Cmdb.view.portal.grxx.GrxxEdit',
        'Cmdb.view.portal.grxx.GrxxShow',
        'Cmdb.view.portal.grxx.GrxxController',
        'Cmdb.view.portal.grxx.GrxxModel'
    ],
    viewModel: {
        type: 'grxx'
    },
    bind: {
        store: '{list}'
    },
    controller: 'grxx',
    columns: [{
        text: '人员名称',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: '人员编码',
        flex: 1,
        dataIndex: 'code'
    }, {
        text: '性别',
        flex: 1,
        dataIndex: 'sex'
    }, {
        text: '出生日期',
        flex: 1,
        dataIndex: 'date'
    }, {
        text: '联系电话',
        flex: 1,
        dataIndex: 'telephone'
    }, {
        text: '电子邮箱',
        flex: 1,
        dataIndex: 'email'
    }, {
        text: '证件类型',
        flex: 1,
        dataIndex: 'zjtype',
        renderer: function (data) {
            var arr = {
                edsfz: '二代身份证',
                jsz: '驾驶证',
                jmhkb: '居民户口本',
                gatxz: '港澳通行证',
                hz: '护照'
            };
            return arr[data];
        }

    }, {
        text: '证件号码',
        flex: 1,
        dataIndex: 'idcard'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        width: 70,
        align: 'center',
        items: [{
            iconCls: 'x-fa fa-pencil',
            tooltip: '编辑',
            handler: 'onEdit'
        }, {
            iconCls: 'x-fa fa-eye',
            tooltip: '查看',
            handler: 'onShow'
        }]
    }]
});
