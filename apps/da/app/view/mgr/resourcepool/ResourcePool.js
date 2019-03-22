Ext.define('DA.view.mgr.resourcepool.ResourcePool', {
    extend: 'Ext.grid.Panel',
    xtype: 'resourcepool',

    requires: [
        'DA.model.ResourcePool',
        'DA.model.chooseResource',
        'DA.view.mgr.resourcepool.ResourcePoolModel',
        'DA.view.mgr.resourcepool.ResourcePoolShowDb',
        'DA.view.mgr.resourcepool.ResourcePoolShowFile',
        'DA.view.mgr.resourcepool.ResourcePoolController',
        'DA.view.mgr.resourcepool.ResourcePoolAddChoose'
    ],
    controller: 'resourcepool',
    viewModel: {
        type: 'resourcepool'
    },
    bind: {
        store: '{list}'
    },

    tbar: [{
        text: '新增',
        ui: 'default',
        iconCls: 'x-fa fa-plus-circle',
        handler: 'onNew'
    }],
    listeners: {
        'rowdblclick': 'onShow'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '任务',
        flex: 2,
        dataIndex: 'name'
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'code'
    }, {
        text: '路径/库名',
        flex: 1,
        dataIndex: 'base'
    }, {
        text: '轮询时间',
        flex: 1,
        dataIndex: 'pollingTimeMillis'
    }, {
        text: '资源形态',
        flex: 1,
        dataIndex: 'allowFormat',
        renderer: function (value) {
            var arr = {
                Db: '数据库',
                File: '文件',
                Hdfs: 'HDFS',
                Http: 'HTTP',
                Service: '外部接口'
            };
            var data = arr[value] ? arr[value] : value;
            return data
        }
    }, {
        xtype: 'actioncolumn',
        items: [{
            iconCls: 'x-fa fa-eye',
            tooltip: '查看',
            handler: 'onShow1'
        }, {
            iconCls: 'x-fa fa-pencil',
            tooltip: '编辑',
            handler: 'onEdit'
        }, {
            iconCls: 'x-fa fa-close',
            tooltip: '编辑',
            handler: 'onDelete'
            // }, {
            //     iconCls: 'x-fa fa-list',
            //     handler: 'onShowResource',
            //     tooltip: '预览资源池'
        }, {
            iconCls: 'x-fa fa-retweet',
            handler: 'onSyncZyk',
            tooltip: '同步'
        }],
        width: 100,
        align: 'center',
        text: '操作'
    }],

});
