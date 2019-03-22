Ext.define('DA.view.entry.itest.ITest', {
    extend: 'Ext.grid.Panel',
    xtype: 'itest',

    requires: [
        'Ext.form.field.Display',
        'DA.view.entry.itest.ITestModel',
        'DA.view.entry.itest.requestParams',
        'DA.view.entry.itest.selectServices',
        'DA.view.entry.itest.iTestController'
    ],
    emptyText: "暂无数据",
    viewConfig: {
        deferEmptyText: false

    },
    controller: 'itest',
    store: {},
    viewModel: {
        type: 'itest'
    },
    tbar: {
        xtype: 'container',
        border: false,
        items: [{
            xtype: 'toolbar',
            items: [{
                ui: 'default',
                xtype: 'button',
                text: '选择',
                handler: 'onSelect'
            }]

        }, {
            xtype: 'toolbar',
            items: [{
                fieldLabel: '接口标题:',
                xtype: 'textfield',
                flex: 1,
                bind: '{serviceTitle}',
                readOnly: true,
                emptyText: '接口标题'
            }, {
                xtype: 'button',
                ui: 'default',
                text: ' 查询',
                handler: 'onSearch'
            }]
        }, {
            xtype: 'toolbar',
            items: [{
                fieldLabel: '接口Url:',
                xtype: 'textfield',
                flex: 1,
                readOnly: true,
                emptyText: '接口Url',
                bind: '{serviceUrl}',
                renderer: function () {
                    return location.href.split('/')[2]
                }
            }]

        }]
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    },


});
