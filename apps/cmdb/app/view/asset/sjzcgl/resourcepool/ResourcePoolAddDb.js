Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddDb', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-adddb',

    controller: 'resourcepool-add',
    viewModel: true,
    config: {
        entityId: null
    },
    height: 600,
    scrollable: true,
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%',
        padding: '5 10 10 15'
    },
    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSaveDb'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancelDb'
    }, {
        text: '测试',
        ui: 'default',
        iconCls: 'x-fa fa-check-square-o',
        handler: 'onTestDb'
    }],
    items: [{
        items: [{
            xtype: 'displayfield',
            fieldLabel: '资源形态',
            flex: 1,
            name: 'allowFormat',
            value: '数据库'
        }, {
            xtype: 'displayfield',
            flex: 1
        }, {
            hidden: true,
            name: '_class',
            value: 'dcsp.rbase.domain.mgr.DbResourcePool'
        }]
    }, {
        items: [{
            xtype: 'combo',
            fieldLabel: '主机',
            margin: '0 5 0 0',
            flex: 1,
            name: 'resourceNode',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: '/rbase/api/resourceNodes'
                }
            },
            displayField: 'title',
            valueField: 'idRel',
            queryMode: 'local'
        }, {
            xtype: 'displayfield',
            flex: 1
        }]
    }, {
        items: [{
            fieldLabel: '名称',
            flex: 1,
            name: 'name',
            margin: '0 5 0 0',
            reference: 'name',
            emptyText: '中文名称',
            bind: '{name}'
        }, {
            fieldLabel: '标识码',
            emptyText: '唯一标识码',
            flex: 1,
            name: 'code',
            bind: '{code}'
        }]
    }, {
        items: [{
            xtype: 'fieldset',
            title: '数据库信息',
            flex: 1,
            collapsible: true,
            margin: '0 5 5 5',
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
                    xtype: 'combo',
                    store: {
                        data: [{
                            name: 'Mysql',
                            value: 'Mysql'
                        }, {
                            name: 'Oracle',
                            value: 'Oracle'
                        }, {
                            name: 'SQLServer',
                            value: 'SQLServer'
                        }, {
                            name: '未知',
                            value: 'Unknown'
                        }]
                    },
                    displayField: 'name',
                    valueField: 'value',
                    fieldLabel: '数据库类型',
                    allBlank: false,
                    name: 'dbType',
                    flex: 1,
                    margin: '0 5 0 0',
                    bind: '{dbType}'
                }, {
                    flex: 1
                }]
            }, {
                flex: 1,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '用户',
                    flex: 1,
                    margin: '0 5 0 0',
                    name: 'username',
                    bind: '{username}'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '密码',
                    flex: 1,
                    margin: '0 0 0 5',
                    inputType: 'password',
                    name: 'password',
                    bind: '{password}'

                }]
            }, {
                flex: 1,
                items: [{
                    xtype: 'textfield',
                    flex: 1,
                    fieldLabel: '连接地址',
                    name: 'jdbcUrl',
                    bind: '{jdbcUrl}'
                }]
            }]
        }]
    }, {
        items: [{
            xtype: 'fieldset',
            flex: 1,
            margin: '0 5 5 5',
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
                    fieldLabel: '启用监控',
                    flex: 1,
                    width: 300,
                    name: 'enableWatched',
                    reference: 'enableWatched',
                    xtype: 'radiogroup',
                    bind: '{enableWatched}',
                    items: [
                        {boxLabel: '是', inputValue: 'true'},
                        {boxLabel: '否', inputValue: 'false', checked: true}
                    ]
                }, {
                    fieldLabel: '创建资源',
                    flex: 1,
                    width: 300,
                    xtype: 'radiogroup',
                    items: [
                        {boxLabel: '是', inputValue: 'true', checked: true},
                        {boxLabel: '否', inputValue: 'false'}
                    ],
                    name: 'autoCreateResource',
                    reference: 'autoCreateResource',
                    bind: '{autoCreateResource}'
                }]

            }, {
                flex: 1,
                items: [{
                    fieldLabel: '创建索引',
                    flex: 1,
                    width: 300,
                    name: 'enableSearch',
                    reference: 'enableSearch',
                    xtype: 'radiogroup',
                    items: [
                        {boxLabel: '是', inputValue: 'true', checked: true},
                        {boxLabel: '否', inputValue: 'false'}
                    ],
                    bind: '{enableSearch}'

                }, {
                    fieldLabel: '自动编目',
                    flex: 1,
                    width: 300,
                    name: 'enableIndexer',
                    reference: 'enableIndexer',
                    xtype: 'radiogroup',
                    bind: '{enableIndexer}',
                    items: [
                        {boxLabel: '是', inputValue: 'true', checked: true},
                        {boxLabel: '否', inputValue: 'false'}
                    ]
                }]
            }]

        }]
    }, {
        items: [{
            fieldLabel: '轮询时间',
            flex: 0.9,
            name: 'pollingTimeMillis',
            emptyText: '轮询时间不得小与1000毫秒',
            margin: '0 5 0 0',
            bind: '{pollingTimeMillis}'
        }, {
            flex: 0.1,
            value: '毫秒',
            xtype: 'displayfield'
        }, {
            fieldLabel: '路径/库名',
            flex: 1,
            name: 'base',
            bind: '{base}'
        }]
    }, {
        items: [{
            xtype: 'textarea',
            flex: 1,
            fieldLabel: '备注',
            name: 'memo'
        }]

    }],
    listeners: {
        render: function () {
            var me = this;
            if (this.config.entityId != null) {
                setTimeout(function () {
                    var data = me.viewModel.data,
                        enableWatched = data.enableWatched,
                        autoCreateResource = data.autoCreateResource,
                        enableSearch = data.enableSearch,
                        enableIndexer = data.enableIndexer;
                    if (enableWatched == true) {
                        me.lookup('enableWatched').items.items[0].setValue(true);
                    } else {
                        me.lookup('enableWatched').items.items[1].setValue(true);
                    }
                    if (autoCreateResource == true) {
                        me.lookup('autoCreateResource').items.items[0].setValue(true);
                    } else {
                        me.lookup('autoCreateResource').items.items[1].setValue(true);
                    }
                    if (enableSearch == true) {
                        me.lookup('enableSearch').items.items[0].setValue(true);
                    } else {
                        me.lookup('enableSearch').items.items[1].setValue(true);
                    }
                    if (enableIndexer == true) {
                        me.lookup('enableIndexer').items.items[0].setValue(true);
                    } else {
                        me.lookup('enableIndexer').items.items[1].setValue(true);
                    }
                }, 200);
            } else {
                setTimeout(function () {
                    me.lookup('name').setValue('');
                }, 150);
            }
        }
    }
});