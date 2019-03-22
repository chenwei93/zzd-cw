Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzsqForm', {
    extend: 'Ext.form.Panel',
    xtype: 'jkpzsq-form',


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
            title: '申请信息',
            items: [
                {
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
                    }
                }, {
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
                }, {
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
                    }
                }, {
                    xtype: 'datefield',
                    fieldLabel: '要求完成日期',
                    name: 'j_endtime'
                }, {
                    xtype: 'textarea',
                    fieldLabel: '申请原因',
                    columnWidth: 1,
                    name: 'j_reason'
                }, {
                    xtype: 'textarea',
                    fieldLabel: '备注',
                    columnWidth: 1,
                    name: 'j_note'
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
                    y_type: '接口资源',
                    y_dept: Ext.app.ViewController.LOGIN_USER.dept,
                    y_zcml: recordData.text,
                    y_zcdes: recordData.des
                };
                var vm = view.getViewModel();
                vm.set(data);
            }
        }
    }
});