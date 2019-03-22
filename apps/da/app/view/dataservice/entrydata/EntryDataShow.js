Ext.define('DA.view.dataservice.entrydata.EntryDataShow', {
    extend: 'Ext.form.Panel',
    xtype: 'entrydata-show',

    requires: [
        'DA.view.dataservice.entrydata.EntryDataShowController',
        'DA.view.dataservice.entrydata.EntryDataBase',
        'DA.view.dataservice.entrydata.EntryDataExt'
    ],
    controller: 'entrydata-show',
    frame: false,
    scrollable: true,
    layout: 'anchor',
    defaults: {
        margin: 10,
        xtype: 'container',
        defaultType: 'displayfield',
        flex: 1
    },
    viewModel: {
        type: 'entrydata'
    },
    config: {
        entityId: null
    },
    items: [{
        bodyPadding: 10,
        scrollable: true,
        defaults: {
            layout: 'hbox',
            xtype: 'container',
            defaultType: 'displayfield',
            anchor: '100%'
        },
        items: [{
            padding: '0 0 10 0',
            items: [
                {
                    name: 'resTitle',
                    flex: 2,
                    fieldLabel: '资源名称',
                    bind: '{resTitle}'
                }, {
                    name: 'pubDate',
                    labelWidth: 60,
                    flex: 1,
                    fieldLabel: '发布日期',
                    bind: '{pubDate}'
                }]
        }, {
            name: 'abstracts',
            fieldLabel: '资源摘要',
            bind: '{abstracts}'
        }, {
            name: 'resID',
            fieldLabel: '资源标识符',
            bind: '{resID}'
        }, {
            name: 'onLineSrc',
            fieldLabel: '在线资源地址',
            bind: '{onLineSrc}'
        }, {
            fieldLabel: '关键字',
            value: '空'
        }, {
            xtype: 'fieldset',
            layout: 'hbox',
            title: '资源提供信息',
            collapsible: false,
            defaults: {
                xtype: 'container',
                flex: 1,
                layout: 'form'
            },
            items: [{
                items: [{
                    xtype: 'displayfield',
                    name: 'rpOrgName',
                    fieldLabel: '资源提供单位',
                    bind: '{rpOrgName}'
                }]
            }, {
                items: [{
                    xtype: 'displayfield',
                    name: 'cntAdd',
                    fieldLabel: '资源提供方地址',
                    bind: '{cntAdd}'
                }]
            }
            ]
        }, {
            xtype: 'fieldset',
            title: '资源获取服务',
            collapsible: false,
            layout: 'hbox',
            defaults: {
                xtype: 'container',
                flex: 1,
                layout: 'form'
            },
            items: [{
                items: [{
                    xtype: 'displayfield',
                    name: 'serviceType',
                    fieldLabel: '服务类型',
                    bind: '{serviceType.title}'
                }]

            }, {
                items: [{
                    xtype: 'displayfield',
                    name: 'serviceURL',
                    fieldLabel: '服务地址',
                    bind: '{serviceURL}'
                }]

            }
            ]
        }, {
            xtype: 'fieldset',
            title: '扩展元数据',
            layout: 'hbox',
            defaults: {
                xtype: 'container',
                flex: 1,
                layout: 'form'
            },
            items: [{
                items: [{
                    xtype: 'displayfield',
                    name: 'mdId',
                    fieldLabel: '元数据标识符',
                    bind: '{mdId}'
                }, {
                    xtype: 'displayfield',
                    name: 'rpOrgCenter',
                    fieldLabel: '元数据联系单位',
                    bind: '{rpOrgCenter}'
                }]
            }, {
                items: [{
                    xtype: 'displayfield',
                    name: 'cntAddCenter',
                    fieldLabel: '元数据维护方地址',
                    bind: '{cntAddCenter}'
                }, {
                    xtype: 'displayfield',
                    name: 'mdDateUpd',
                    fieldLabel: '元数据更新日期',
                    bind: '{mdDateUpd}'
                }]
            }]
        }]
    }, {
        bodyPadding: 10,
        scrollable: true,
        layout: 'anchor',
        fieldDefaults: {
            msgTarget: 'side'
        },
        defaults: {
            anchor: '100%',
            defaultType: 'displayfield'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            padding: '0 0 10 0',
            defaults: {
                flex: 1,
                layout: 'form'
            },
            items: [{
                name: 'kflx',
                fieldLabel: '是否向社会公开',
                renderer: function (value) {
                    if (value == 'YES') {
                        return '是'
                    } else {
                        return '否'

                    }
                },
                bind: '{kflx.title}'
            }, {
                name: 'gxfs',
                fieldLabel: '共享方式',
                bind: '{gxfs.title}'
            }, {
                fieldLabel: '资源形态',
                name: 'contentType',
                renderer: function (value) {
                    if (value == 'Db') {
                        return '数据库'
                    } else if (value == 'File') {
                        return '文件'
                    } else if (value == 'Hdfs') {
                        return 'HDFS'
                    } else {
                        return 'HTTP'
                    }
                },
                bind: '{contentType}'
            }]
        }, {
            margin: '0 0 0 0',
            xtype: 'fieldset',
            title: '数据形态扩展信息',
            collapsible: false,

            hidden: true,
            layout: 'hbox',
            defaults: {
                flex: 1,
                xtype: 'container',
                layout: 'form'
            },
            items: [{
                items: [{
                    xtype: 'displayfield',
                    name: 'mdId',
                    fieldLabel: '元数据标识符',
                    bind: '{mdId}'
                }, {
                    xtype: 'displayfield',
                    name: 'rpOrgName',
                    fieldLabel: '元数据联系单位',
                    bind: '{rpOrgName}'
                }]
            }, {
                items: [{
                    xtype: 'displayfield',
                    name: 'cntAddCenter',
                    fieldLabel: '元数据维护方地址',
                    bind: '{cntAddCenter}'
                }]
            }]
        }]
    }]
});
