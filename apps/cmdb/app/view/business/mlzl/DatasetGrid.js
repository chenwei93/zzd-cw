Ext.define('Cmdb.view.business.mlzl.DatasetGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'datasetgrid',

    tbar: [{
        text: '共享',
        handler: 'onSureGX'
    }, {
        text: '开放',
        handler: 'onSureKF'
    }, {
        text: '汇集',
        handler: 'onSureHJ'

    }],
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },
    store: {
        autoLoad: true,
        data: [{
            name: 'ID',
            code: 'id',
            length: '10'
        }, {
            name: '标题',
            code: 'title',
            length: '20'
        }, {
            name: '关键字',
            code: 'keyword',
            length: '5'
        }, {
            name: '分类',
            code: 'catalog',
            length: '5'
        }, {
            name: '更新周期',
            code: 'gxzq',
            length: '10'
        }, {
            name: '发布时间',
            code: 'updateTime',
            length: '20'
        }, {
            name: '消息主体',
            code: 'content',
            length: '200'

        }]
    },
    columns: [{
        dataIndex: 'name',
        text: '字段名',
        flex: 1
    }, {
        dataIndex: 'code',
        text: '字段标识',
        flex: 1
    }, {
        dataIndex: 'length',
        text: '字段长度',
        flex: 1
    }]
});