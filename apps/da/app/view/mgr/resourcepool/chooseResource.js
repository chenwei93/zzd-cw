Ext.define('DA.view.mgr.resourcepool.chooseResource', {
    extend: 'Ext.grid.Panel',
    xtype: 'choose-resource',


    tbar: [{
        ui: 'default',
        text: '确定',
        iconCls: 'x-fa fa-save',
        handler: 'onCreateJK'
    }],
    selType: 'checkboxmodel',
    columns: [{
        dataIndex: 'title',
        text: '资源名称',
        flex: 2,
    }, {
        dataIndex: 'name',
        text: '资源编码',
        flex: 1,
    }, {
        dataIndex: 'size',
        text: '资源占用',
        flex: 1,
    }, {
        dataIndex: 'total',
        text: '资源条数',
        flex: 1,
    }, {
        dataIndex: 'path',
        text: '资源路径／库名',
        flex: 1,

    }],
    listeners: {
        render: 'onChooseResourceRender'
    }
});
