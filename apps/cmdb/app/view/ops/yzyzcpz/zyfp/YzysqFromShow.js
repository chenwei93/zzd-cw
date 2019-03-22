Ext.define('Cmdb.view.ops.yzyzcpz.zyfp.YzysqFormShow', {
    extend: 'Ext.form.Panel',
    xtype: 'yzysq-formshow',


    defaults: {
        xtype: 'fieldset',
        layout: 'column',
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
        title: '申请信息',
        items: [{
            name: 'y_yqwcsj',
            fieldLabel: '要求完成时间',
            bind: '{show.y_yqwcsj}'
        }, {
            name: 'y_lxr',
            fieldLabel: '联系人',
            bind: '{show.y_lxr}',
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

        }, {
            name: 'y_glxm',
            fieldLabel: '关联项目',
            bind: '{show.y_glxm}',
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
            name: 'y_sqyt',
            columnWidth: 1,
            fieldLabel: '申请用途',
            bind: '{show.y_sqyt}'
        }, {
            name: 'y_bcxq',
            columnWidth: 1,
            fieldLabel: '补充需求',
            bind: '{show.y_bcxq}'
        }]
    }]
});