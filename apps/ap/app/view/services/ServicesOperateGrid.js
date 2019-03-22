Ext.define('AP.view.services.ServicesOperateGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-grid',


    requires: [
        'AP.view.services.ServicesInput'],
    scrollable: true,
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    tbar: [
        {
        tooltip: '预览',
        iconCls: 'x-fa fa-eye',
        handler: 'onView'
    }, '->', {
        xtype: 'textfield',
        fieldLabel: '字段名',
        labelWidth: 65,
        reference: 'searchText',
        emptyText: '输入字段名直接回车',
        triggers: {
            bar: {
                cls: 'x-form-clear-trigger',
                handler: function () {
                    this.reset();
                    if (top._filter != null) {
                        this.up('services-grid').getStore().getFilters().remove(top._filter);
                    }
                }
            }
        },
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }],
    listeners: {
        'cellclick': 'onChange'
    },
    viewConfig: {
        stripeRows: true,
        enableTextSelection: false,
        markDirty: false
    },
    trackMouseOver: false,
    disableSelection: true,
    columns: [{
        flex: 2,
        text: '字段名',
        dataIndex: 'title'
    }, {
        xtype: 'checkcolumn',
        headerCheckbox: true,
        text: '显示',
        flex: 1,
        dataIndex: 'display',
    }, {
        xtype: 'checkcolumn',
        headerCheckbox: true,
        text: '查询',
        flex: 1,
        dataIndex: 'query'
    }, {
        xtype: 'checkcolumn',
        headerCheckbox: true,
        text: '敏感',
        flex: 1,
        dataIndex: 'mask'
    }, {
        text: '别名',
        flex: 1,
        dataIndex: 'alias',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'checkcolumn',
        text: '关联',
        flex: 1,
        dataIndex: 'isRef'
    }, {
        text: '关联关系',
        dataIndex: 'refs',
        width: 150
    }, {
        xtype: 'actioncolumn',
        text: '表达式',
        flex: 1,
        items: [{
            iconCls: 'x-fa fa-edit',
            handler: 'onEdit',
            // margin: 5,
            tooltip: '表达式 '
        }],
        align: 'center',
        dataIndex: 'expression'
    }],

});
