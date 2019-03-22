Ext.define('RBase.view.resourcepool.ResourcePool', {
    extend: 'Ext.grid.Panel',
    xtype: 'resourcepool',

    requires: [
        'RBase.model.ResourcePool',
        'RBase.view.resourcepool.ResourcePoolModel',
        'RBase.view.resourcepool.ResourcePoolShowDb',
        'RBase.view.resourcepool.ResourcePoolShowFile',
        'RBase.view.resourcepool.ResourcePoolEditDb',
        'RBase.view.resourcepool.ResourcePoolEditFile',
        'RBase.view.resourcepool.ResourcePoolController',
        'RBase.view.resourcepool.ResourcePoolAddChoose'
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
    }, '->', {
        xtype: 'textfield',
        emptyText: '输入查询内容直接回车',
        reference: 'searchText',
        triggers: {
            bar: {
                cls: 'x-form-clear-trigger',
                handler: function () {
                    this.reset();
                }
            }
        },
        listeners: {
            specialkey: 'onSpecialkey'
        }
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
        tooltip: '操作',
        renderer: function (a, b, record, d, e, f) {
            var enableWatched = record.data.enableWatched;
            // console.log(enableWatched);
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
