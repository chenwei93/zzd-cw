Ext.define('Cmdb.view.ops.yzyzcpz.zyfp.ZyfpWHEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'zyfpwh-edit',


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
        }]
    }, {
        title: 'CPU信息',
        items: [
            {
                xtype: 'combo',
                name: 'y_nhs',
                fieldLabel: '内核数',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择内核数',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '1', value: '1'},
                        {name: '2', value: '2'},
                        {name: '4', value: '4'},
                        {name: '8', value: '8'},
                        {name: '12', value: '12'},
                        {name: '16', value: '16'},
                        {name: '32', value: '32'}
                    ]
                },
                bind:'{y_nhs}'

            }, {
                xtype: 'combo',
                name: 'y_zp',
                fieldLabel: '主频',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择主频',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '2.4GHz', value: '2.4GHz'},
                        {name: '3.2GHz', value: '3.2GHz'},
                        {name: '3.4GHz', value: '3.4GHz'},
                        {name: '4.5GHz', value: '4.5GHz'},
                    ]
                },
                bind:'{y_zp}'

            }, {
                xtype: 'combo',
                name: 'y_yjhc',
                fieldLabel: '一级缓存',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择一级缓存',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '128M', value: '128M'},
                        {name: '256M', value: '256M'},
                        {name: '512M', value: '512M'}
                    ]
                },
                bind:'{y_yjhc}'
            }]


    }, {
        title: '内存信息',
        items: [{
            xtype: 'numberfield',
            minValue: 1,
            maxValue: 256,
            fieldLabel: '大小',
            name: 'y_dx',
            bind:'{y_dx}'
        }, {
            xtype: 'combo',
            name: 'y_zslx',
            fieldLabel: '传输类型',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择传输类型',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '2.4GHz', value: '2.4GHz'},
                    {name: '3.2GHz', value: '3.2GHz'},
                    {name: '3.4GHz', value: '3.4GHz'},
                    {name: '4.5GHz', value: '4.5GHz'},
                ]
            },
            bind:'{y_zslx}'

        }, {
            xtype: 'combo',
            name: 'y_pl',
            fieldLabel: '频率',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择频率',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '2600MHz', value: '2600MHz'},
                    {name: '3200MHz', value: '3200MHz'},
                    {name: '3000MHz', value: '3000MHz'},
                    {name: '2800MHz', value: '2800MHz'},
                    {name: '2400MHz', value: '2400MHz'},
                ]
            },
            bind:'{y_pl}'
        }]


    }, {
        title: '存储信息',
        items: [
            {
                xtype: 'numberfield',
                minValue: 1,
                maxValue: 10,
                fieldLabel: '个数',
                name: 'y_gs',
                bind:'{y_gs}'
            }, {
                xtype: 'combo',
                name: 'y_rl',
                fieldLabel: '容量',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择容量',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '256G', value: '256G'},
                        {name: '512G', value: '512G'},
                        {name: '1T', value: '1T'},
                        {name: '2T', value: '2T'},
                        {name: '4T', value: '4T'},
                    ]
                },
                bind:'{y_rl}'

            }, {
                xtype: 'combo',
                name: 'y_hc',
                fieldLabel: '缓存',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择缓存',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '64M', value: '64M'},
                        {name: '128M', value: '128M'},
                        {name: '256M', value: '256M'},
                        {name: '512M', value: '512M'}
                    ]
                },
                bind:'{y_hc}'
            }, {
                xtype: 'combo',
                name: 'y_jklx',
                fieldLabel: '接口类型',
                displayField: 'name',
                valueField: 'value',
                emptyText: '选择接口类型',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: 'SATA', value: 'SATA'},
                        {name: 'PCI-E', value: 'PCI-E'},
                        {name: 'SAS', value: 'SAS'}
                    ]
                },
                bind:'{y_jklx}'
            }]

    }, {
        title: '网络信息',
        items: [{
            xtype: 'combo',
            name: 'y_kd',
            fieldLabel: '带宽',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择带宽',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '1M', value: '1M'},
                    {name: '10M', value: '10M'},
                    {name: '100M', value: '100M'},
                    {name: '1G', value: '1G'}
                ]
            },
            bind:'{y_kd}'
        }, {
            xtype: 'numberfield',
            minValue: 1,
            maxValue: 100,
            fieldLabel: '公网带宽',
            name: 'y_gsdk',
            bind:'{y_gsdk}'
        }]
    }],
    listeners: {
        render: function (view) {
            if (view.up('window').needAllData) {
                var recordData = JSON.parse(view.up('window').needAllData);
                var data = {
                    y_title: recordData.text + '实例' + top._slIndex,
                    y_code: recordData.code + '_sl' + top._slIndex,
                    y_type: '政务云资源',
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