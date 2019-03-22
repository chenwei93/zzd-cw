Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhShow', {
    extend: 'Ext.form.Panel',
    xtype: 'fwsmwh-show',


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
    }, {
        title: '申请信息',
        items: [{
            name: 'f_beginTime',
            fieldLabel: '要求完成时间',
            bind: '{show.f_beginTime}'
        }, {
            name: 'j_lxr',
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
            bind: '{show.j_lxr}'
        }, {
            name: 'j_glxm',
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
            bind:'{show.j_glxm}'
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
            bind:'{show.j_reason}'
        }, {
            fieldLabel: '补充需求',
            columnWidth: 1,
            name: 'j_note',
            bind:'{show.j_note}'
        }]
    }, {
        title: '配置信息',
        items: [{
            name: 'y_ssfzr',
            fieldLabel: '实施负责人',
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
            columnWidth: 1,
            bind:'{show.y_ssfzr}'
        }, {
            name: 'y_kssj',
            fieldLabel: '计划开始时间',
            bind:'{show.y_kssj}'
        }, {
            name: 'y_wcsj',
            fieldLabel: '计划完成时间',
            bind:'{show.y_wcsj}'
        }, {
            name: 'y_ssbz',
            fieldLabel: '实施备注',
            columnWidth: 1,
            bind:'{show.y_ssbz}'
        }]
    }],
});