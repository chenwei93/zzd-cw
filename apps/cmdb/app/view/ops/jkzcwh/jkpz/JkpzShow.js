Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzShow', {
    extend: 'Ext.form.Panel',
    xtype: 'jkpz-show',


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
    items: [
        {
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
                    bins: '{show.j_lxr}'
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
                    bind: '{show.j_note}',
                    name: 'j_note'
                }]
        }, {
            title: '接口配置信息',
            items: [{
                fieldLabel: '调用频率限制',
                name: 'j_typlxz',
                renderer: function (data) {
                    var arr = {
                        ss: '实时',
                        g: '高',
                        yb: '一般',
                        d: '低'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                },
                bind: '{show.j_typlxz}'
            }, {
                fieldLabel: '接口类型',
                name: 'j_jklx',
                renderer: function (data) {
                    var arr = {
                        dljk: '代理接口',
                        zxjk: '中心接口',
                        zhjk: '组合接口'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                },
                bind: '{show.j_jklx}'
            }, {
                fieldLabel: '重点监控',
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
                fieldLabel: '协议类型',
                name: 'j_xytype',
                bind: '{show.j_xytype}'
            }, {
                fieldLabel: '认证方式',
                name: 'j_rzfs',
                bind: '{show.j_rzfs}'
            }, {
                fieldLabel: '传输方式',
                name: 'j_csfs',
                renderer: function (data) {
                    var arr = {
                        xml: 'XML',
                        json: 'JSON',
                        ejz: '二进制'
                    };
                    if (arr[data]) {
                        return arr[data]
                    } else {
                        return data
                    }
                },
                bind: '{show.j_csfs}'
            }, {
                name: 'j_urlys',
                columnWidth: 1,
                fieldLabel: 'URL映射',
                bind: '{show.j_urlys}'
            }]
        }, {
            title: '配置信息',
            items: [{
                name: 'y_ssfzr',
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
                bind: '{show.y_ssfzr}',
                columnWidth: 1
            }, {
                name: 'y_kssj',
                fieldLabel: '计划开始时间',
                bind: '{show.y_kssj}',
            }, {
                name: 'y_wcsj',
                fieldLabel: '计划完成时间',
                bind: '{show.y_wcsj}',

            }, {
                name: 'y_ssbz',
                fieldLabel: '实施备注',
                bind: '{show.y_ssbz}',
                columnWidth: 1
            }]

        }]
});