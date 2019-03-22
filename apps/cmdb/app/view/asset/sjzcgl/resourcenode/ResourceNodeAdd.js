Ext.define('Cmdb.view.asset.sjzcgl.resourcenode.ResourceNodeAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcenode-add',


    controller: 'resourcenode-show',
    width: 600,
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        margin: 10,
        anchor: '100%'
    },
    viewModel: true,
    config: {
        entityId: null
    },
    items: [{
        margin: '5 10 10 10',
        items: [{
            fieldLabel: '名称',
            flex: 1,
            name: 'title',
            bind: '{title}'
        }]
    }, {
        margin: '0 10 10 10',
        items: [{
            fieldLabel: 'IP地址',
            flex: 1,
            name: 'ip',
            margin: '0 5 0 0',
            bind: '{ip}'
        }, {
            fieldLabel: '标示名',
            flex: 1,
            name: 'name',
            bind: '{name}'

        }]
    }, {
        margin: '0 10 10 10',
        items: [{
            fieldLabel: '开放端口',
            flex: 1,
            name: 'duankou',
            reference: 'dk',
            margin: '0 5 0 0'
        }, {
            xtype: 'combo',
            store: {
                data: [{
                    name: 'Arbitrary',
                    value: 'Arbitrary'
                }, {
                    name: 'HTTP',
                    value: 'HTTP'
                }, {
                    name: 'HTTPS',
                    value: 'HTTPS'
                }, {
                    name: 'FTP',
                    value: 'FTP'
                }, {
                    name: 'SSH',
                    value: 'SSH'
                }, {
                    name: 'DataBase',
                    value: 'DataBase'
                }, {
                    name: 'HDFS',
                    value: 'HDFS'
                }]
            },
            displayField: 'name',
            valueField: 'value',
            queryMode: 'local',
            fieldLabel: '协议',
            flex: 1,
            name: 'xieyi',
            reference: 'xy'
        }]
    }, {
        margin: '0 10 10 10',
        items: [{
            fieldLabel: '本地',
            name: 'local',
            flex: 1,
            xtype: 'radiogroup',
            items: [
                {boxLabel: '是', inputValue: 'true', checked: true},
                {boxLabel: '否', inputValue: 'false'}
            ],
            reference: 'local'
        }]
    }, {
        margin: '0 10 10 10',
        xtype: 'textarea',
        fieldLabel: '备注',
        name: 'memo',
        bind: '{memo}',
        flex: 2
    }],
    tbar: [{
        text: '保存',
        ui: 'default',
        iconCls: 'x-fa fa-save',
        handler: 'onSaveAdd'
    }, {
        text: '取消',
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancelAdd'
    }],
    listeners: {
        render: function () {
            var me = this;
            setTimeout(function () {
                var data = me.viewModel.data,
                    dk = data.ports,
                    local = data.local;
                if (dk != null) {
                    me.lookup('dk').setValue(Object.keys(dk));
                    me.lookup('xy').setValue(Object.values(dk));
                    if (local == true) {
                        me.lookup('local').items.items[0].setValue(true);
                    } else {
                        me.lookup('local').items.items[1].setValue(true);
                    }
                }
            }, 200);
        }
    }
});