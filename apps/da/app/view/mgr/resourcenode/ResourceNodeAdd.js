Ext.define('DA.view.mgr.resourcenode.ResourceNodeAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'resourcenode-add',

    controller: 'resourcenode-show',
    layout: 'column',
    defaults: {
        xtype: 'textfield',
        margin: 5,
        columnWidth: 0.5,
    },
    viewModel: true,
    config: {
        entityId: null
    },
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
    items: [{
        fieldLabel: '名称',
        columnWidth: 1,
        reference: 'inputTitle',
        name: 'title',
        bind: '{title}'
    }, {
        fieldLabel: 'IP地址',
        name: 'ip',
        bind: '{ip}',
        reference: 'ipAddress'
    }, {
        fieldLabel: '标识名',
        name: 'name',
        bind: '{name}',
        listeners: {
            focus: 'onFocus'
        }

    }, {
        fieldLabel: '开放端口',
        name: 'duankou',
        bind: '{duankou}',
        // }, {
        //     xtype: 'combo',
        //     store: {
        //         data: [{
        //             name: 'Arbitrary',
        //             value: 'Arbitrary'
        //         }, {
        //             name: 'HTTP',
        //             value: 'HTTP'
        //         }, {
        //             name: 'HTTPS',
        //             value: 'HTTPS'
        //         }, {
        //             name: 'FTP',
        //             value: 'FTP'
        //         }, {
        //             name: 'SSH',
        //             value: 'SSH'
        //         }, {
        //             name: 'DataBase',
        //             value: 'DataBase'
        //         }, {
        //             name: 'HDFS',
        //             value: 'HDFS'
        //         }]
        //     },
        //     displayField: 'name',
        //     valueField: 'value',
        //     fieldLabel: '协议',
        //     name: 'xieyi',
        //     bind: '{xieyi}'
    }, {
        fieldLabel: '本地',
        name: 'local',
        xtype: 'radiogroup',
        items: [
            {boxLabel: '是', inputValue: 'true'},
            {boxLabel: '否', inputValue: 'false', checked: true}
        ],
        reference: 'local',
        bind: '{local}',
        listeners: {
            change: 'radioChange'
        }
    }, {
        xtype: 'textarea',
        fieldLabel: '备注',
        columnWidth: 1,
        name: 'memo',
        bind: '{memo}',
    }]
});
