Ext.define('DA.view.mgr.resourcenode.ResourceNodeShow', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcenode-show',


    requires:[
        'DA.view.mgr.resourcenode.ResourceNodeShowController'
    ],
    controller: 'resourcenode-show',
    viewModel: true,
    config: {
        entityId: null
    },
    layout: 'column',
    defaults: {
        columnWidth: 0.5,
        xtype: 'displayfield',
        margin: 5,
    },
    items: [{
        fieldLabel: '名称',
        columnWidth: 1,
        bind: '{title}',
        text: 'title'
    }, {
        fieldLabel: 'IP地址',
        name: 'ip',
        bind: '{ip}'
    }, {
        fieldLabel: '开放端口',
        name: 'ports',
        bind: '{ports}',
        renderer: function (data) {
            return data ? Object.keys(data) : data;

        }
    }, {
        fieldLabel: '标示名',
        name: 'name',
        bind: '{name}'
    }, {
        fieldLabel: '本地',
        bind: '{local}',
        name: 'local',
        renderer: function (value) {
            var data = value ? '是' : '否';
            return data
        }
    }, {
        fieldLabel: '备注',
        columnWidth: 1,
        text: 'memo',
        bind: '{memo}',
    }]
});
