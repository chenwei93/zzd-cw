Ext.define('Cmdb.view.asset.bmzcqd.ZcEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'zc-edit',


    requires: [
        'Cmdb.view.asset.bmzcqd.ZcEditController'
    ],
    controller: 'zc-edit',
    layout: 'column',
    bodyPadding: 10,
    scrollable: true,
    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '确定',
        handler: 'onSure'
    }, {
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        text: '取消',
        handler: 'onCancel'
    }],
    items: [{
        xtype: 'fieldset',
        title: '基本信息',
        collapsible: true,
        columnWidth: 1,
        defaults: {
            margin: 10,
            xtype: 'container',
            defaultType: 'textfield',
            layout: 'hbox'
        },
        items: [{
            items: [{
                //     name: 'title',
                //     flex: 1,
                //     fieldLabel: '名称',
                //     bind: '{show.title}'
                // }, {
                name: 'type',
                flex: 1,
                hidden: true,
                value: 'db'
            }, {
                name: 'code',
                fieldLabel: '编码',
                bind: '{show.code}',
                flex: 1,
            }]
        }, {
            items: [{
                name: 'title',
                bind: '{show.title}',
                flex: 1,
                reference: 'resName',
                fieldLabel: '名称',
            }, {
                name: 'xlh',
                flex: 1,
                bind: '{show.xlh}',
                fieldLabel: '序列号'
            }]
        }, {
            items: [{
                name: 'ip',
                flex: 1,
                fieldLabel: 'IP地址',
                bind: '{show.ip}',

            }, {
                name: 'sbxh',
                flex: 1,
                fieldLabel: '设备型号',
                bind: '{show.sbxh}',
            }]
        }, {
            items: [{
                name: 'zt',
                flex: 1,
                fieldLabel: '状态',
                bind: '{show.zt}',
            }, {
                name: 'cj',
                flex: 1,
                fieldLabel: '厂家',
                bind: '{show.cj}',
            }]
        }, {
            items: [{
                name: 'czxt',
                flex: 1,
                fieldLabel: '操作系统',
                bind: '{show.czxt}',
            }, {
                name: 'gsbm',
                flex: 1,
                fieldLabel: '归属部门',
                bind: '{show.gsbm}',
            }]
        }, {
            items: [{
                name: 'des',
                flex: 1,
                fieldLabel: '描述',
                bind: '{show.des}',
            }, {
                name: 'fzr',
                flex: 1,
                fieldLabel: '负责人',
                bind: '{show.fzr}',
            }]

        }]
    }, {
        xtype: 'fieldset',
        title: 'CPU详情',
        collapsible: true,
        columnWidth: 1,
        defaults: {
            margin: 10,
            xtype: 'container',
            defaultType: 'textfield',
            layout: 'hbox'
        },
        items: [{
            items: [{
                name: 'xh',
                flex: 1,
                fieldLabel: '型号',
                bind: '{show.xh}',
            }, {
                name: 'wlsl',
                flex: 1,
                fieldLabel: '物理数量',
                bind: '{show.wlsl}',
            }]
        }, {
            items: [{
                name: 'zp',
                flex: 1,
                fieldLabel: '主频',
                bind: '{show.zp}',
            }, {
                name: 'ljsl',
                flex: 1,
                fieldLabel: '逻辑数量',
                bind: '{show.ljsl}',
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: '内存详情',
        collapsible: true,
        columnWidth: 1,
        defaults: {
            margin: 10,
            xtype: 'container',
            defaultType: 'textfield',
            layout: 'hbox'
        },
        items: [{
            items: [{
                name: 'ncdx',
                flex: 1,
                fieldLabel: '内存大小',
                bind: '{show.ncdx}',
            }, {
                name: 'nczcws',
                flex: 1,
                fieldLabel: '内存总槽位数',
                bind: '{show.nczcws}',
            }]
        }, {
            items: [{
                name: 'xnncdx',
                flex: 1,
                fieldLabel: '虚拟内存大小',
                bind: '{show.xnncdx}',
            }, {
                name: 'kjnccs',
                flex: 1,
                fieldLabel: '空间内存槽数',
                bind: '{show.kjnccs}',
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: '附件上传',
        collapsible: true,
        columnWidth: 1,
        defaults: {
            margin: 10,
            xtype: 'container',
            defaultType: 'textfield',
            layout: 'hbox'
        },
        items: [{
            items: [{
                fieldLabel: '从本地选择文件上传',
                xtype: 'fileuploadfield', // Same as filefield above
                buttonOnly: true,
                labelWidth: 140,
                buttonText: '选择文件',
            }]
        }]
    }],

});