Ext.define('DA.view.mgr.workorder.ZcBdGrid', {
    extend: 'Ext.tree.Panel',
    xtype: 'zcbd-grid',


    rootVisible: false,
    store: {
        type: 'tree',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'app/store/data/mgr/workorder/BmzcqdTree.json',
            reader:{
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
    },
    columns: [{
        xtype: 'treecolumn',
        text: '目录项名称',
        flex: 1,
        dataIndex: 'text'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-check',
                tooltip: '选择',
                handler: 'onChoose'
            }
        ],
        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]
});

