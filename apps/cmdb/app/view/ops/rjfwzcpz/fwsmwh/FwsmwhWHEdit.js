Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhWHEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'fwsmwh-whedit',


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
        }, {
            xtype: 'textfield',
            name: 'f_fwbzgzl',
            fieldLabel: '服务标准工作量',
            readOnly: true,
            value: '20人／天',
            bind: '{f_fwbzgzl}'
        }, {
            xtype: 'textarea',
            name: 'f_sstj',
            fieldLabel: '实施条件',
            columnWidth: 1,
            readOnly: true,
            value: '是',
            bind: '{f_sstj}'
        }]
    }],

    listeners: {
        render: function (view) {
            if (view.up('window').needAllData) {
                var recordData = JSON.parse(view.up('window').needAllData);
                var data = {
                    y_title: recordData.text + '实例' + top._slIndex,
                    y_code: recordData.code + '_sl' + top._slIndex,
                    y_type: '资产服务',
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
})
;