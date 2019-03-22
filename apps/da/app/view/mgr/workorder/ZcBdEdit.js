Ext.define('DA.view.mgr.workorder.ZcBdEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'zcbd-edit',


requires:['DA.view.mgr.workorder.ZcBdEditModel'],
    tbar: [{
        text: '新增',
        handler: 'onZcBdEditAdd'
    }, '-', {
        text: '保存',
        handler: 'onZcBdEditSure'
    }, {
        text: '取消',
        handler: 'onZcBdEditCancel'
    }],
    layout: 'column',
    scrollable: true,
    height: 450,
    defaults: {
        margin: '10 10 10 10',
        bodyStyle: {
            'background': 'transparent',
        },
    },
    bodyStyle: {
        'background': '#fff',
        'background-image': 'linear-gradient(#F5F5F5 1px, transparent 0), linear-gradient(90deg, #F5F5F5 1px, transparent 0)',
        'background-size': '25px 25px'
    },
    items: [],
    listeners: {
        render: 'onZcBdEditRender'
    }
});
