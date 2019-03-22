Ext.define('DA.view.mgr.resourcepool.ResourcePoolShowDb', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-showdb',


    requires: [
        'DA.view.mgr.resourcepool.ResourcePoolShowController'
    ],
    controller: 'resourcepool-show',
    viewModel: true,
    config: {
        entityId: null
    },
    layout: 'column',
    defaults: {
        xtype: 'displayfield',
        columnWidth: 0.5,
        anchor: '100%',
        padding: '5 10 10 15'
    },
    items: [{
        fieldLabel: '名称',
        name: 'name',
        bind: '{name}'
    }, {
        fieldLabel: '编码',
        name: 'code',
        bind: '{code}'

    }, {
        fieldLabel: '路径/库名',
        name: 'base',
        bind: '{base}'
    }, {
        fieldLabel: '主机名',
        name: 'Rtitle',
        bind: '{Rtitle}'
    }, {
        fieldLabel: '启用监控',
        name: 'enableWatched',
        bind: '{enableWatched}',
        renderer: function (value) {
            if (value == true) {
                return '是'
            } else {
                return '否'
            }
        }
    }, {
        fieldLabel: '轮询时间',
        name: 'pollingTimeMillis',
        bind: '{pollingTimeMillis}'

    }, {
        fieldLabel: '资源形态',
        name: 'allowFormat',
        bind: '{allowFormat}'
    }, {
        fieldLabel: '自动生成',
        name: 'autoCreateResource',
        bind: '{autoCreateResource}',
        renderer: function (value) {
            if (value == true) {
                return '是'
            } else {
                return '否'
            }
        }
    }, {
        fieldLabel: '自动索引',
        name: 'enableSearch',
        bind: '{enableSearch}',
        renderer: function (value) {
            if (value == true) {
                return '是'
            } else {
                return '否'
            }
        }
    }, {
        fieldLabel: '自动编码',
        name: 'enableIndexer',
        bind: '{enableIndexer}',
        renderer: function (value) {
            if (value == true) {
                return '是'
            } else {
                return '否'
            }
        }
    }, {
        fieldLabel: '备注',
        columnWidth: 1,
        name: 'memo',
        bind: '{memo}'
    }, {
        xtype: 'fieldset',
        title: '数据库信息',
        columnWidth: 1,
        collapsible: true,
        margin: 5,
        layout: 'column',
        defaults: {
            xtype: 'displayfield',
            columnWidth: 0.5
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '数据库类型',
            name: 'dbType',
            columnWidth: 1,
            bind: '{dbType}'
        }, {
            xtype: 'displayfield',
            fieldLabel: '账户',
            name: 'username',
            bind: '{username }'
        }, {
            xtype: 'displayfield',
            fieldLabel: '密码',
            name: 'password',
            bind: '{password}',
            renderer: function () {
                return "********"
            }
        }, {
            xtype: 'displayfield',
            columnWidth: 1,
            fieldLabel: '连接地址',
            name: 'jdbcUrl',
            bind: '{jdbcUrl}'
        }]
    }]
});
