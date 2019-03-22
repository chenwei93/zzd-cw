Ext.define('DA.view.entry.bloodconf.ConfPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'confpanel',

    layout: 'column',
    margin: 5,
    defaults: {

        margin: 5
    },
    items: [
        {
            xtype: 'fieldset',
            title: '选择上级数据项',
            columnWidth: 0.3,
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 3
            },
            items: [{
                xtype: 'textfield',
                name: 'sTable',
                bind: '{sTable}',
                readOnly: true,
                columnWidth: 0.8
            }, {
                xtype: 'button',
                extra: 'shang',
                text: '选择',
                handler: 'onChooseEntry',
                columnWidth: 0.2,

            }, {
                xtype: 'grid',
                reference: 'shang',
                height: 400,
                columns: [{
                    text: '列',
                    flex: 1,
                    dataIndex: 'title'
                }]
            }]
        },
        {
            xtype: 'fieldset',
            title: '选择下级数据项',
            columnWidth: 0.3,
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 3
            },
            items: [{
                xtype: 'textfield',
                name: 'xTable',
                bind: '{xTable}',
                readOnly: true,
                columnWidth: 0.8
            }, {
                xtype: 'button',
                extra: 'xia',
                text: '选择',
                handler: 'onChooseEntry',
                columnWidth: 0.2,
            }, {
                xtype: 'grid',
                height: 400,
                reference: 'xia',
                columns: [{
                    text: '列',
                    flex: 1,
                    dataIndex: 'title'
                }]
            }]
        },
        {
            xtype: 'container',
            columnWidth: 0.1,
            margin: '200 10 0 20',
            items: [{
                xtype: 'button',
                margin: '0 0 15 0',
                text: '保存 >',
                handler: 'onSave'
            }, {
                xtype: 'button',
                text: '移除 <',
                handler: 'onRemove'
            }]

        },
        {
            xtype: 'grid',
            columnWidth: 0.3,
            reference: 'match',
            height: 500,
            border: true,
            header: false,
            columns: [{
                flex: 1,
                dataIndex: 'title'
            }]
        },
        {
            xtype: 'container',
            columnWidth: 1,
            layout: 'column',
            items: [{
                xtype: 'displayfield',
                columnWidth: 0.2,

            }, {
                columnWidth: 0.2,
                xtype: 'button',
                text: '自动匹配',
                handler: 'onAutoMatch'

            }, {
                xtype: 'displayfield',
                columnWidth: 0.5,

            }, {
                columnWidth: 0.1,
                xtype: 'button',
                text: '保存',
                handler: 'onSaveAll'
            }]
        }],
    listeners: {
        render: 'onConfPanelRender'
    }
});
