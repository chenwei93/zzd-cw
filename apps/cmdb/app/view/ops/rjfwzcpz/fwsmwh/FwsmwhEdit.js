Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'fwsmwh-edit',


    tbar: [{
        text: '确定',
        handler: 'onSure'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],

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
    items: [{
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
        }, {
            readOnly: true,
            xtype: 'textfield',
            name: 'f_fwbzgzl',
            fieldLabel: '服务标准工作量',
            value: '20人／天',
            bind: '{show.f_fwbzgzl}'
        }, {
            xtype: 'textarea',
            name: 'f_sstj',
            fieldLabel: '实施条件',
            columnWidth: 1,
            readOnly: true,
            value: '是',
            bind: '{show.f_sstj}'
        }]
    }, {
        title: '申请信息',
        items: [{
            readOnly: true,
            xtype: 'datefield',
            name: 'f_beginTime',
            fieldLabel: '要求完成时间',
            bind: '{f_beginTime}'
        }, {
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
            bind:'{j_glxm}'
        }, {
            readOnly: true,
            xtype: 'radiogroup',
            fieldLabel: '实施条件已达到',
            name: 'j_zdjk',
            items: [
                {boxLabel: '是', inputValue: 'true', checked: true},
                {boxLabel: '否', inputValue: 'false'},
            ],
            bind: '{j_zdjk}'

        }, {
            readOnly: true,
            xtype: 'textarea',
            fieldLabel: '申请用途',
            columnWidth: 1,
            name: 'j_reason',
            bind:'{j_reason}'
        }, {
            readOnly: true,
            xtype: 'textarea',
            fieldLabel: '补充需求',
            columnWidth: 1,
            name: 'j_note',
            bind:'{j_note}'
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
                    y_type: '资产服务',
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
})
;