Ext.define('AP.view.services.ServicesOperateChoose', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-choose',

    requires: [
        'AP.view.services.ServicesOperateChooseController',
        'AP.view.services.ServicesOperateChooseModel',
        'AP.model.Service'
    ],
    tbar: [{
        ui: 'default',
        text: '确定',
        handler: 'onSure'
    }, '->', {

        xtype: 'textfield',
        fieldLabel: '标题',
        labelWidth: 30,
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
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
    }],
    controller: 'services-choose',
    selType: 'checkboxmodel',
    scrollable: true,
    viewModel: {
        type: 'services-choose'
    },
    bind: {
        store: '{list}'
    },

    columns: [{
        text: '服务名称',
        dataIndex: 'title',
        flex: 2
    }, {
        text: '节点名称',
        dataIndex: 'node',
        flex: 1,
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});