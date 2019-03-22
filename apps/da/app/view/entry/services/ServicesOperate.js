Ext.define('DA.view.entry.services.ServicesOperate', {
    extend: 'Ext.panel.Panel',
    xtype: 'services-operate',


    requires: [
        'DA.model.Services',
        'DA.view.entry.services.ServicesOperateChooseModel',
        'DA.view.entry.services.ServicesOperateChoose',
        'DA.view.entry.services.ServicesOperateGrid',
        'DA.view.entry.services.ServicesOperateSelect',
        'DA.view.entry.services.ServicesView',
        'DA.view.entry.services.ServicesOperateController',
        'DA.view.entry.service.ServicesAddDataset',
    ],

    controller: 'services-operate',
    layout: 'column',
    margin: '20 0',
    defaults: {
        border: true,
        columnWidth: 1

    },
    viewModel: true,
    items: [{
        xtype: 'fieldset',
        title: '数据集',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-check',
            tooltip: '选择数据集',
            width: 40,
            handler: 'chooseEntry'
        }, {
            xtype: 'container',
            layout: 'column',
            defaults: {
                xtype: 'displayfield',
                columnWidth: 0.5
            },
            items: [{
                fieldLabel: '显示名',
                name: 'title',
                reference: 'show_title',
                bind: '{show_title}'
            }, {
                fieldLabel: '名称',
                name: 'entityKey',
                bind: '{show_entityKey}'
            }, {
                fieldLabel: '数据库',
                name: 'sql',
                bind: '{show_sql}'
            }, {
                fieldLabel: '数据表',
                name: 'sqltable',
                bind: '{show_sqltable}'
            }]

        }]
    }, {
        //TODO:@chenw 服务对应输入输出
        xtype: 'panel',
        layout: 'card',
        reference: 'seractive',
        border: false,
        items: [{
                items: [{
                    //输入
                    xtype: 'fieldset',
                    title: '查询_输入参数',
                    items: [{
                        height: 300,
                        xtype: 'services-select'
                    }]
                }, {
                    //输出
                    xtype: 'fieldset',
                    title: '查询_输出参数',
                    items: [{
                        height: 400,
                        xtype: 'services-grid'
                    }]
                }]
            }, {
                items: [{
                    //输入
                    xtype: 'fieldset',
                    title: '校核_输入参数',
                    items: [{
                        height: 300,
                        xtype: 'services-select'
                    }]
                }, {
                    //输出
                    xtype: 'fieldset',
                    title: '校核_输出参数',
                    items: [{
                        height: 400,
                        xtype: 'services-grid'
                    }]
                }]
            }, {
                items: [{
                    //输入
                    xtype: 'fieldset',
                    title: '更新_输入参数',
                    items: [{
                        height: 300,
                        xtype: 'services-select'
                    }]
                }, {
                    //输出
                    xtype: 'fieldset',
                    title: '更新_输出参数',
                    items: [{
                        height: 400,
                        xtype: 'services-grid'
                    }]
                }]
            }, {
                items: [{
                    //输入
                    xtype: 'fieldset',
                    title: '附件查看_输入参数',
                    items: [{
                        height: 300,
                        xtype: 'services-select'
                    }]
                }, {
                    //输出
                    xtype: 'fieldset',
                    title: '附件查看_输出参数',
                    items: [{
                        height: 400,
                        xtype: 'services-grid'
                    }]
                }]
            }]
    }],
    listeners: {
        render: 'onOperateRender'
    }
});
