Ext.define('DG.view.bloodshow.BloodShow', {
    extend: 'Ext.grid.Panel',
    xtype: 'bloodshow',

    requires: [
        'DG.view.bloodshow.BloodShowModel',
        'DG.view.bloodshow.BloodShowController',
    ],
    controller: 'bloodshow',
    viewModel: 'bloodshow',
    bind: {
        store: '{list}'
    },
    tbar: {
        xtype: 'container',
        items: [{
            xtype: 'toolbar',
            defaults: {
                xtype: 'textfield',
                labelWidth: 70,
                columnWidth: 0.43
            },
            layout: 'column',
            items: [{
                fieldLabel: '表中文名',
                name:'nameCh',
                reference: 'nameCh'
            }, {
                fieldLabel: '表名称',
                name:'nameEn',
                reference: 'nameEn'

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
            }]
        }]

    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '表英文名',
        flex: 1,
        dataIndex: 'nameEn'
    }, {
        text: '表中文名',
        flex: 1,
        dataIndex: 'nameCh'
    }, {
        text: '表描述',
        flex: 2,
        dataIndex: 'description'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        defaults: {
            defaultType: 'button'
        },
        items: [
            {
                iconCls: 'x-fa fa-eye',
                tooltip: '详情',
                handler: 'onDetail'

            }
        ],
        cls: 'content-column',
        width: 50,
        align: 'center',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
