Ext.define('Cmdb.view.ops.sjbd.SjbdZcFrom', {
    extend: 'Ext.form.Panel',
    xtype: 'sjbdzc-form',


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
            }
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
                change: 'onChooseSelect'
            }
        }, {
            xtype: 'tagfield',
            reference: 'ysjx',
            name: 's_ysjx',
            fieldLabel: '元数据项',
            displayField: 'title',
            valueField: 'title',
            emptyText: '选择元数据项',
            store: {}
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
        }
    }
});