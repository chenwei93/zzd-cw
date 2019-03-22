Ext.define('DA.view.entry.bloodconf.BloodConf', {
    extend: 'Ext.grid.Panel',
    xtype: 'bloodconf',

    requires: [
        'DA.view.entry.bloodconf.BloodConfModel',
        'DA.view.entry.bloodconf.BloodConfController',
        'DA.view.entry.bloodconf.ConfPanel',
        'DA.view.entry.bloodconf.BloodConfDetail'
    ],
    controller: 'bloodconf',
    viewModel: 'bloodconf',
    bind: {
        store: '{list}'
    },
    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            defaults: {
                xtype: 'textfield',
                labelWidth: 90,
                columnWidth: 0.215
            },
            layout: 'column',
            items: [{
                fieldLabel: '上级表中文名',
                name: 'sourceNameCh',
                reference: 'sourceNameCh'
            }, {
                fieldLabel: '上级表英文名',
                name: 'sourceNameEn',
                reference: 'sourceNameEn'
            }, {
                fieldLabel: '上级列中文名',
                name: 'sourceColumnCh',
                reference: 'sourceColumnCh'
            }, {
                fieldLabel: '上级列英文名',
                name: 'sourceColumnEn',
                reference: 'sourceColumnEn'

            }, '->', {
                xtype: 'button',
                ui: 'default',
                text: '查询',
                handler: 'onSearch',
                columnWidth: 0.07
            }, {
                xtype: 'button',
                text: '重置',
                handler: 'onReset',
                columnWidth: 0.07
            }, {
                xtype: 'button',
                ui: 'default',
                text: '血缘配置',
                margin: '5 0 0 0',
                columnWidth: 0.1,
                handler: 'onConf'
            }]
        }]

    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '上级表',
        flex: 1,
        dataIndex: 'sourceNameCh'
    }, {
        text: '上级列',
        flex: 1,
        dataIndex: 'sourceColumnCh'
    }, {
        text: '下级表',
        flex: 1,
        dataIndex: 'targetNameCh'
    }, {
        text: '下级列',
        flex: 1,
        dataIndex: 'targetColumnCh'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        items: [
            {
                iconCls: 'x-fa fa-eye',
                tooltip: '详情',
                handler: 'onDetail'
            },
            {
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
                handler: 'onDelete'
            }
        ],
        cls: 'content-column',
        width: 70,
        align: 'center',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
