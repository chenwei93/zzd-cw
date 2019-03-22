Ext.define('Cmdb.view.asset.bmzcqd.ZcChooseSJY', {
    extend: 'Ext.tab.Panel',
    xtype: 'zc-choosesjy',


    tbar: [{
        text: '确定',
        handler: 'onChooseSjySure'
    }, {
        text: '取消',
        handler: 'onChooseSjyCancel'
    }],
    plain: true,
    items: [{
        title: '标准数据元',
        items: {
            xtype: 'treepanel',
            rootVisible: false,
            store: {
                type: 'tree',
                autoLoad: true,
                folderSort: true,
                proxy: {
                    type: 'ajax',
                    url: 'app/store/data/asset/entryset/package.json',
                    reader: {
                        rootProperty: function (rs) {
                            if (rs.children != null) {
                                if (rs.children.length == 1) {
                                    return rs.children[0].children;
                                } else {
                                    return rs.children
                                }
                            }
                        }
                    }
                }
            },
            selType: 'checkboxmodel',
            columns: [{
                xtype: 'treecolumn',
                text: '名称',
                flex: 1,
                dataIndex: 'text'
            }, {
                text: '编码',
                flex: 1,
                dataIndex: 'extraAttributes',
                renderer: function (data) {
                    return data.name
                }
            }]
        }
    }, {
        title: '数据字典',
        items: {
            xtype: 'gridpanel',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: 'app/store/data/asset/bmzcqd/Dictionary.json'
                }
            },
            selType: 'checkboxmodel',
            columns: [{
                text: '名称',
                flex: 1,
                dataIndex: 'text'
            }, {
                text: '编码',
                flex: 1,
                dataIndex: 'code'
            }]
        }
    }, {
        title: '分类',
        items: {
            xtype: 'gridpanel',
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: 'app/store/data/asset/bmzcqd/Catalog.json'
                }
            },
            selType: 'checkboxmodel',
            columns: [{
                text: '名称',
                flex: 1,
                dataIndex: 'text'
            }, {
                text: '编码',
                flex: 1,
                dataIndex: 'code'
            }]
        }
    }]
});