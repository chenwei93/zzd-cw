Ext.define('DA.view.dataservice.entry.EntryEditFormBase', {
    extend: 'Ext.form.Panel',
    xtype: 'entryedit-formbase',

    frame: false,

    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    items: [
        {
            padding: '0 0 10 0',
            items: [
                {
                    xtype: 'textfield',
                    name: 'resTitle',
                    flex: 2,
                    fieldLabel: '资源名称' + '<em class="required">*</em>',
                    allowBlank: false
                }, {
                    xtype: 'datefield',
                    name: 'createTime',
                    labelWidth: 60,
                    flex: 1,
                    fieldLabel: '发布日期'
                }]
        }, {
            xtype: 'textarea',
            name: 'abstracts',
            fieldLabel: '资源摘要'
        }, {
            xtype: 'textfield',
            name: 'resId',
            fieldLabel: '资源标识符',
            readOnly: true
        }, {
            xtype: 'textfield',
            name: 'onLineSrc',
            fieldLabel: '在线资源地址'
        }, {
            xtype: 'tagfield',
            name: 'keyword',
            fieldLabel: '关键字',
            store: {
                fields: [
                    'title',
                    'code'
                ],
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/base/codesByType/Tag'
                }
            },
            displayField: 'title',
            valueField: 'code',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            listeners: {}
        }, {
            xtype: 'fieldset',
            layout: 'hbox',
            title: '分类信息',
            collapsible: false,
            defaults: {
                xtype: 'container',
                flex: 1,
                layout: 'form'
            },
            items: [
                {
                    items: [{
                        submitValue: false,
                        xtype: 'textfield',
                        name: 'catalogGB',
                        fieldLabel: '按主题',
                        reference: 'CatalogGB',
                        listeners: {
                            render: 'onRen'
                        }
                    }, {
                        hidden: true,
                        xtype: 'textfield',
                        name: 'catalogGB',
                        fieldLabel: '按主题',
                        reference: 'CatalogGBCode'
                    }]
                }, {
                    items: [{
                        submitValue: false,
                        xtype: 'textfield',
                        name: 'catalogHY',
                        fieldLabel: '按行业',
                        reference: 'CatalogHY',
                        listeners: {
                            render: 'onRen'
                        }
                    }, {
                        hidden: true,
                        xtype: 'textfield',
                        name: 'catalogHY',
                        fieldLabel: '按行业',
                        reference: 'CatalogHYCode'
                    }]
                }, {
                    items: [{
                        submitValue: false,
                        xtype: 'textfield',
                        name: 'catalogSS',
                        fieldLabel: '按应用',
                        reference: 'CatalogSS',
                        listeners: {
                            render: 'onRen'
                        }
                    }, {
                        hidden: true,
                        xtype: 'textfield',
                        name: 'catalogSS',
                        fieldLabel: '按应用',
                        reference: 'CatalogSSCode'
                    }]
                }
            ]
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
            items: [
                {
                    items: [{
                        xtype: 'textfield',
                        name: 'rpOrgName',
                        fieldLabel: '资源提供单位'
                    }]
                }, {
                    items: [{
                        xtype: 'textfield',
                        name: 'cntAdd',
                        fieldLabel: '资源提供方地址'
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
                    name: 'serviceType',
                    xtype: 'combo',
                    padding: '0 10 0 0',
                    flex: 1,
                    queryMode: 'local',
                    displayField: 'title',
                    valueField: 'code',
                    store: {
                        fields: [
                            'title',
                            'code'
                        ],
                        autoLoad: true,
                        proxy: {
                            type: 'ajax',
                            url: '/base/api/codes/serviceType'
                        }
                    },
                    fieldLabel: '服务类型'
                }]
            }, {
                items: [{
                    xtype: 'textfield',
                    name: 'serviceURL',
                    fieldLabel: '服务地址'
                }]
            }
            ]
        }, {
            xtype: 'fieldset',
            title: '资源元数据',
            collapsed: true,
            collapsible: true,
            layout: 'hbox',
            defaults: {
                xtype: 'container',
                flex: 1,
                layout: 'form'
            },
            items: [{
                items: [{
                    xtype: 'textfield',
                    name: 'mdId',
                    fieldLabel: '元数据标识符'
                }, {
                    xtype: 'textfield',
                    name: 'rpOrgName',
                    fieldLabel: '元数据联系单位'
                }]
            }, {
                items: [{
                    xtype: 'textfield',
                    name: 'cntAdd',
                    fieldLabel: '元数据维护方地址'
                }, {
                    xtype: 'textfield',
                    name: 'mdDateUpd',
                    fieldLabel: '元数据更新日期'
                }]
            }]
        }
    ],
    listeners: {
        render: function () {
            var me = this;
            var entityId = me.up('entry-edit').entityId;
            if (entityId != undefined) {
                Ext.Ajax.request({
                    url: '/drdms/api/entryDatas/' + entityId,
                    success: function (rs) {
                        var _rs = JSON.parse(rs.responseText);
                        var turnCatalog = function (catalog) {
                            var catalogGb;
                            if (catalog != undefined && catalog.length != 0) {
                                catalogGb = catalog[0].title;
                                for (var i = 1; i < catalog.length; i++) {
                                    catalogGb += ',' + catalog[i].title
                                }
                            } else {
                                catalogGb = null;
                            }
                            return catalogGb;
                        };
                        var turnKeyword = function () {
                            if (_rs.hasOwnProperty('keyword')) {
                                return turnCatalog(_rs.keyword)
                            } else {
                                return null;
                            }
                        };
                        var turnServiceType = function (serviceType) {
                            if (_rs.hasOwnProperty('serviceType')) {
                                return serviceType.title;
                            } else {
                                return null;
                            }
                        };
                        var data = {
                            resTitle: _rs.resTitle,
                            createTime: _rs.createTime,
                            abstracts: _rs.abstracts,
                            resId: _rs.resId,
                            onLineSrc: _rs.onLineSrc,
                            keyword: turnKeyword(),
                            rpOrgName: _rs.rpOrgName,
                            cntAdd: _rs.cntAdd,
                            serviceType: turnServiceType(_rs.serviceType),
                            serviceURL: _rs.serviceURL,
                            mdId: _rs.mdId,
                            mdDateUpd: _rs.mdDateUpd,
                            catalogGB: turnCatalog(_rs.catalogGB),
                            catalogHY: turnCatalog(_rs.catalogHY),
                            catalogSS: turnCatalog(_rs.catalogSS),
                        };
                        me.getForm().setValues(data);
                        me.fieldItem = _rs
                    }
                });
            }
        }
    }
});
