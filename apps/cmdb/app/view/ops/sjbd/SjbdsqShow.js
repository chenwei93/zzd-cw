Ext.define('Cmdb.view.ops.sjbd.SjbdsqShow', {
    extend: 'Ext.form.Panel',
    xtype: 'sjbdsq-show',


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
    viewModel: {
        type: 'zyfp'
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
                bind: '{show.j_lxr}',
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
                bind: '{show.j_lxr}',
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
                bind: '{show.j_reason}',
                name: 'j_reason'
            }, {
                fieldLabel: '备注',
                columnWidth: 1,
                name: 'j_note',
                bind: '{show.j_note}'
            }]

    }]
})
;