Ext.define('Cmdb.view.ops.sjbd.SjbdWHShow', {
    extend: 'Ext.form.Panel',
    xtype: 'sjbdwh-show',


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
        items: [
            {
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
        title: '配置信息',
        items: [
            {
            name: 'f_ssfzr',
            fieldLabel: '实施负责人',
            renderer: function (data) {
                var arr = {
                    wangs: '王石',
                    chenw: '陈薇',
                    fangr: '方荣',
                    mozs: '莫智胜'
                };
                if (arr[data]) {
                    return arr[data]
                } else {
                    return data
                }
            },
            bind: '{show.f_ssfzr}'
        }, {
            name: 'y_kssj',
            fieldLabel: '计划开始时间',
            bind: '{show.y_kssj}'
        }, {
            name: 'y_wcsj',
            fieldLabel: '计划完成时间',
            bind: '{show.y_wcsj}'

        }, {
            fieldLabel: '补充需求',
            columnWidth: 1,
            name: 'j_note',
            bind: '{show.j_note}'

        }]
    }, {
        title: '数据项信息',
        items: [
            {
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
    }, {
        title: '申请信息',
        items: [
            {
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
                bind: '{show.j_glxm}',
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
                }
            }, {
                name: 'j_emergencyLevel',
                fieldLabel: '紧急程度',
                bind: '{show.j_emergencyLevel}',
                renderer: function (data) {
                    var arr = {
                        tt: '特提',
                        tj: '特急',
                        jj: '加急',
                        pj: '平急'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                }
            }, {
                fieldLabel: '要求完成日期',
                name: 'j_endtime',
                bind: '{show.j_endtime}',

            }, {
                fieldLabel: '申请原因',
                columnWidth: 1,
                name: 'j_reason',
                bind: '{show.j_reason}',

            }, {
                fieldLabel: '备注',
                columnWidth: 1,
                name: 'j_note',
                bind: '{show.j_note}'
            }]
    }]

})
;