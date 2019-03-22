Ext.define('DA.view.mgr.resourcepool.ResourcePoolAddDb', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-adddb',

    controller: 'resourcepool-add',
    viewModel: true,
    config: {
        entityId: null,
        projection: null
    },
    height: 600,
    scrollable: true,
    layout: 'column',
    defaults: {
        xtype: 'textfield',
        anchor: '100%',
        padding: '5 10 10 15',
        columnWidth: 0.5
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
    // }, {
    //     text: '重置',
    //     ui: 'default',
    //     iconCls: 'x-fa fa-undo',
    //     handler: 'onResetDb'
    }, {
        text: '测试',
        ui: 'default',
        iconCls: 'x-fa fa-check-square-o',
        handler: 'onTestDb'
    }],
    items: [{
        xtype: 'displayfield',
        fieldLabel: '资源形态',
        name: 'allowFormat',
        bind: '{allowFormat}',
        renderer: function (data) {
            console.log('renderer', data);
            switch (data) {
                case 'Db':
                    return '数据库';
                case '数据库':
                    return '数据库';
                default:
                    return '外部接口'
            }
        }
    }, {
        xtype: 'displayfield',
    }, {
        hidden: true,
        name: '_class',
        value: 'dcsp.rbase.domain.mgr.DbResourcePool'
    }, {
        xtype: 'combo',
        fieldLabel: '主机',
        name: 'resourceNode',
        store: {
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                url: '/rest/resourceNodes'
            }
        },
        displayField: 'title',
        valueField: 'idRel',
        queryMode: 'local',
        bind: '{Rname}',
        listeners: {
            change: 'rNodeChange'
        }
    }, {
        xtype: 'displayfield',
    }, {
        fieldLabel: '名称',
        name: 'name',
        reference: 'name',
        emptyText: '中文名称',
        bind: '{name}',
    }, {
        fieldLabel: '标识名',
        emptyText: '唯一标识名',
        name: 'code',
        bind: '{code}',
        listeners: {
            focus: 'onFocus'
        }
    }, {
        xtype: 'fieldset',
        reference: 'sqlItems',
        title: '数据库信息',
        columnWidth: 1,
        collapsible: true,
        margin: 5,
        padding: 0,
        layout: 'column',
        defaults: {
            anchor: '100%',
            columnWidth: 0.5,
            padding: '5 10 10 15'
        },
        defaults1: {
            xtype: 'container',
            layout: 'hbox',
            anchor: '100%',
            padding: '5 10 10 15',
            margin: '0 10 0 0'
        },
        items: [
            {
                xtype: 'combo',
                store: {
                    data: [
                        {
                            name: 'Mysql',
                            value: 'Mysql'
                        }, {
                            name: 'Oracle',
                            value: 'Oracle'
                        }, {
                            name: 'SQLServer',
                            value: 'SQLServer',
                        }, {
                            name: 'DB2',
                            value: 'DB2'
                        }, {
                            name: 'HBase',
                            value: 'HBase'
                        }, {
                            name: 'MongoDb',
                            value: 'MongoDb',
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
                bind: '{dbType}',
                reference: 'sqlTypeChange',
                listeners: {
                    change: 'onDbTypeChange'
                }
            }, {
                xtype: 'displayfield'
            }, {
                xtype: 'textfield',
                fieldLabel: '用户',
                name: 'username',
                bind: '{username}'
            }, {
                xtype: 'textfield',
                fieldLabel: '密码',
                inputType: 'password',
                name: 'password',
                bind: '{password}'
            }, {
                xtype: 'textfield',
                columnWidth: 1,
                fieldLabel: '连接地址',
                name: 'jdbcUrl',
                reference: 'jdbcUrl',
                bind: '{jdbcUrl}',
                listeners: {
                    blur: 'onJdbcUrlBlur'
                }
            }]
    }, {
        xtype: 'fieldset',
        reference: 'watchItems',
        hidden: true,
        columnWidth: 1,
        margin: 5,
        padding: 0,
        layout: 'column',
        defaults: {
            xtype: 'radiogroup',
            width: 300,
            anchor: '100%',
            padding: '5 10 10 15',
            columnWidth: 0.5
        },
        items: [
            {
                fieldLabel: '启用监控',
                name: 'enableWatched',
                reference: 'enableWatched',
                bind: '{enableWatched}',
                items: [
                    {boxLabel: '是', inputValue: 'true'},
                    {boxLabel: '否', inputValue: 'false', checked: true}
                ]
            }, {
                fieldLabel: '创建资源',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'}
                ],
                name: 'autoCreateResource',
                reference: 'autoCreateResource',
                bind: '{autoCreateResource}'
            }, {
                fieldLabel: '创建索引',
                name: 'enableSearch',
                reference: 'enableSearch',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'}
                ],
                bind: '{enableSearch}'
            }, {
                fieldLabel: '自动编目',
                name: 'enableIndexer',
                reference: 'enableIndexer',
                bind: '{enableIndexer}',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'}
                ]
            }]
    }, {
        fieldLabel: '轮询时间',
        name: 'pollingTimeMillis',
        reference: 'pollingTimeMillis',
        columnWidth: 0.4,
        emptyText: '轮询时间不得小与1000毫秒',
        hidden: true,
        value: '10000',
        bind: '{pollingTimeMillis}'
    }, {
        value: '毫秒',
        columnWidth: 0.1,
        reference: 'time',
        padding: 0,
        hidden: true,
        xtype: 'displayfield'
    }, {
        fieldLabel: '路径/库名',
        name: 'base',
        bind: '{base}',
        columnWidth: 1,
        reference: 'baseUrl',
        listeners: {
            blur: 'onBaseBlur'
        }
    }, {
        xtype: 'textarea',
        reference: 'memo',
        columnWidth: 1,
        fieldLabel: '备注',
        name: 'memo'
    }],
    listeners: {
        render: 'onRpoolDbRender'
    }
});
