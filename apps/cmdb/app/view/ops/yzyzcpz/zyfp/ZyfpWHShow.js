Ext.define('Cmdb.view.ops.yzyzcpz.zyfp.ZyfpWHShow', {
    extend: 'Ext.form.Panel',
    xtype: 'zyfpwh-show',


    defaults: {
        xtype: 'fieldset',
        layout: 'column',
        margin: 10,
        defaults: {
            columnWidth: 0.5,
            margin: 10,
            xtype: 'displayfield'
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
        title: 'CPU信息',
        items: [
            {
                name: 'y_nhs',
                fieldLabel: '内核数',
                bind: '{show.y_nhs}'
            }, {
                name: 'y_zp',
                fieldLabel: '主频',
                bind: '{show.y_zp}'

            }, {
                name: 'y_yjhc',
                fieldLabel: '一级缓存',
                bind: '{show.y_yjhc}'
            }]
    }, {
        title: '内存信息',
        items: [{
            fieldLabel: '大小',
            name: 'y_dx',
            bind: '{show.y_dx}'

        }, {
            name: 'y_zslx',
            fieldLabel: '传输类型',
            bind: '{show.y_zslx}'

        }, {
            name: 'y_pl',
            fieldLabel: '频率',
            bind: '{show.y_pl}'
        }]
    }, {
        title: '存储信息',
        items: [
            {
                fieldLabel: '个数',
                name: 'y_gs',
                bind: '{show.y_gs}'

            }, {
                name: 'y_rl',
                fieldLabel: '容量',
                bind: '{show.y_rl}'

            }, {
                name: 'y_hc',
                fieldLabel: '缓存',
                bind: '{show.y_hc}'

            }, {
                name: 'y_jklx',
                fieldLabel: '接口类型',
                bind: '{show.y_jklx}'

            }]
    }, {
        title: '网络信息',
        items: [{
            name: 'y_kd',
            fieldLabel: '带宽',
            bind: '{show.y_kd}'

        }, {
            fieldLabel: '公网带宽',
            name: 'y_gsdk',
            bind: '{show.y_gsdk}'

        }]


    }]
});