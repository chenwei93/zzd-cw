Ext.define('DA.view.da.worktask.OrderTemple', {
    extend: 'Ext.form.Panel',
    xtype: 'ordertemple',

    layout: 'column',
    defaults: {
        xtype: 'textfield',
        margin: 5,
        columnWidth: 0.5
    },
    items: [{
        fieldLabel: '工单名称',
        name: 'orderName'
    }, {
        fieldLabel: '工单类型',
        name: 'orderType'
    }]
});
