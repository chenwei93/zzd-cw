Ext.define('DA.view.entry.services.createJK', {
    extend: 'Ext.form.Panel',
    xtype: 'createjk',

    controller: 'choose-createjk',
    viewModel: true,
    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '确定',
        handler: 'onCreateJkYes'
    }, {
        text: '取消',
        iconCls: 'x-fa fa-refresh',
        handler: 'onCreateJkNo'
    }],
    layout: 'column',
    defaults: {
        columnWidth: 1,
        margin: 10,
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: '接口名称',
        reference: 'jkname',
        name: 'jkname',
        bind: '{jkname}'
    }, {
        xtype: 'checkboxgroup',
        fieldLabel: '接口类型',
        reference: 'jktype',
        layout: 'column',
        defaults: {
            columnWidth: 0.5
        },
        items: [
            {
                boxLabel: '查询服务',
                name: 'ENTITY',
                inputValue: 'ENTITY',
            }, {
                boxLabel: '校核服务',
                name: 'ENTITY!',
                inputValue: 'ENTITY!',
            }, {
                boxLabel: '更新服务',
                name: 'EXT_UPDATE',
                inputValue: 'EXT_UPDATE',
            }, {
                boxLabel: '附件查看服务',
                name: 'EXT_ATTACHMENT',
                inputValue: 'EXT_ATTACHMENT',
            }
        ]
    }],
    listeners: {
        render: 'onCreateJKRender'
    }
});
