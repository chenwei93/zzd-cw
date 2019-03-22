Ext.define('DA.view.dataservice.entryset.EntrySet', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryset',

    requires: [
        'DA.model.EntrySet',
        'DA.view.dataservice.entryset.EntrySetAdd',
        'DA.view.dataservice.entryset.EntrySetEdit',
        'DA.view.dataservice.entryset.EntrySetModel',
        'DA.view.dataservice.entryset.EntrySetController',
    ],
    controller: 'entryset',
    viewModel: {
        type: 'entryset'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '刷新',
        ui: 'default',
        iconCls: 'x-fa fa-refresh',
        handler: 'onRefresh'
        // }, '-', {
        //     text: '模版导入',
        //     ui: 'default',
        //     iconCls: 'x-fa fa-download',
        //     handler: 'onVer'
        // }, '-', {
        //     text: '模版导出',
        //     ui: 'default',
        //     iconCls: 'x-fa fa-upload',
        //     handler: 'onDelete'
    }, '->',
        {
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
                specialkey: 'onSpecialkey'
            }
        }, {
            iconCls: 'x-fa fa-refresh',
            tooltip: '重置',
            handler: 'onreset'
        }, {
            iconCls: 'x-fa fa-navicon',
            tooltip: '更多条件查询',
            handler: 'onQuery'
        }],
    columns:
        [{
            text: "名称",
            flex: 1,
            dataIndex: 'title',
            editable: true,
            reference: 'title',
            editor: {
                xtype: 'textfield'
            },
        }, {
            text: "版本",
            sortable: false,
            flex: 1,
            dataIndex: 'version',
            reference: 'version',
            editor: {
                xtype: 'textfield'
            },
        }, {
            text: "状态",
            editable: false,
            flex: 1,
            dataIndex: 'entityStatus',
            renderer: function (value) {
                if (value == 'Default') {
                    return '默认'
                } else {
                    return '激活'
                }
            }
        }, {
            text: "操作",
            align: 'center',
            xtype: 'actioncolumn',
            items: [{
                iconCls: 'x-fa fa-clone',
                tooltip: '复制',
                handler: 'onClone'
            }, {
                iconCls: 'x-fa fa-plus-circle',
                tooltip: '新增版本',
                handler: 'onAddVersion'
            }, {
                iconCls: 'x-fa fa-check-circle-o',
                tooltip: '激活',
                handler: 'onActivate'
            }, {
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onPencil'
            }, {
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
                handler: 'onDelete'

            }],
            cls: 'content-column',
            width: 110,
            right: 0,
            tooltip: '操作'
        }],
    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText: '保存',
        cancelBtnText: "取消",
        listeners: {
            edit: 'onEdit'
        }
    }, {
        ptype: 'rowwidget',
        onWidgetAttach: function (plugin, bodyComponent, record) {
            var id = record.data.id,
                gridStore = bodyComponent;
            var store = {
                autoLoad: true,
                folderSort: true,
                model: 'EntryMetadata',
                proxy: {
                    type: 'ajax',
                    url: '/drdms/api/tree/package/' + id,
                    reader: {
                        // rootProperty: 'children',
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
            };
            gridStore.setStore(store);
        },
        widget: {
            xtype: 'treepanel',
            autoLoad: true,
            bind: {
                store: null
            },
            rootVisible: false,
            columns:
                [{
                    xtype: 'treecolumn',
                    text: '名称',
                    dataIndex: 'text',
                    flex: 1,
                }, {
                    text: '系统标识',
                    dataIndex: 'name',
                    flex: 1,
                    sortable: true
                }, {
                    text: '数据类型',
                    dataIndex: 'dataType',
                    flex: 1,
                    sortable: false
                }]
        }
    }]
})
;
