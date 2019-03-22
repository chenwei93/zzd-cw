Ext.define('Starter.view.unitprofile.UnitProfile', {
    extend: 'Ext.grid.Panel',
    xtype: 'unitprofile',


    requires: [
        'Starter.model.UnitProfiles',
        'Starter.view.unitprofile.UnitProfileController',
        'Starter.view.unitprofile.UnitProfileModel',
        'Starter.view.unitprofile.UnitProfileFile',
        'Starter.view.unitprofile.UnitProfileSql'
    ],

    controller: 'unitprofile',
    viewModel: {
        type: 'unitprofile'
    },
    bind: {
        store: '{list}'
    },
    tbar:[{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    }],
    columns: [{
        xtype: 'rownumberer'
    },{
        text: '部门',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: '是否自动导出',
        flex: 1,
        dataIndex: 'autoExport',
        renderer: function (value) {
            if (value == false) {
                value = '否'
            } else {
                value = '是'
            }
            return value;
        }
    }, {
        text: '数据库默认值',
        flex: 1,
        renderer: function () {
            return "<INPUT type='button' value='详细'>";
        },
        listeners: {
            click: 'onSql'
        }
    }, {
        text: '文件默认值',
        flex: 1,
        renderer: function () {
            return "<INPUT type='button' value='详细'>";
        },
        listeners: {
            click: 'onFile'
        }
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }

});