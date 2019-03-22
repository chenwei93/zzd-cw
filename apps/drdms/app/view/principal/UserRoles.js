Ext.define('DRDMS.principal.UserRoles', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-roles',

    requires: [
        'DRDMS.view.principal.UserRolesController',
        'DRDMS.view.principal.UserRolesModel',
        'DRDMS.model.UserRoles'
    ],
    controller: 'user-roles',
    selType: 'checkboxmodel',
    viewModel: {
        type: 'user-roles'
    },
    bind: {
        store: '{list}'
    },
    listeners: {
        render: function () {
            var me = this;
            setTimeout(function () {
                var store = me.getStore().data.items,
                    code = me.up('window').needRecord.data.code;
                var selectArr = [];
                for (var i = 0; i < store.length; i++) {
                    if (store[i].data.name == code) {
                        selectArr.push(store[i])
                    }
                }
                me.getSelectionModel().select(selectArr);
            }, 100);
        }
    },
    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '确定',
        handler: 'onSure'
    }, {
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        text: '取消',
        handler: 'onCancel'
    }],
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