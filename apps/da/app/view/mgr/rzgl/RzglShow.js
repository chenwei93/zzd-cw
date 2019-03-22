Ext.define('DA.view.mgr.rzgl.RzglShow', {
    extend: 'Ext.form.Panel',
    xtype: 'rzgl-show',


    bodyPadding: 10,
    layout: 'column',
    defaults: {
        margin: 10,
        columnWidth: 0.5,
        xtype: 'displayfield'
    },

    items: [{
        fieldLabel: '异常级别',
        name: 'level',
        value: '信息'
    }, {
        fieldLabel: '异常时间',
        name: 'date',
        value: '2018年3月22日9：35：0'

    }, {
        fieldLabel: '所属部门',
        value: '大数据中心'
    }, {
        fieldLabel: '报告人',
        value: '陈薇'
    }, {
        fieldLabel: '异常内容',
        name: 'content',
        columnWidth: 1,
        value: '服务器002CPU超载预警'
    }, {
        margin: '0 10 10 10',
        xtype: 'fieldset',
        collapsible: false,
        title: '服务器详情',
        columnWidth: 1,
        layout: 'column',
        defaults: {
            columnWidth: 0.5,
            xtype: 'displayfield',
        },
        items: [{
            fieldLabel: '服务器编号',
            value: 'server_002'
        }, {
            fieldLabel: '产品类别',
            value: '机架式'
        }, {
            fieldLabel: '产品结构',
            value: '2U'
        }, {
            fieldLabel: 'CPU型号',
            value: 'Xeon E5-2603 v3'
        }, {
            fieldLabel: '硬盘接口类型',
            value: 'SATA/SAS'
        }, {
            fieldLabel: '标配硬盘容量',
            value: '1.2TB'
        }, {
            fieldLabel: '内存类型',
            value: 'DDR4'
        }, {
            fieldLabel: '内存容量',
            value: '8GB'
        }]
    },{
        margin: '0 10 10 10',
        xtype: 'fieldset',
        collapsible: false,
        title: '解决方案',
        columnWidth: 1,
        layout: 'column',
        defaults: {
            columnWidth: 0.5,
            xtype: 'displayfield',
        },
        items: [{
            fieldLabel: '建议',
            value: '向服务器管理人员提起维护申请。'
        }]
    }]
});
