Ext.define('DA.view.entry.services.ServicesShowForm', {
    extend: 'Ext.form.Panel',
    xtype: 'services-showform',


    layout: 'column',
    scrollable: true,
    defaults: {
        xtype: 'displayfield',
        margin: 5,
        columnWidth: 0.5
    },
    items: [{
        fieldLabel: '接口类型',
        bind: '{service.qualified}',
        renderer: function (data) {
            var arr = {
                'ENTITY': '查询服务',
                'ENTITY!': '校核服务',
                'EXT_UPDATE': '更新服务',

                'EXT_ATTACHMENT': '附件查看服务'
            };
            return arr[data]

        }
    }, {
        fieldLabel: '版本',
        name: 'version',
        value: '1.0',
    }, {
        fieldLabel: '显示名',
        name: 'title',
        bind: '{service.title}'
    }, {
        fieldLabel: '标示名',
        name: 'name',
        bind: '{service.name}'

    }, {
        fieldLabel: '请求方式',
        name: 'requestType',
        bind: '{service.requestType}'
    }, {
        fieldLabel: '接口方式',
        name: 'jktype',
        value: 'REST',
    }, {
        fieldLabel: '缓存时间',
        columnWidth: 0.45,
        name: 'CacheExpire',
        value: '300',
        bind: '{service.CacheExpire}',
    }, {
        xtype: 'displayfield',
        value: '秒',
        columnWidth: 0.05
    }, {
        fieldLabel: '限定次数',
        columnWidth: 0.4,
        name: 'LimitPerHour',
        bind: '{service.LimitPerHour}'
    }, {
        xtype: 'displayfield',
        value: '/小时',
        columnWidth: 0.1
    }, {
        fieldLabel: '数据集显示名',
        name: 'entityTitle_',
        bind: '{service.entityTitle_}'
    }, {
        fieldLabel: '数据集名称',
        name: 'entityKey_',
        bind: '{service.entityKey_}'
    }, {
        xtype: 'fieldset',
        columnWidth: 1,
        title: '输入',
        items: [{
            xtype: 'gridpanel',
            height: 200,
            viewConfig: {
                deferEmptyText: false
            },
            emptyText: "无数据",
            scrollable: true,
            columns: [{
                text: '名称',
                flex: 1,
                dataIndex: 'name',
            }, {
                text: '显示名',
                flex: 1,
                dataIndex: 'title',
            }, {
                text: '默认值',
                flex: 1,
                dataIndex: 'defaults'
            }, {
                text: '类型',
                flex: 1,
                dataIndex: 'dataType'
            }]
        }]
    }, {
        xtype: 'fieldset',
        columnWidth: 1,
        title: '输出',
        items: [{
            xtype: 'gridpanel',
            viewConfig: {
                deferEmptyText: false
            },
            emptyText: "无数据",
            height: 200,
            scrollable: true,
            columns: [{
                text: '名称',
                flex: 1,
                dataIndex: 'name',
            }, {
                text: '显示名',
                flex: 1,
                dataIndex: 'title',
            }, {
                text: '默认值',
                flex: 1,
                dataIndex: 'defaults'

            }, {
                text: '类型',
                flex: 1,
                dataIndex: 'dataType'
            }]
        }]
    }],
    listeners: {
        render: function (view) {
            var data = view.record;
            if (data.configuration) {
                if (data.configuration.attributes) {
                    var attr = data.configuration.attributes;
                    var inData = [], outData = [];
                    if (attr.input) {
                        inData = Ext.decode(attr.input);
                    }
                    if (attr.output) {
                        outData = Ext.decode(attr.output);
                    }
                    var grid = view.query('grid');
                    grid[0].setStore({
                        autoLoad: true,
                        data: inData
                    });
                    grid[1].setStore({
                        autoLoad: true,
                        data: outData
                    });
                }
            }
        }
    }
});
