Ext.define('Starter.view.entrydata.EntryDataEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'entrydata-edit',


    requires: [
        'Starter.view.entrydata.EntryDataEditController',
        'Starter.view.entrydata.EntrydataGrid'
    ],
    title: '信息资源调研表',

    scrollable: true,
    defaults: {
        margin: 10,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    controller: 'entrydata-edit',
    tbar: [{
        text: '提交',
        handler: 'onSubmit'
    }],
    items: [{

        items: [{
            fieldLabel: '<em class="required">*</em>' + '信息资源名称',
            flex: 1,
            allowBlank: false,
            name: 'resTitle'
        }]
    }, {
        items: [{
            xtype: 'textarea',
            flex: 1,
            fieldLabel: '<em class="required">*</em>' + '信息资源摘要',
            allowBlank: false,
            name: 'abstracts'
        }]
    }, {
        items: [{
            xtype: 'combo',
            fieldLabel: '<em class="required">*</em>' + '信息资源形态',
            margin:'0 20 0 0',
            allowBlank: false,
            flex: 1,
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/Format',
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
            name: 'format2',
            queryMode: 'local',
            publishes: 'idRel'
        },{
            fieldLabel: '<em class="required">*</em>' + '更新周期',
            flex: 1,
            xtype: 'combo',
            allowBlank: false,
            name: 'gxzqGXZQ',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/GXZQ',
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
            publishes: 'idRel'

        }]
    }, {
        items: [{
            fieldLabel: '<em class="required">*</em>' + '信息项',
            xtype: 'displayfield',
            width: 105
        }, {
            width: 80,
            xtype: 'button',
            text: '增加',
            handler: 'onAdd'
        }]
    }, {

        xtype: 'fieldset',
        collapsible: true,
        items: [{
            xtype: 'radiogroup',
            fieldLabel: '是否对社会开放',
            allowBlank: false,
            name: 'kflx',
            flex: 1,
            items: [
                {boxLabel: '是', inputValue: 'dictionaryItems/YES'},
                {boxLabel: '否', inputValue: 'dictionaryItems/NO', checked: true}
            ]
        }, {
            fieldLabel: '开放条件',
            xtype: 'textfield',
            allowBlank: false,
            name: 'extraKFTJ',
            flex: 1
        }]
    }, {
        xtype: 'fieldset',
        collapsible: true,
        items: [{
            fieldLabel: '共享类型',
            allowBlank: false,
            labelAlign: 'top',
            xtype: 'combo',
            width: 250,
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/GXLX',
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
            name: 'gxlx',
            publishes: 'idRel'
        }, {
            fieldLabel: '共享方式',
            allowBlank: false,
            labelAlign: 'top',
            xtype: 'combo',
            width: 200,
            margin: '0 30px',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/codes/GXFS',
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
            name: 'gxfs'

        }, {

            fieldLabel: '共享条件',
            labelAlign: 'top',
            xtype: 'textfield',
            name: 'extraGXTJ',
            flex: 1
        }]
    }, {
        xtype: 'fieldset',
        collapsible: true,
        items: [{
            fieldLabel: '信息资源提供方',
            name: 'rpOrgName',
            flex: 1,
            xtype: 'treepicker',
            minPickerHeight: 200,
            margin: '0 20 0 0',
            rootVisible: false,
            displayField: 'text',
            store: Ext.create('Ext.data.TreeStore', {
                fields: ['text'],
                root: {
                    text: '部门',
                    expanded: true
                },
                proxy: {
                    type: 'ajax',
                    url: '/rest/tree/departments',
                    reader: {
                        type: "json",
                        rootProperty: 'children'
                    }
                }
            }),
            listeners: {
                render: function () {
                    this.getPicker().getStore().setRootVisible(false);
                    this.getPicker().expandAll();
                },
                select: function (data) {
                    var id = data.rawValue;
                    this.value = id;
                }
            }
        }, {
            xtype: 'textfield',
            fieldLabel: '信息资源提供方代码',
            labelWidth: 130,
            name: 'providerCode',
            flex: 1
        }]
    }, {
        xtype: 'fieldset',
        collapsible: true,
        items: [{
            fieldLabel: '资源发布日期',
            xtype: 'displayfield',
            name: 'pubDate',
            flex: 1,
            value: '空'
        }, {
            xtype: 'displayfield',
            fieldLabel: '目录信息码',
            name: 'bizCode',
            flex: 1,
            value: '空'
        }, {
            xtype: 'textfield',
            fieldLabel: '信息资源分类',
            name: 'name',
            flex: 1
        }]
    }]


});