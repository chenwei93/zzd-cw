Ext.define('DA.view.dataservice.entry.EntryEditGridDataset', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryedit-griddataset',

    requires: [
        'Ext.selection.CellModel'
    ],

    frame: false,
    bodyPadding: 10,

    tbar: [{
        text: '保存',
        handler: 'onSaveGriddataset'
    }, {
        text: '重置',
        handler: function () {
            var me = this;
            var entityId = this.up('entry-edit').entityId;
            if (entityId != undefined) {
                Ext.Ajax.request({
                    url: '/drdms/api/entryDatas/' + entityId,
                    success: function (rs) {
                        var rs = JSON.parse(rs.responseText).fields.items;
                        var store = {
                            autoLoad: true,
                            data: rs
                        };
                        me.up('grid').setStore(store);
                    }
                });
            }

        }
    }, {
        // text: '新增',
        iconCls: 'x-fa fa-plus',
        tooltip: '新增',
        handler: 'onNewGriddataset'
    }],

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    columns: [{
        header: '字段名',
        dataIndex: 'name',
        editor: {
            allowBlank: false
        }
    }, {
        header: '中文名',
        dataIndex: 'title',
        width: 200,
        editor: {
            allowBlank: true
        }
    }, {

        header: '长度',
        dataIndex: 'dataLength',
        width: 70,
        align: 'right',
        editor: {
            xtype: 'numberfield',
            allowBlank: false,
            minValue: 0,
            maxValue: 100000
        }
    }, {
        xtype: 'checkcolumn',
        header: '不为空?',
        dataIndex: 'notNull',
        headerCheckbox: false,
        width: 90,
        stopSelection: false
    }, {
        xtype: 'checkcolumn',
        header: '是否主键?',
        dataIndex: 'alias',
        headerCheckbox: false,
        width: 80,
        stopSelection: false
    }, {
        header: '数据类型?',
        dataIndex: 'dataType',
        editor: {
            xtype: 'combo',
            displayField: 'name',
            valueField: 'value',
            emptyText: '数据类型',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '文本', value: 'Text'},
                    {name: '数值型', value: 'Numeric'},
                    {name: '布尔型', value: 'Boolean'},
                    {name: '日期型', value: 'Date'},
                    {name: '数据字典', value: 'Directory'},
                    {name: '大字段', value: 'Lob'}
                ]
            },
            listeners: {
                change: 'onChooseSelect'
            }
        },
        renderer: function (value) {
            if (value == 'Text') {
                return '文本'
            } else if (value == 'Numeric') {
                return '数值型'
            } else if (value == 'Boolean') {
                return '布尔型'
            } else if (value == 'Date') {
                return '日期型'
            } else if (value == 'Directory') {
                return '数据字典'
            } else if (value == 'Lob') {
                return '大字段'
            } else {
                return value
            }
        }
    }, {
        text: "业务类型",
        dataIndex: 'attributes',
        flex: 1,
        editor: {
            xtype: 'combo',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择业务类型',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '附件', value: 'fj'}
                ]
            }
        },
        renderer: function (data, cell, record, rowindex, colindex, store, a) {
            var arr = {
                fj: '附件',
                xx: '附件标题'
            };
            if (arr[data]) {
                return arr[data]
            } else {
                if (data && data.editor) {
                    var jude = data.editor.substring(0, data.editor.indexOf(':'));
                    if (jude == 'attachment') {
                        return '附件'
                    }
                } else {
                    return data
                }
            }
        }


    }, {
        xtype: 'actioncolumn',
        text: '操作',
        width: 80,
        cls: 'content-column',
        items: [{
            iconCls: 'x-fa fa-cog',
            tooltip: '填写附件类型配置',
            handler: 'onCHooseYwType'
        }, {
            iconCls: 'x-fa fa-close',
            tooltip: '删除',
            handler: 'onDele'
        }]
    }],
    listeners: {
        render: 'onGridDatasetsRender'
    }

});
