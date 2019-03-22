Ext.define('DG.view.roleconf.CustomizeRoles', {
    extend: 'Ext.form.Panel',
    xtype: 'customize-roles',

    defaults: {
        xtype: 'fieldset',
        collapsible: true,
    },

    items: [{
        title: '数据规则',
        layout: 'column',
        items: [{
            xtype: 'textfield',
            fieldLabel: '信息资源名',
            bind: '{tableName}',
            name: 'tableName',
            readOnly: true,
            columnWidth: 0.5
        }, {
            xtype: 'displayfield',
            columnWidth: 0.4,
        }, {
            xtype: 'button',
            text: '新增',
            columnWidth: 0.1,
            handler: 'onNew',
            iconCls: 'x-fa fa-plus'
        }]


    }]
});
