Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzWHShow', {
    extend: 'Ext.form.Panel',
    xtype: 'jkpzwh-show',


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

        }]
});