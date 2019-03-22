Ext.define('DA.view.mgr.resourcepool.ResourcePoolAddFile', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-addfile',


    controller: 'resourcepool-add',
    viewModel: true,
    config: {
        entityId: null
    },
    layout: 'column',
    defaults: {
        xtype: 'textfield',
        anchor: '100%',
        columnWidth: 0.5,
        margin: 10
    },
    defaults1: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%',
        margin: 10
    },
    tbar: [
        {
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
        xtype: 'displayfield',
        fieldLabel: '资源形态',
        name: 'allowFormat',
        bind: '{allowFormat}'
    }, {
        xtype: 'displayfield',
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
        valueField: 'id',
        queryMode: 'local'
    }, {
        xtype: 'displayfield',
    }, {
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
        fieldLabel: '轮询时间',
        columnWidth: 0.4,
        name: 'pollingTimeMillis',
        bind: '{pollingTimeMillis}'
    }, {
        columnWidth: 0.1,
        value: '毫秒',
        xtype: 'displayfield'
    }, {
        columnWidth: 1,
        xtype: 'fieldset',
        collapsible: false,
        layout: 'column',
        defaults: {
            xtype: 'radiogroup',
            columnWidth: 0.5
        },
        defaults1: {
            flex: 1,
            xtype: 'container',
            layout: 'form'
        },
        items: [
            {
                fieldLabel: '启用监控',
                name: 'enableWatched',
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
                bind: '{autoCreateResource}'
            }, {
                fieldLabel: '创建索引',
                name: 'enableSearch',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'}
                ],
                bind: '{enableSearch}'

            }, {
                fieldLabel: '自动编目',
                name: 'enableIndexer',
                bind: '{enableIndexer}',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'}
                ]
            }]
    }, {
        xtype: 'textarea',
        fieldLabel: '备注',
        columnWidth: 1,
        name: 'memo',
        bind: '{memo}'
    }],
    listeners: {
        render: 'onFileRender'
    }
});
