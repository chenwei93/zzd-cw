Ext.define('Cmdb.view.asset.sjzcgl.resourcenode.ResourceNodeShow', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcenode-show',


    requires: ['Cmdb.view.asset.sjzcgl.resourcenode.ResourceNodeShowController'],
    width: 600,
    controller: 'resourcenode-show',
    margin: 20,
    viewModel: true,
    config: {
        entityId: null
    },
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%'
    },
    items: [{
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '名称',
            flex: 1,
            bind: '{title}',
            text: 'title'
        }]
    }, {
        padding: '0 10 10 0',
        items: [{
            fieldLabel: 'IP地址',
            flex: 1,
            name: 'ip',
            bind: '{ip}'
        }, {
            fieldLabel: '开放端口',
            flex: 1,
            name: 'ports',
            bind: '{ports}',
            renderer: function (data) {
                if (data != null) {
                    return Object.keys(data);
                } else {
                    return data
                }

            }
        }]
    }, {
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '标示名',
            flex: 1,
            text: 'name',
            bind: '{name}'
        }, {
            fieldLabel: '本地',
            flex: 1,
            bind: '{local}',
            text: 'local',
            renderer: function (value) {
                if (value == 'true') {
                    return '是'
                } else {
                    return '否'
                }
            }

        }]
    }, {
        padding: '0 10 10 0',
        xtype: 'displayfield',
        fieldLabel: '备注',
        text: 'memo',
        bind: '{memo}',
        flex: 2
    }]
});
