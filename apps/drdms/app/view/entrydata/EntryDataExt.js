Ext.define('DRDMS.view.entrydata.EntryDataExt', {
    extend: 'Ext.form.Panel',
    xtype: 'entrydata-ext',

    frame: false,
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
            name: 'KFLX',
            fieldLabel: '是否向社会公开',
            renderer: function (value) {
                if (value == 'YES') {
                    return '是'
                } else {
                    return '否'

                }
            },
            bind: '{entrydata.KFLX}'
        }, {
            name: 'GXFS',
            fieldLabel: '共享方式',
            bind: '{entrydata.GXFS}'
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
            bind: '{entrydata.contentType}'
        }]
    }, {
        margin: '0 0 0 0',
        xtype: 'fieldset',
        title: '扩展元数据',
        collapsible: false,
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
                bind: '{entrydata.mdId}'
            }, {
                xtype: 'displayfield',
                name: 'rpOrgName',
                fieldLabel: '元数据联系单位',
                bind: '{entrydata.rpOrgName}'
            }]
        }, {
            items: [{
                xtype: 'displayfield',
                name: 'cntAddCenter',
                fieldLabel: '元数据维护方地址',
                bind: '{entrydata.cntAddCenter}'
            }]
        }]
    }]
});
