Ext.define('DG.view.roleconf.RoleConfForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'roleconf-form',


    requires: ['DG.view.roleconf.RoleConfFormController',
        'DG.view.roleconf.RoleConfFromModel',
        'DG.view.roleconf.ChangeRoles',
        'DG.view.roleconf.compareRoles',
        'DG.view.roleconf.CustomizeRoles',
        'DG.view.roleconf.CleanRoles',
        'DG.view.roleconf.ChooseEntry',
        'DG.view.roleconf.resultOutput',
        'DG.view.roleconf.entryGrid',
    ],
    layout: 'card',
    controller: 'roleconf-form',
    tbar: [{
        ui: 'default',
        text: '保存',
        handler: 'onRoleConfSave'
    }],
    viewModel: {
        type: 'roleconf-form'
    },
    bbar: ['->',
        {
            ui: 'default',
            reference: 'cardprev',
            text: '上一页',
            handler: 'showPrevious',
            disabled: true
        },
        {
            ui: 'default',
            reference: 'cardnext',
            text: '下一页',
            handler: 'showNext'
        }
    ],

    defaults: {
        border: false,
        scrollable: true,
    },

    items: [
        {
            reference: 'card-0',
            xtype: 'form',
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 5
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: '规则名称',
                    emptyText: '请输入规则名称',
                    name: 'ruleName',
                    bind: '{ruleName}'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '信息资源名称',
                    columnWidth: 0.9,
                    name: 'tableName',
                    readOnly: true,
                    bind: '{tableName}'
                }, {
                    xtype: 'button',
                    columnWidth: 0.1,
                    text: '选择',
                    handler: 'onChooseEntry'
                }, {
                    xtype: 'textarea',
                    fieldLabel: '规则描述',
                    name: 'ruleDescrption',
                    bind: '{ruleDescrption}'
                }]
        },
        {
            reference: 'card-1',
            xtype: 'form',
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 5
            },
            items: [{
                xtype: 'fieldset',
                title: '数据规则',
                items: [{
                    xtype: 'entry-grid',
                    reference: 'entryGrid1'
                }]
            }, {
                xtype: 'fieldset',
                title: '清洗规则',
                items: [{
                    xtype: 'clean-roles',
                    reference: 'cleanRoles'
                }]

            }]
        },
        {
            reference: 'card-2',
            xtype: 'form',
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 5
            },
            items: [{
                xtype: 'fieldset',
                title: '数据规则',
                items: [{
                    xtype: 'entry-grid',
                    reference: 'entryGrid2'
                }]
            }, {
                xtype: 'fieldset',
                title: '转换规则',
                items: [{
                    xtype: 'change-roles',
                    reference: 'changeRoles'
                }]
            }]
        },
        {
            reference: 'card-3',
            xtype: 'form',
            layout: 'column',
            defaults: {
                columnWidth: 1,
                margin: 5
            },
            items: [{
                xtype: 'fieldset',
                title: '数据规则',
                items: [{
                    xtype: 'entry-grid',
                    reference: 'entryGrid3'
                }]
            }, {
                xtype: 'fieldset',
                title: '比对规则',
                items: [{
                    xtype: 'compare-roles',
                    reference: 'compareRoles'
                }]

            }]
        },
        {
            reference: 'card-4',
            items: [{
                xtype: 'customize-roles',
                reference: 'customizeRoles'
            }]

        },
        {
            reference: 'card-5',
            items: [{
                xtype: 'result-output',
                reference: 'resultOutput'
            }]

        }
    ],
    listeners: {
        render: 'onRender'
    }
});
