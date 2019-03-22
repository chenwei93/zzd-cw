Ext.define('Cmdb.view.asset.zcwh.ZcwhTree', {
        extend: 'Ext.tab.Panel',

        xtype: 'zcwh-tree',

        plain:true,
        frame:false,

        tabPosition: 'top',
        scrollable: true,
        // height: 533,
        defaults: {
            useArrows: true,
            rootVisible: false,
            animate: false,
            reserveScrollbar: true,
            header: false,
            emptyText: "请选择资产清单",
            viewConfig: {
                deferEmptyText: false
            }
        },
        items: [
            {
                frame: false,
                title: '全量资产清单',
                xtype: 'treepanel',
                listeners: {
                    select: 'onSelect'
                },
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/qlzcqd/QlzcqdTree.json',
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
            }, {
                frame: false,
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
            }]
    }
);