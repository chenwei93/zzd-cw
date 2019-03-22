Ext.define('RBase.view.resourcepool.ResourcePoolShowDb', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-showdb',

    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%',
        padding: '5 10 10 15'
    },
    controller: 'resourcepool-show',
    viewModel: true,
    config: {
        entityId: null
    },
    items: [{
        items: [{
            fieldLabel: '名称',
            flex: 1,
            name: 'name',
            bind: '{name}'
        }, {
            fieldLabel: '编码',
            flex: 1,
            name: 'code',
            bind: '{code}'

        }]
    }, {
        items: [{
            fieldLabel: '路径/库名',
            flex: 1,
            name: 'base',
            bind: '{base}'
        }, {
            fieldLabel: '主机名',
            flex: 1,
            name: 'Rtitle',
            bind: '{Rtitle}'
        }]
    }, {
        items: [{
            fieldLabel: '启用监控',
            flex: 1,
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
            flex: 1,
            name: 'pollingTimeMillis',
            bind: '{pollingTimeMillis}'
        }]
    }, {
        items: [{
            fieldLabel: '资源形态',
            flex: 1,
            name: 'allowFormat',
            bind: '{allowFormat}'
        }, {
            fieldLabel: '自动生成',
            flex: 1,
            name: 'autoCreateResource',
            bind: '{autoCreateResource}',
            renderer: function (value) {
                if (value == true) {
                    return '是'
                } else {
                    return '否'
                }
            }
        }]
    }, {
        items: [{
            fieldLabel: '自动索引',
            flex: 1,
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
            flex: 1,
            name: 'enableIndexer',
            bind: '{enableIndexer}',
            renderer: function (value) {
                if (value == true) {
                    return '是'
                } else {
                    return '否'
                }
            }
        }]
    }, {
        items: [{
            fieldLabel: '备注',
            flex: 1,
            name: 'memo',
            bind: '{memo}'
        }]
    }, {
        items: [{
            xtype: 'fieldset',
            // layout: 'hbox',
            title: '数据库信息',
            flex: 1,
            collapsible: true,
            margin: '5 5 5 5',
            defaults: {
                xtype: 'container',
                layout: 'hbox',
                anchor: '100%',
                padding: '5 10 10 15',
                margin: '0 10 0 0'
            },
            items: [{
                flex: 1,
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: '数据库类型',
                    name: 'dbType',
                    flex: 1,
                    bind: '{dbType}'

                }]

            }, {
                flex: 1,
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: '账户',
                    flex: 1,
                    name: 'username',
                    bind: '{username }'

                }, {
                    xtype: 'displayfield',
                    fieldLabel: '密码',
                    flex: 1,
                    // inputType: 'password',
                    name: 'password',
                    bind: '{password}',
                    renderer: function () {
                        return "********"
                    }
                }]
            }, {
                flex: 1,
                items: [{
                    xtype: 'displayfield',
                    flex: 1,
                    fieldLabel: '连接地址',
                    name: 'jdbcUrl',
                    bind: '{jdbcUrl}'
                }]

            }]
        }]
    }]
});