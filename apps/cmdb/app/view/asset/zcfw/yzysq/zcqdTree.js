Ext.define('Cmdb.view.asset.zcfw.yzysq.zcqdTree', {
    extend: 'Ext.tab.Panel',

    xtype: 'zcqd-tree',
    plain: true,
    frame: false,

    tabPosition: 'bottom',
    height: 553,
    defaults: {
        useArrows: true,
        rootVisible: false,
        animate: false,
        reserveScrollbar: true,
        header: false,
        emptyText: "请选择资产清单",
        viewConfig: {
            deferEmptyText: false
        },
        frame: false
    },
    items: [{
        title: '全量资产清单',
        xtype: 'treepanel',
        reference: 'all',
        plain: true,
        frame: false,
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
        title: '部门资产清单',
        xtype: 'treepanel',
        reference: 'dept',
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
});