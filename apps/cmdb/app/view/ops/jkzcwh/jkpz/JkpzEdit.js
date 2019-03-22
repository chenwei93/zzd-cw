Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'jkpz-edit',


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
                readOnly: true,
                xtype: 'textfield',
                name: 'y_title',
                fieldLabel: '资产名称',
                columnWidth: 1,
                bind: '{y_title}'
            }, {
                readOnly: true,
                xtype: 'textfield',
                name: 'y_code',
                fieldLabel: '资产编号',
                bind: '{y_code}'
            }, {
                readOnly: true,
                xtype: 'textfield',
                name: 'y_type',
                fieldLabel: '资产类别',
                bind: '{y_type}'
            }, {
                readOnly: true,
                xtype: 'textfield',
                name: 'y_dept',
                fieldLabel: '提供部门',
                bind: '{y_dept}'
            }, {
                readOnly: true,
                xtype: 'textfield',
                name: 'y_zcml',
                fieldLabel: '资产目录',
                bind: '{y_zcml}'
            }, {
                readOnly: true,
                xtype: 'textarea',
                name: 'y_zcdes',
                fieldLabel: '资产说明',
                columnWidth: 1,
                bind: '{y_zcdes}'
            }]

        }, {
            title: '申请信息',
            items: [
                {
                    readOnly: true,
                    xtype: 'combo',
                    name: 'j_lxr',
                    fieldLabel: '联系人',
                    displayField: 'name',
                    valueField: 'value',
                    emptyText: '选择联系人',
                    store: {
                        fields: ['name', 'value'],
                        data: [
                            {name: '陈薇', value: 'chenw'},
                            {name: '王石', value: 'wangs'},
                            {name: '方荣', value: 'fangr'},
                            {name: '莫智胜', value: 'mozs'}
                        ]
                    },
                    bind: '{j_lxr}'
                }, {
                    readOnly: true,
                    xtype: 'combo',
                    name: 'j_glxm',
                    fieldLabel: '关联项目',
                    displayField: 'name',
                    valueField: 'value',
                    emptyText: '选择关联项目',
                    store: {
                        fields: ['name', 'value'],
                        data: [
                            {name: '金卡工程', value: 'xma'},
                            {name: '市民卡工程', value: 'xmb'},
                            {name: '大数据监控', value: 'xmc'}
                        ]
                    },
                    bind: '{j_glxm}'
                }, {
                    readOnly: true,
                    xtype: 'combo',
                    name: 'j_emergencyLevel',
                    fieldLabel: '紧急程度',
                    displayField: 'name',
                    valueField: 'value',
                    emptyText: '选择紧急程度',
                    store: {
                        fields: ['name', 'value'],
                        data: [
                            {name: '特提', value: 'tt'},
                            {name: '特急', value: 'tj'},
                            {name: '加急', value: 'jj'},
                            {name: '平急', value: 'pj'},

                        ]
                    },
                    bind: '{j_emergencyLevel}'
                }, {
                    readOnly: true,
                    xtype: 'datefield',
                    fieldLabel: '要求完成日期',
                    name: 'j_endtime',
                    bind: '{j_endtime}'

                }, {
                    readOnly: true,
                    xtype: 'textarea',
                    fieldLabel: '申请原因',
                    columnWidth: 1,
                    name: 'j_reason',
                    bind: '{j_reason}'

                }, {
                    readOnly: true,
                    xtype: 'textarea',
                    fieldLabel: '备注',
                    columnWidth: 1,
                    name: 'j_note',
                    bind: '{j_note}'

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
                bind: '{show.j_typlxz}'
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
                bind: '{show.j_jklx}'
            }, {
                xtype: 'radiogroup',
                fieldLabel: '重点监控',
                name: 'j_zdjk',
                items: [
                    {boxLabel: '是', inputValue: 'true', checked: true},
                    {boxLabel: '否', inputValue: 'false'},
                ],
                bind: '{show.j_zdjk}'
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
                bind: '{show.j_xytype}'
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
                bind: '{show.j_rzfs}'
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
                bind: '{show.j_csfs}'
            }, {
                xtype: 'textfield',
                name: 'j_urlys',
                columnWidth: 1,
                fieldLabel: 'URL映射',
                bind: '{show.j_urlys}'
            }]
        }, {
            title: '配置信息',
            items: [{
                xtype: 'combo',
                name: 'y_ssfzr',
                fieldLabel: '实施负责人',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择实施负责人',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '王石', value: 'wangs'},
                        {name: '陈薇', value: 'chenw'},
                        {name: '方荣', value: 'fangr'},
                        {name: '莫智胜', value: 'mozs'}
                    ]
                },
                columnWidth: 1
            }, {
                xtype: 'datefield',
                name: 'y_kssj',
                fieldLabel: '计划开始时间'
            }, {
                xtype: 'datefield',
                name: 'y_wcsj',
                fieldLabel: '计划完成时间'
            }, {
                xtype: 'textarea',
                name: 'y_ssbz',
                fieldLabel: '实施备注',
                columnWidth: 1
            }]

        }],
    listeners: {
        render: function (view) {
            if (view.up('window').needAllData) {
                var recordData = JSON.parse(view.up('window').needAllData);
                var data = {
                    y_title: recordData.text,
                    y_code: recordData.code,
                    y_type: '接口资源',
                    y_dept: '',
                    y_zcml: '',
                    y_zcdes: recordData.des
                };
                var vm = view.getViewModel();
                vm.set(data);
            }
            if (view.needItem) {
                var vm = view.getViewModel();
                vm.set(view.needItem);
            }
        }

    }
});