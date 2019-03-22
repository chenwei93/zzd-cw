Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePool', {
    extend: 'Ext.grid.Panel',
    xtype: 'resourcepool',

    requires: [
        'Cmdb.model.ResourcePool',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolModel',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolShowDb',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolShowFile',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolEditDb',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolEditFile',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolController',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddChoose'
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
        dataIndex: 'allowFormat'
    }, {
        text: '当前状态',
        dataIndex: 'enableWatched',
        flex: 1,
        renderer: function (v) {
            if (v == false) {
                return '<p style="text-align: center;margin:0;"><span class="x-fa fa-stop" style="color: grey;text-align: center"></span></p>'
            } else {
                return '<p style="text-align: center;margin:0;"><span class="x-fa fa-play" style="color: #008B45;text-align: center"></span></p>'
            }
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
        }, {
            iconCls: 'x-fa fa-stop',
            handler: 'onPlay',
            tooltip: '暂停'
        }],
        width: 100,
        right: 0,
        align: 'center',
        text: '操作',
        renderer: function (a, b, record, d, e, f) {
            var enableWatched = record.data.enableWatched;
            if (enableWatched == false) {
                this.items[3].iconCls = 'x-fa fa-play';
                this.items[3].tooltip = '开启';
            } else {
                this.items[3].iconCls = 'x-fa fa-stop';
                this.items[3].tooltip = '暂停';
            }
        }
    }]
});