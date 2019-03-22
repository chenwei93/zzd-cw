Ext.define('Cmdb.view.business.allzcml.AllZcml', {
    extend: 'Ext.panel.Panel',
    xtype: 'allzcml',


    requires: [
        'Cmdb.view.business.allzcml.AllZcmlController',
        'Cmdb.view.business.allzcml.AllZcmlModel'
    ],
    viewModel: {
        type: 'allzcml'
    },
    layout: 'hbox',

    controller: 'allzcml',
    items: [{
        flex: 1,
        xtype: 'tabpanel',
        plain: true,
        frame: false,
        items: [{
            title: '设备',
            items: [{
                xtype: 'treepanel',
                store: {
                    type: 'tree',
                    proxy: {
                        type: 'ajax',
                        url: 'app/view/business/allzcml/data/AllEntryList.json',
                        rootVisible: false,
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
                rootVisible: false,
                columns: [{
                    xtype: 'treecolumn',
                    dataIndex: 'name',
                    flex: 1
                }],
                listeners: {
                    select: 'onSelect'
                }
            }]
        }, {
            title: '部门',
            items: [{
                xtype: 'treepanel',
                rootVisible: false,
                store: {
                    rootVisible: false,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/entry/department.json',
                        reader: {
                            rootProperty: 'children'
                        }
                    }
                },
                columns: [{
                    xtype: 'treecolumn',
                    dataIndex: 'text',
                    flex: 1
                }],
                listeners: {
                    select: 'onDeptSelect'
                }
            }]
        }],


    }, {
        xtype: 'gridpanel',
        flex: 4,
        reference: 'gridShow',
        columns: [
            {
                dataIndex: 'type',
                text: '类型',
                flex: 1
            }, {
                dataIndex: 'name',
                text: '名称',
                flex: 1
            }, {
                dataIndex: 'factory',
                text: '厂家',
                flex: 1
            }, {
                dataIndex: 'xh',
                text: '型号',
                flex: 1
            }, {
                dataIndex: 'sbh',
                text: '设备号',
                flex: 1
            }, {
                dataIndex: 'zpe',
                text: '总配额',
                flex: 1
            }, {
                dataIndex: 'yfppe',
                text: '已分配配额',
                flex: 1
            }, {
                dataIndex: 'sype',
                text: '剩余配额',
                flex: 1
            }, {
                dataIndex: 'sspe',
                text: '实施配额',
                flex: 1
            }, {
                dataIndex: 'sykj',
                text: '剩余空间',
                flex: 1
            }, {
                dataIndex: 'zh',
                text: '租户',
                flex: 1
            }, {
                text: '运行状态',
                flex: 1,
                renderer: function () {
                    return '<span class="x-fa fa-circle" style="color: green;"></span>'
                }
            }, {
                xtype: 'actioncolumn',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-circle-o',
                        tooltip: '配额',
                        handler: 'onPE'
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-cog',
                        tooltip: '实施',
                        handler: 'onSS'
                    }
                ],
                cls: 'content-column',
                width: 80,
                align: 'center',
                text: '操作'
            }]
    }]

});