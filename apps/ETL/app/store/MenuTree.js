Ext.define('ETL.store.MenuTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menuTreeStore',
    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: '任务管理',
            iconCls: 'x-fa fa-th-list',
            viewType: 'task',
            leaf: true
        }, {
            text: '任务配置',
            iconCls: 'x-fa fa-pencil',
            viewType: 'taskcon',
            leaf: true
        }, {
            text: '运行日志',
            iconCls: 'x-fa fa-file-text-o',
            viewType: 'logs',
            leaf: true
        }, {
            text: '主机维护',
            iconCls: 'x-fa fa-cog',
            viewType: 'rnode',
            leaf: true
        }]
    }
});
