Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhWHShow', {
    extend: 'Ext.form.Panel',
    xtype: 'fwsmwh-whshow',


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
        }, {
            name: 'f_fwbzgzl',
            fieldLabel: '服务标准工作量',
            readOnly: true,
            value: '20人／天',
            bind: '{show.f_fwbzgzl}'
        }, {
            name: 'f_sstj',
            fieldLabel: '实施条件',
            columns: 1,
            readOnly: true,
            value: '是',
            bind: '{show.f_sstj}'
        }]
    }],
});