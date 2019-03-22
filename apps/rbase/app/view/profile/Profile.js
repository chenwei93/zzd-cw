Ext.define('RBase.view.profile.Profile', {
    extend: 'Ext.tab.Panel',
    xtype: 'profile',

    requires: [
        'RBase.view.profile.ProfileAuto',
        'RBase.view.profile.ProfileController'
    ],
    controller: 'profile',
    items: [{
        title: '节点信息',
        tbar: [{
            text: '节点重置',
            ui: 'default',
            iconCls: 'x-fa fa-history',
            handler: 'onRest'
        }, {
            text: '节点重新注册',
            ui: 'default',
            iconCls: 'x-fa fa-pencil-square-o',
            handler: 'onRegister'
        }, {
            text: '清除工作台缓存',
            ui: 'default',
            iconCls: 'x-fa fa-trash-o',
            handler: 'onClean'
        }],
        items: [{
            xtype: 'form',
            margin: '20 10 10 20',
            defaults: {
                border: false,
                xtype: 'panel',
                flex: 1,
                layout: 'anchor'
            },
            layout: 'hbox',
            listeners: {
                afterrender: function () {
                    var form = this.getForm();
                    Ext.Ajax.request({
                        method: 'GET',
                        url: '/rbase/api/getProjectSetting',
                        success: function (rs) {
                            var value = JSON.parse(rs.responseText);
                            form.setValues(value);
                        }
                    });
                }
            },
            items: [{
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: '地区节点单位编码',
                    anchor: '-5',
                    labelWidth: 160,
                    name: 'nodeOrganizationCode'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '地区节点单位名称',
                    anchor: '-5',
                    labelWidth: 160,
                    name: 'nodeOrganizationName'
                }]
            }, {
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: '地区节点单位地址',
                    anchor: '-5',
                    labelWidth: 160,
                    name: 'nodeAddress'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '部门端的DRDMS系统地址',
                    anchor: '-5',
                    labelWidth: 160,
                    name: 'nodeServer'
                }]
            }]
        }]
    }, {
        title: '自动编目规则配置',
        xtype: 'profile-auto'
    }, {
        title: '基础数据管理',
        items: [{
            xtype: 'grid',
            store: {
                fields: [{
                    name: 'type', type: 'string'
                }, {
                    name: 'format'
                }, {
                    name: 'expression', type: 'string'
                }, {
                    name: 'matcherClass', type: 'string'
                }],
                autoLoad: true,
                proxy: {
                    url: '/rbase/api/getContentTypeDetails',
                    type: 'ajax',
                    reader: {
                        dataType: 'json'
                    }
                }
            },
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '资源形态',
                width: 150,
                dataIndex: 'type'
            }, {
                text: '资源格式',
                dataIndex: 'format'
            }, {
                text: '资源格式对应的扩展名',
                flex: 1,
                dataIndex: 'expression'
            }, {
                text: '资源格式和形态的对应关系',
                flex: 1,
                dataIndex: 'matcherClass'
            }]
        }]
    }, {
        title: '全局性参数',
        items: [{
            xtype: 'form',
            id: 'demoform',
            defaults: {
                border: false,
                layout: 'hbox'
            },
            listeners: {
                afterrender: function () {
                    var form = this.getForm();
                    Ext.Ajax.request({
                        method: 'GET',
                        url: '/rbase/api/getServerProperties',
                        success: function (rs) {
                            var value = JSON.parse(rs.responseText);
                            form.setValues(value);
                        }
                    });
                }
            },
            margin: 20,
            items: [{
                items: [{
                    fieldLabel: '文件临时生成目录',
                    xtype: 'displayfield',
                    name: 'id',
                    labelAlign: 'top',
                    flex: 1,
                    margin: 20
                }, {
                    fieldLabel: '是否启用索引功能',
                    labelAlign: 'top',
                    flex: 1,
                    margin: 20,
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [{
                        xtype: 'checkbox',
                        flex: 1,
                        boxLabel: '是'
                    }, {
                        xtype: 'checkbox',
                        flex: 1,
                        boxLabel: '否'
                    }]
                }]
            }, {
                items: [{
                    fieldLabel: '索引存放路径',
                    labelAlign: 'top',
                    flex: 1,
                    margin: 20,
                    xtype: 'textfield'
                }, {
                    fieldLabel: '是否启用访问日志',
                    labelAlign: 'top',
                    flex: 1,
                    margin: 20,
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [{
                        xtype: 'checkbox',
                        flex: 1,
                        boxLabel: '是'
                    }, {
                        xtype: 'checkbox',
                        flex: 1,
                        boxLabel: '否'
                    }]
                }]
            }, {
                xtype: 'container',
                margin: 30,
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [{
                    xtype: 'button',
                    text: '保存',
                    handler: 'onSave'
                }]
            }]
        }]
    }]
});