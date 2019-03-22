Ext.define('Cmdb.view.asset.zcdj.ZcdjAdd', {
    extend: 'Ext.panel.Panel',
    xtype: 'zcdj-add',


    controller: 'zcdj',
    layout: 'hbox',
    items: [{
        flex: 1,
        items: [{
            xtype: 'tabpanel',
            tabPosition: 'top',
            plain:true,
            frame:false,
            height: 553,
            defaults: {
                useArrows: true,
                rootVisible: false,
                animate: false,
                reserveScrollbar: true,
                header: false,
                frame: false
            },

            items: [{
                title: '全量资产清单',
                xtype: 'treepanel',
                plain:true,
                frame:false,
                listeners: {
                    select: 'onSelect'
                },
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/qlzcqd/QlzcqdTree.json',
                        reader: {
                            // rootProperty: function (rs) {
                            //     if (rs.children != null) {
                            //         if (rs.children.length == 1) {
                            //             return rs.children[0].children[0].children;
                            //         } else {
                            //             return rs.children
                            //
                            //         }
                            //     }
                            // },
                            rootProperty:'children'
                        }
                    }
                }
            }, {
                title: '部门资产清单',
                xtype: 'treepanel',
                listeners: {
                    select: 'onSelect'
                },
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/bmzcqd/BmzcqdTree.json',
                        reader: {
                            rootProperty: function (rs) {
                                if (rs.children != null) {
                                    if (rs.children.length == 1) {
                                        return rs.children[0].children[0].children;
                                    } else {
                                        return rs.children

                                    }
                                }
                            },
                        }
                    }
                }
            }],
        }]

    }, {
        flex: 2,
        items: [{
            reference: 'needGrid',
            xtype: 'gridpanel',
            emptyText: "暂无数据",
            viewConfig: {
                deferEmptyText: false

            },
            tbar: {
                xtype: 'container',
                items: [{
                    xtype: 'toolbar',
                    layout: 'hbox',
                    items: [{
                        xtype: 'textfield',
                        flex: 1,
                        name: 'text',
                        reference: 'mlxName',
                        fieldLabel: '目录项名称',
                        emptyText: '目录项名称'
                    }, {
                        xtype: 'textfield',
                        flex: 1,
                        name: 'code',
                        reference: 'mlxCode',
                        emptyText: '目录项编码',
                        fieldLabel: '目录项编码'
                    }]
                }, {
                    xtype: 'toolbar',
                    layout: 'hbox',
                    items: [{
                        xtype: 'textfield',
                        name: 'des',
                        flex: 1,
                        reference: 'mlxDes',
                        fieldLabel: '目录项描述',
                        emptyText: '目录项描述'
                    }, {
                        xtype: 'textfield',
                        name: 'type',
                        flex: 1,
                        reference: 'mlxType',
                        fieldLabel: '目录项描述',
                        hidden: true,
                        emptyText: '目录项描述'
                    }, {
                        xtype: 'textfield',
                        name: 'alldata',
                        flex: 1,
                        reference: 'allData',
                        hidden: true,
                    }]
                }, {
                    xtype: 'toolbar',
                    layout: 'hbox',
                    items: [
                        {
                            text: '新增',
                            handler: 'onAddZc'
                        },
                        '->', {
                            xtype: 'textfield',
                            emptyText: '输入查询内容直接回车',
                            reference: 'searchText',
                            triggers: {
                                bar: {
                                    cls: 'x-form-clear-trigger',
                                    handler: function () {
                                        this.reset();
                                    }
                                }
                            },
                            listeners: {
                                // specialkey: 'onSpecialkey'
                            }
                        }]
                }]
            },
            columns: [{
                text: '名称',
                flex: 1,
                dataIndex: 'y_title'
            }, {
                text: '编码',
                flex: 1,
                dataIndex: 'y_code'
            }, {
                text: '描述',
                flex: 1,
                dataIndex: 'des'
            }]
        }]

    }]
})
;