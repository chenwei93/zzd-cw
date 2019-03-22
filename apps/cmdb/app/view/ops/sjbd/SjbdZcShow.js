Ext.define('Cmdb.view.ops.sjbd.SjbdZcShow', {
    extend: 'Ext.form.Panel',
    xtype: 'sjbdzc-show',


    defaults: {
        xtype: 'fieldset',
        layout: 'column',
        margin: 10,
        defaults: {
            columnWidth: 0.5,
            xtype: 'displayfield',
            margin: 10
        }
    },
    items: [{
        title: '资产信息',
        items: [{
            name: 'y_title',
            fieldLabel: '资产名称',
            columnWidth: 1,
            bind: '{show.y_title}'
        }, {
            name: 'y_code',
            fieldLabel: '资产编号',
            bind: '{show.y_code}'
        }, {
            name: 'y_type',
            fieldLabel: '资产类别',
            bind: '{show.y_type}'
        }, {
            name: 'y_dept',
            fieldLabel: '提供部门',
            bind: '{show.y_dept}'
        }, {
            name: 'y_zcml',
            fieldLabel: '资产目录',
            bind: '{show.y_zcml}'
        }, {
            name: 'y_zcdes',
            fieldLabel: '资产说明',
            columnWidth: 1,
            bind: '{show.y_zcdes}'
        }]
    }, {
        title: '数据项信息',
        items: [{
            name: 's_csfs',
            fieldLabel: '存取方式',
            bind: '{show.s_csfs}',
            renderer: function (data) {
                var arr = {
                    jk: '接口',
                    sjjh: '数据交换'
                };
                if (arr[data]) {
                    return arr[data]
                } else {
                    return data
                }
            },
        }, {
            fieldLabel: '数据目录',
            name: 's_sjml',
            bind: '{show.s_sjml}',
        }, {
            fieldLabel: '元数据项',
            reference: 'ysjx',
            name: 's_ysjx',
            bind: '{show.s_ysjx}',
        }]
    }]
});