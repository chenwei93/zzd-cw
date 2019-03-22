Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolAddFile', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-addfile',


    controller: 'resourcepool-add',
    viewModel: true,
    config: {
        entityId: null
    },
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%',
        margin: 10
    },
    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSaveFile'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancelFile'
    }],
    items: [{
        items: [{
            xtype: 'displayfield',
            fieldLabel: '资源形态',
            flex: 1,
            margin: '0 10 0 0',
            name: 'allowFormat',
            bind: '{allowFormat}',
            value: '文件'
        }, {
            xtype: 'combo',
            fieldLabel: '主机',
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
            valueField: 'id',
            queryMode: 'local'
        }]
    }, {
        items: [{
            fieldLabel: '名称',
            flex: 1,
            margin: '0 10 0 0',
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
            margin: '0 10 0 0',
            name: 'base',
            bind: '{base}'
        }, {
            fieldLabel: '轮询时间',
            flex: 0.8,
            name: 'pollingTimeMillis',
            bind: '{pollingTimeMillis}'
        }, {
            flex: 0.2,
            value: '毫秒',
            xtype: 'displayfield'
        }]
    }, {
        margin: '0 10 10 10',
        xtype: 'fieldset',
        collapsible: false,
        layout: 'hbox',
        defaults: {
            flex: 1,
            xtype: 'container',
            layout: 'form'
        },
        items: [{
            items: [{
                fieldLabel: '启用监控',
                flex: 1,
                width: 300,
                name: 'enableWatched',
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
                bind: '{autoCreateResource}'
            }]
        }, {
            items: [{
                fieldLabel: '创建索引',
                flex: 1,
                width: 300,
                name: 'enableSearch',
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
                xtype: 'radiogroup',
                bind: '{enableIndexer}',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'}
                ]
            }]
        }]
    }, {
        items: [{
            xtype: 'textarea',
            fieldLabel: '备注',
            flex: 1,
            name: 'memo',
            bind: '{memo}'
        }]
    }]
});