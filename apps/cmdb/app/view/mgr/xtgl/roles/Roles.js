Ext.define('Cmdb.view.mgr.xtgl.roles.Roles', {
    extend: 'Ext.grid.Panel',
    xtype: 'roles',

    requires: [
        'Cmdb.view.mgr.xtgl.roles.RolesController',
        'Cmdb.view.mgr.xtgl.roles.RolesModel',
        'Cmdb.model.UserRoles'
    ],
    controller: 'roles',
    viewModel: {
        type: 'roles'
    },
    bind: {
        store: '{list}'
    },
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '标识',
        flex: 1,
        dataIndex: 'name'
    }, {
        xtype: 'booleancolumn',
        trueText: '是',
        falseText: '否',
        text: '管理员',
        flex: 1,
        dataIndex: 'admin'
    }, {
        text: '说明',
        flex: 1,
        dataIndex: 'des'
    }]
});