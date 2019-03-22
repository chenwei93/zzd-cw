Ext.define('DA.store.ModuleMenuPortal', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-portal',
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
            text: '数据资源元数据采集',
            iconCls: 'x-fa  fa-list',
            children: [
                {
                    text: '元数据信息手工填报',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'portalhome',
                    leaf: true

                }, {
                    text: '元数据信息文件导入',
                    expanded: false,
                    iconCls: 'x-fa  fa-list',
                    children: [
                        {
                            text: '导入模版管理',
                            expanded: true,
                            iconCls: 'x-fa  fa-list',
                            viewType: '',
                            leaf: true
                        }, {
                            text: '元数据信息导入',
                            expanded: true,
                            iconCls: 'x-fa  fa-list',
                            viewType: '',
                            leaf: true
                        }]
                }, {
                    text: '元数据信息自动采集',
                    iconCls: 'x-fa  fa-list',
                    children: [
                        {
                            text: '采集规则配置',
                            iconCls: 'x-fa  fa-list',
                            viewType: 'portalhome',
                            leaf: true
                        }, {
                            text: '采集任务配置',
                            iconCls: 'x-fa  fa-list',
                            viewType: '',
                            leaf: true
                        }]
                }, {

                    //     text: '元数据对比规则管理',
                    //     expanded: false,
                    //     iconCls: 'x-fa  fa-list',
                    //     viewType: '',
                    //     leaf: true
                    // }, {
                    text: '数据库设计模型导入',
                    expanded: false,
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                    // }, {
                    //     text: '元数据查询',
                    //     expanded: false,
                    //     iconCls: 'x-fa  fa-list',
                    //     viewType: '',
                    //     leaf: true
                }]
        }, {
            text: '全量元数据分析管理',
            iconCls: 'x-fa  fa-list',
            children: [
                {
                    text: '元数据自动分析模型管理',
                    iconCls: 'x-fa  fa-list',
                    children: [{
                        text: '分析模型配置',
                        iconCls: 'x-fa  fa-list',
                        viewType: 'analyze-model',
                        leaf: true

                    }, {
                        text: '分析模型测试',
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                    }, {
                        text: '分析模型启用停止',
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                    }, {
                        text: '分析模型版本管理',
                        iconCls: 'x-fa  fa-list',
                        viewType: '',
                        leaf: true
                    }]
                }, {
                    text: '元数据自动分析任务管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                    // }, {
                    //     text: '与省级下发数据资源目录核对',
                    //     iconCls: 'x-fa  fa-list',
                    //     viewType: '',
                    //     leaf: true
                    // }, {
                    //     text: '人工校核',
                    //     iconCls: 'x-fa  fa-list',
                    //     viewType: '',
                    //     leaf: true
                }]

        }, {
            text: '元数据维护',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            children: [{
                text: '元数据项修订',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '回收元数据查询',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '回收元数据复原',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]
        }, {
            text: '元数据报送',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }, {
            text: '元数据清单查询',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }, {
            text: '元数据校验规则',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }, {
            text: '资产关联管理',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }, {
            text: '信息资产类型管理',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }, {
            text: '信息资产普查模版管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '结构化数据资源普查模版',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]
        }, {
            text: '元数据会审',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            children: [
                {

                    text: '元数据审核',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '元数据审核报告',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '元数据审核规则管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '元数据清单查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }
            ]
        }]


    }
});
