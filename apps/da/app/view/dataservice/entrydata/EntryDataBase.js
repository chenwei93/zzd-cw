Ext.define('DA.view.dataservice.entrydata.EntryDataBase', {
    extend: 'Ext.form.Panel',
    xtype: 'entrydata-base',

    frame: false,

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
                bind: '{entrydata.resTitle}'
            }, {
                name: 'pubDate',
                labelWidth: 60,
                flex: 1,
                fieldLabel: '发布日期',
                bind: '{entrydata.pubDate}'
            }]
    }, {
        name: 'abstracts',
        fieldLabel: '资源摘要',
        bind: '{entrydata.abstracts}'
    }, {
        name: 'resID',
        fieldLabel: '资源标识符',
        bind: '{entrydata.resID}'
    }, {
        name: 'onLineSrc',
        fieldLabel: '在线资源地址',
        bind: '{entrydata.onLineSrc}'
    }, {
        fieldLabel: '关键字',
        value: '空'
        // }, {
        //     xtype: 'fieldset',
        //     layout: 'hbox',
        //     title: '类别描述',
        //     collapsible: false,
        //     defaults: {
        //         xtype: 'container',
        //         flex: 1,
        //         layout: 'form'
        //     },
        //     items: [{
        //         name: 'catalog',
        //         fieldLabel: '资源分类'
        //     }, {
        //
        //         name: 'gbL',
        //         fieldLabel: '国标代码'
        //     }
        //     ]
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
                bind: '{entrydata.rpOrgName}'
            }]
        }, {
            items: [{
                xtype: 'displayfield',
                name: 'cntAdd',
                fieldLabel: '资源提供方地址',
                bind: '{entrydata.cntAdd}'
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
                bind: '{entrydata.serviceType}'
            }]

        }, {
            items: [{
                xtype: 'displayfield',
                name: 'serviceURL',
                fieldLabel: '服务地址',
                bind: '{entrydata.serviceURL}'
            }]

        }
        ]
    }, {
        xtype: 'fieldset',
        title: '资源元数据',
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
                fieldLabel: '元数据标识符'
            }, {
                xtype: 'displayfield',
                name: 'rpOrgCenter',
                fieldLabel: '元数据联系单位',
                bind: '{entrydata.rpOrgCenter}'
            }]
        }, {
            items: [{
                xtype: 'displayfield',
                name: 'cntAddCenter',
                fieldLabel: '元数据维护方地址',
                bind: '{entrydata.cntAddCenter}'
            }, {
                xtype: 'displayfield',
                name: 'mdDateUpd',
                fieldLabel: '元数据更新日期',
                bind: '{entrydata.mdDateUpd}'
            }]
        }]
    }]
});
