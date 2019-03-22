Ext.define('DA.store.ModuleMenuDa', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-da',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        expanded: true,
        children: [{
            text: '综合工作台',
            iconCls: 'x-fa  fa-list',
            viewType: 'zhgzt',
            leaf: true
        }, {
            text: '工作任务管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '工作任务管理',
                iconCls: 'x-fa  fa-list',
                viewType: 'worktask',
                leaf: true
            }, {
                text: '工作任务类型管理',
                iconCls: 'x-fa  fa-list',
                viewType: 'worktask-type',
                leaf: true
            }, {
                text: '工作任务监督',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '工作任务信息统计',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '工作任务编号规范',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]

        }, {
            text: '工单管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '新建模版',
                iconCls: 'x-fa  fa-list',
                viewType: 'zc-bd',
                leaf: true
            }, {
                text: '模版维护',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '模版上架',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '模版下架',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '模版查询',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true

            }]
        }, {
            text: '工作流管理',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            children: [{
                text: '工作流设计',
                iconCls: 'x-fa  fa-list',
                viewType: 'gzlsj',
                leaf: true
            }, {
                text: '流程驱动引擎',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '流程驱动监控',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '流程管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]
        }, {

            text: '考核管理',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            children: [{
                text: '考核指标体系管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '新增指标',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '更新指标',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '指标查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '指标废止',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '指标启用',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '版本管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '考核模型管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '新增模型',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '更新模型',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '模型测试',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '模型启用',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '模型停用',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '模型查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '模型版本',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '考核样本数据管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '样本数据配置',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '完整性检查',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '时效性检查',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '考核任务管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '新建任务',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '任务池',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '考核分析报告',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]

        }, {
            text: '事件管理',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            children: [{
                text: '事件生成',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '事件处理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '事件反馈',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]


        }]

    }
});
