Ext.define('Cmdb.view.ops.sjbd.SjbdWHFrom', {
    extend: 'Ext.form.Panel',
    xtype: 'sjbdwh-form',


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
    items: [{
        title: '资产信息',
        items: [{
            xtype: 'textfield',
            name: 'y_title',
            fieldLabel: '资产名称',
            readOnly: true,
            columnWidth: 1,
            bind: '{y_title}'
        }, {
            xtype: 'textfield',
            readOnly: true,
            name: 'y_code',
            fieldLabel: '资产编号',
            bind: '{y_code}'
        }, {
            xtype: 'textfield',
            readOnly: true,
            name: 'y_type',
            fieldLabel: '资产类别',
            bind: '{y_type}'
        }, {
            xtype: 'textfield',
            readOnly: true,
            name: 'y_dept',
            fieldLabel: '提供部门',
            bind: '{y_dept}'
        }, {
            xtype: 'textfield',
            readOnly: true,
            name: 'y_zcml',
            fieldLabel: '资产目录',
            bind: '{y_zcml}'
        }, {
            xtype: 'textarea',
            readOnly: true,
            name: 'y_zcdes',
            fieldLabel: '资产说明',
            columnWidth: 1,
            bind: '{y_zcdes}'
        }]
    }, {
        title: '配置信息',
        items: [{
            xtype: 'combo',
            name: 'f_ssfzr',
            fieldLabel: '实施负责人',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择实施负责人',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '陈薇', value: 'chenw'},
                    {name: '王石', value: 'wangs'},
                    {name: '方荣', value: 'fangr'},
                    {name: '莫智胜', value: 'mozs'}
                ]
            },
            bind: '{f_ssfzr}'
        }, {
            xtype: 'datefield',
            name: 'y_kssj',
            fieldLabel: '计划开始时间',
            bind: '{y_kssj}'
        }, {
            xtype: 'datefield',
            name: 'y_wcsj',
            fieldLabel: '计划完成时间',
            bind: '{y_wcsj}'

        }, {
            xtype: 'textarea',
            fieldLabel: '补充需求',
            columnWidth: 1,
            name: 'j_bcnote',
            bind: '{j_bcnote}'
        }]
    }, {
        title: '数据项信息',
        items: [{
            xtype: 'combo',
            name: 's_csfs',
            fieldLabel: '存取方式',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择存取方式',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '接口', value: 'jk'},
                    {name: '数据交换', value: 'sjjh'}
                ]
            },

            bind: '{s_csfs}'

        }, {
            xtype: 'combo',
            name: 's_sjml',
            fieldLabel: '数据目录',
            displayField: 'resTitle',
            valueField: 'id',
            emptyText: '选择数据目录',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: 'app/store/data/asset/entrydata/entryDatas.json'
                }
            },
            listeners: {
                change: 'onChooseChange'
            },
            bind: '{s_sjml}'

        }, {
            xtype: 'tagfield',
            name: 's_ysjx',
            reference: 'ysjx',
            fieldLabel: '元数据项',
            displayField: 'title',
            valueField: 'name',
            emptyText: '选择元数据项',
            store: {},
            bind: '{s_ysjx}'

        }]

    }, {
        title: '申请信息',
        items: [
            {
                xtype: 'combo',
                name: 'j_lxr',
                readOnly: true,
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
                xtype: 'combo',
                name: 'j_glxm',
                fieldLabel: '关联项目',
                readOnly: true,

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
                xtype: 'combo',
                name: 'j_emergencyLevel',
                fieldLabel: '紧急程度',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择紧急程度',
                readOnly: true,

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
                xtype: 'datefield',
                fieldLabel: '要求完成日期',
                readOnly: true,

                name: 'j_endtime',
                bind: '{j_endtime}'

            }, {
                xtype: 'textarea',
                fieldLabel: '申请原因',
                readOnly: true,

                columnWidth: 1,
                name: 'j_reason',
                bind: '{j_reason}'

            }, {
                xtype: 'textarea',
                readOnly: true,
                fieldLabel: '备注',
                columnWidth: 1,
                name: 'j_note',
                bind: '{j_note}'

            }]

    }],

    listeners: {
        render: function (view) {
            if (view.up('window').needAllData) {
                var data = new Date(Date.now());
                var Month = data.getMonth() + 1;

                function addZero(date) {
                    if (String(date).length == 1) {
                        return String(0) + String(date)
                    } else {
                        return date
                    }
                }

                var ret = String(data.getFullYear()) +
                    addZero(Month) +
                    addZero(data.getDate());
                var recordData = JSON.parse(view.up('window').needAllData);
                var data = {
                    y_title: recordData.text + '实例' + top._slIndex + '_' + ret,
                    y_code: recordData.code + '_sl' + top._slIndex + '_' + ret,
                    y_type: '数据资源',
                    y_dept: Ext.app.ViewController.LOGIN_USER.dept,
                    y_zcml: recordData.text,
                    y_zcdes: recordData.des
                };
                var vm = view.getViewModel();
                vm.set(data);
            }
            if (view.needItem) {
                var a = {};
                if (view.needItem.whId != null) {
                    var store = Ext.getStore('mlxsl');
                    for (var i in store.getData().items) {
                        if (view.needItem.whId == store.getData().items[i].data.tabId) {
                            a = store.getData().items[i].data;
                        }
                    }
                }
                var vm = view.getViewModel();
                vm.set(Object.assign(view.needItem, a));
            }
        }
    }
})
;