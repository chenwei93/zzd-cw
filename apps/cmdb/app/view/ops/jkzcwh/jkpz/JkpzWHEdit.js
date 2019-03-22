Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzWHEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'jkpzwh-edit',


    defaults: {
        xtype: 'fieldset',
        layout: 'column',
        margin: 10,
        defaults: {
            columnWidth: 0.5,
            margin: 10
        }
    },
    viewModel: {
        type: 'zyfp'
    },
    tbar: [{
        text: '确定',
        handler: 'onSure'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],
    items: [
        {
            title: '资产信息',
            items: [{
                xtype: 'textfield',
                name: 'y_title',
                fieldLabel: '资产名称',
                columnWidth: 1,
                bind: '{y_title}'
            }, {
                xtype: 'textfield',
                name: 'y_code',
                fieldLabel: '资产编号',
                bind: '{y_code}'
            }, {
                xtype: 'textfield',
                name: 'y_type',
                fieldLabel: '资产类别',
                bind: '{y_type}'
            }, {
                xtype: 'textfield',
                name: 'y_dept',
                fieldLabel: '提供部门',
                bind: '{y_dept}'
            }, {
                xtype: 'textfield',
                name: 'y_zcml',
                fieldLabel: '资产目录',
                bind: '{y_zcml}'
            }, {
                xtype: 'textarea',
                name: 'y_zcdes',
                fieldLabel: '资产说明',
                columnWidth: 1,
                bind: '{y_zcdes}'
            }]

        }, {
            title: '接口配置信息',
            items: [{
                xtype: 'combo',
                fieldLabel: '调用频率限制',
                name: 'j_typlxz',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择调用频率限制',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '实时', value: 'ss'},
                        {name: '高', value: 'g'},
                        {name: '一般', value: 'yb'},
                        {name: '低', value: 'd'}
                    ]
                },
                bind: '{j_typlxz}'
            }, {
                xtype: 'combo',
                fieldLabel: '接口类型',
                name: 'j_jklx',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择接口类型',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '代理接口', value: 'dljk'},
                        {name: '中心接口', value: 'zxjk'},
                        {name: '组合接口', value: 'zhjk'}
                    ]
                },
                bind: '{j_jklx}'
            }, {
                xtype: 'radiogroup',
                fieldLabel: '重点监控',
                name: 'j_zdjk',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'},
                ],
                bind: '{j_zdjk}'
            }, {
                xtype: 'combo',
                fieldLabel: '协议类型',
                name: 'j_xytype',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择协议类型',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: 'Webserice', value: 'Webserice'},
                        {name: 'RPC', value: 'RPC'},
                        {name: 'Restful', value: 'Restful'}
                    ]
                },
                bind: '{j_xytype}'
            }, {
                xtype: 'combo',
                fieldLabel: '认证方式',
                name: 'j_rzfs',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择认证方式',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: 'OAuth', value: 'OAuth'},
                        {name: 'WS-Security', value: 'WS-Security'}
                    ]
                },
                bind: '{j_rzfs}'
            }, {
                xtype: 'combo',
                fieldLabel: '传输方式',
                name: 'j_csfs',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择传输方式',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: 'XML', value: 'xml'},
                        {name: 'JSON', value: 'json'},
                        {name: '二进制', value: 'ejz'}
                    ]
                },
                bind: '{j_csfs}'
            }, {
                xtype: 'textfield',
                name: 'j_urlys',
                columnWidth: 1,
                fieldLabel: 'URL映射',
                bind: '{j_urlys}'
            }]

        }],
    listeners: {
        render: function (view) {
            if (view.up('window').needAllData) {
                var recordData = JSON.parse(view.up('window').needAllData);
                var data = {
                    y_title: recordData.text + '实例' + top._slIndex,
                    y_code: recordData.code + '_sl' + top._slIndex,
                    y_type: '接口资源',
                    y_dept: Ext.app.ViewController.LOGIN_USER.dept,
                    y_zcml: recordData.text,
                    y_zcdes: recordData.des
                };

            }
            if (view.record) {
                var data = view.record.data;
            }
            var vm = view.getViewModel();
            vm.set(data);
        }
    }
});