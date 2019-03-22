Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhsqShow', {
    extend: 'Ext.form.Panel',
    xtype: 'fwsmwhsq-show',


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
            value: '资源申请工单_自动生成',
            bind: '{show.y_title}'
        }, {
            name: 'y_code',
            fieldLabel: '资产编号',
            value: 'zysqgd_zdsc_01',
            bind: '{show.y_code}'
        }, {
            name: 'y_type',
            fieldLabel: '资产类别',
            value: '云资源',
            bind: '{show.y_type}'
        }, {
            name: 'y_dept',
            fieldLabel: '提供部门',
            value: '民政局',
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
    }, {
        title: '申请信息',
        items: [{
            name: 'f_beginTime',
            fieldLabel: '要求完成时间',
            bind: '{show.f_beginTime}'
        }, {
            name: 'f_ssfzr',
            fieldLabel: '联系人',
            renderer: function (data) {
                var arr = {
                    chenw: '陈薇',
                    wangs: '王石',
                    fangr: '方荣',
                    mozs: '莫智胜'
                };
                if (arr[data]) {
                    return arr[data]
                } else {
                    return data
                }
            },
            value: 'chenw',
            bind: '{show.f_ssfzr}'
        }, {
            name: 'j_glxm',
            bind: '{show.j_glxm}',
            fieldLabel: '关联项目',
            renderer: function (data) {
                var arr = {
                    xma: '金卡工程',
                    xmb: '市民卡工程',
                    xmc: '大数据监控'
                };
                if (arr[data]) {
                    return arr[data]
                } else {
                    return data
                }
            },
            value: 'xma',
        }, {
            fieldLabel: '实施条件已达到',
            name: 'j_zdjk',
            renderer: function (data) {
                var arr = {
                    true: '是',
                    false: '否'
                };
                if (arr[data]) {
                    return arr[data]
                } else {
                    return data
                }
            },
            bind: '{show.j_zdjk}'

        }, {
            fieldLabel: '申请用途',
            columnWidth: 1,
            name: 'j_reason',
            bind: '{show.j_reason}'
        }, {
            fieldLabel: '补充需求',
            columnWidth: 1,
            name: 'j_note',
            bind: '{show.j_note}'

        }]
    }]
});