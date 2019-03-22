Ext.define('RBase.view.resourcepool.ResourcePoolEditFile', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcepool-editfile',
    controller: 'resourcepool',
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%',
        padding: '5 10 10 15'
    },
    tbar: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'

    }],
    items: [{
        items: [{
            fieldLabel: '名称',
            flex: 1,
            name: 'name',
            bind: '{resourcepool.name}'
        }, {
            fieldLabel: '编码',
            flex: 1,
            name: 'code',
            bind: '{resourcepool.code}'

        }]
    }, {
        items: [{
            fieldLabel: '路径/库名',
            flex: 1,
            name: 'base',
            bind: '{resourcepool.base}'
        }, {
            fieldLabel: '主机名',
            flex: 1,
            name: 'Rtitle',
            bind: '{resourcepool.Rtitle}'
        }]
    }, {
        items: [{
            fieldLabel: '启用监控',
            flex: 1,
            name: 'enableWatched',
            bind: '{resourcepool.enableWatched}',
            renderer: function (value) {
                if (value == 'true') {
                    return '是'
                } else {
                    return '否'
                }
            }
        }, {
            fieldLabel: '轮询时间',
            flex: 1,
            name: 'pollingTimeMillis',
            bind: '{resourcepool.pollingTimeMillis}'
        }]
    }, {
        items: [{
            fieldLabel: '资源形态',
            flex: 1,
            name: 'allowFormat',
            bind: '{resourcepool.allowFormat}'
        }, {
            fieldLabel: '自动生成',
            flex: 1,
            name: 'autoCreateResource',
            bind: '{resourcepool.autoCreateResource}',
            renderer: function (value) {
                if (value == 'true') {
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
            bind: '{resourcepool.enableSearch}',
            renderer: function (value) {
                if (value == 'true') {
                    return '是'
                } else {
                    return '否'
                }
            }
        }, {
            fieldLabel: '自动编码',
            flex: 1,
            name: 'enableIndexer',
            bind: '{resourcepool.enableIndexer}',
            renderer: function (value) {
                if (value == 'true') {
                    return '是'
                } else {
                    return '否'
                }
            }
        }]
    }, {
        items: [{
            xtype: 'textarea',
            fieldLabel: '备注',
            flex:1,
            name: 'memo',
            bind: '{resourcepool.memo}'
        }]
    }]
});