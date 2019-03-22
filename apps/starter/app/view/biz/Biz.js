Ext.define('Starter.view.biz.Biz', {
    extend: 'Ext.form.Panel',
    xtype: 'biz',

    requires: [
        'Starter.view.biz.BizController'
    ],
    title: '业务系统调研表',
    tbar: [{
        text: '提交',
        handler: 'onSubmit'
    }],

    scrollable: true,
    defaults: {
        margin: 15,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    controller: 'biz',
    items: [{
        items: [{
            fieldLabel: '<em class="required">*</em>' + '业务系统名称',
            name: '',
            flex: 1
        }]
    }, {
        items: [{
            xtype: 'displayfield',
            fieldLabel: '<em class="required">*</em>' + '软件环境',
            width: 105
        }, {
            labelAlign: 'top',
            fieldLabel: '操作系统',
            name: 'CZXTLX',
            flex: 1,
            xtype: 'combo',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/CZXTLX',
                    reader: {
                        rootProperty: 'array',
                        dataType: 'json'
                    }
                }
            },
            displayField: 'title',
            valueField: 'idRel',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'idRel',
            margin: '0 20 0 0 '
        }, {
            labelAlign: 'top',
            fieldLabel: '数据库',
            name: 'SJKLX',
            flex: 1,
            xtype: 'combo',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/SJKLX',
                    reader: {
                        rootProperty: 'array',
                        dataType: 'json'
                    }
                }
            },
            displayField: 'title',
            valueField: 'idRel',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'idRel',
            margin: '0 20 0 0 '
        }, {
            labelAlign: 'top',
            fieldLabel: '开发体系',
            name: 'KFTXLX',
            xtype: 'combo',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/KFTXLX',
                    reader: {
                        rootProperty: 'array',
                        dataType: 'json'
                    }
                }
            },
            displayField: 'title',
            valueField: 'idRel',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'idRel',
            flex: 1
        }]

    }, {
        items: [{
            xtype: 'displayfield',
            fieldLabel: '<em class="required">*</em>' + '系统部署情况',
            width: 105
        }, {
            labelAlign: 'top',
            margin: '0 20 0 0 ',
            fieldLabel: '部署地点',
            name: '',
            flex:1
        }, {
            labelAlign: 'top',
            fieldLabel: '网络环境',
            name: '',
            flex:1

        }]
    }, {
        items: [{
            xtype: 'textarea',
            flex: 1,
            fieldLabel: '摘要介绍',
            name: 'abstracts'
        }]

    },{
        xtype:'fieldset',
        collapsible: true,
        defaults: {
            // margin: 15,
            layout: 'vbox',
            xtype: 'container',
            width:'50%',
            defaultType: 'textfield',
            anchor: '100%'
        },
        items:[{
            items: [{
                fieldLabel: '使用周期',
                margin: '0 20 20 0',
                name: '',
                width: 350,
                flex: 1
            }, {
                fieldLabel: '占用硬件资源',
                name: '',
                width: 350,
                flex: 1
            },{
                fieldLabel: '运行情况',
                name: '',
                width: 350,
                margin: '0 20 20 0',
                flex: 1
            }, {
                fieldLabel: '上线时间',
                name: '',
                width: 350,
                flex: 1
            }]
        }, {
            items: [{
                fieldLabel: '开发商',
                labelWidth: 150,
                margin: '0 20 20 0',
                name: '',
                width: 400,
                flex: 1
            }, {
                fieldLabel: '对其它部门信息共享需求',
                labelWidth: 150,
                name: '',
                width: 400,
                flex: 1
            }, {
                fieldLabel: '主要业务功能',
                labelWidth: 150,
                name: '',
                width: 400,
                flex: 1
            },{
                flex: 1,
                fieldLabel: '其它说明',
                labelWidth: 150,
                width: 400,
                name: ''
            }]
        }]
    }]
});
