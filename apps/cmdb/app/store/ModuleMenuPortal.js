Ext.define('Cmdb.store.ModuleMenuPortal', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-portal',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '大数据监控和服务门户',
        expanded: true,
        children: [{
            text: '综合工作台',
            iconCls: 'x-fa fa-desktop',
            viewType: 'zhgzt',
            leaf: true
        }, {
            text: '我的工作',
            iconCls: 'x-fa  fa-list',
            viewType: 'wddb',
            leaf: true
        }, {
            text: '日志管理',
            iconCls: 'x-fa fa-archive',
            viewType: 'rzgl',
            leaf: true
        }, {
            text: '目录总览',
            iconCls: 'x-fa fa-sitemap',
            viewType: 'mlzl-list',
            leaf: true
        }, {
            text: '资产清单',
            iconCls: 'x-fa fa-rss-square',
            viewType: 'allzcml',
            leaf: true
        }, {
            iconCls: 'x-fa fa-cogs',
            text: '系统配置维护',
            expanded: false,
            children: [
                {

                    //     text: '基本信息管理',
                    //     iconCls: 'x-fa fa-male',
                    //     viewType: 'jbxxgl',
                    //     leaf: true
                    // }, {
                    //     text: '考勤管理',
                    //     iconCls: 'x-fa fa-calendar-check-o',
                    //     viewType: 'kqgl',
                    //     leaf: true
                    // }, {
                    //     text: '入职/离职管理',
                    //     iconCls: 'x-fa fa-paperclip',
                    //     viewType: 'rlzgl',
                    //     leaf: true
                    // }, {
                    //     text: '人员调动管理',
                    //     iconCls: 'x-fa fa-refresh',
                    //     viewType: 'ryddgl',
                    //     leaf: true
                    // }, {
                    //     text: '团队入驻管理',
                    //     iconCls: 'x-fa fa-user-plus',
                    //     viewType: 'tdrzgl',
                    //     leaf: true


                    text: '工单配置',
                    iconCls: 'x-fa fa-list-ul',
                    viewType: 'zc-bd',
                    leaf: true
                }, {
                    text: '工单分类',
                    iconCls: 'x-fa fa-th-large',
                    viewType: 'gdfl',
                    leaf: true

                }, {

                    text: '流程配置',
                    iconCls: 'x-fa fa-wrench',
                    viewType: 'lcpz',
                    leaf: true
                }, {
                    text: '工作流设计',
                    iconCls: 'x-fa fa-exchange',
                    viewType: 'gzlsj',
                    leaf: true

                }, {

                    text: '人员管理',
                    iconCls: 'x-fa fa-users',
                    viewType: 'user',
                    leaf: true
                }, {
                    text: '部门管理',
                    iconCls: 'x-fa fa-sitemap',
                    viewType: 'principal',
                    leaf: true
                }, {
                    text: '角色管理',
                    iconCls: 'x-fa fa-user',
                    viewType: 'roles',
                    leaf: true
                }]
            //     text: '消息中心',
            //     iconCls: 'x-fa fa-commenting-o',
            //     viewType: 'xxzx',
            //     leaf: true
            // }, {
            //     text: '个人信息',
            //     iconCls: 'x-fa fa-user',
            //     viewType: 'grxx',
            //     leaf: true
            // }, {
            //     text: '文档管理',
            //     iconCls: 'x-fa fa-file',
            //     viewType: 'wdgl',
            //     leaf: true
            // }, {
            //     text: '应用中心',
            //     iconCls: 'x-fa fa-th-large',
            //     viewType: 'yyzx',
            //     leaf: true
            // }, {
            //     text: '人员信息管理',
            //     iconCls: 'x-fa fa-users',
            //     viewType: 'pageblank',
            //     expanded: false,
            //     selectable: false,
            //     children: [
            //         {
            //         text: '基本信息管理',
            //         iconCls: 'x-fa fa-male',
            //         viewType: 'jbxxgl',
            //         leaf: true
            //     }, {
            //         text: '考勤管理',
            //         iconCls: 'x-fa fa-calendar-check-o',
            //         viewType: 'kqgl',
            //         leaf: true
            //     }, {
            //         text: '入职/离职管理',
            //         iconCls: 'x-fa fa-paperclip',
            //         viewType: 'rlzgl',
            //         leaf: true
            //     }, {
            //         text: '人员调动管理',
            //         iconCls: 'x-fa fa-refresh',
            //         viewType: 'ryddgl',
            //         leaf: true
            //     }, {
            //         text: '团队入驻管理',
            //         iconCls: 'x-fa fa-user-plus',
            //         viewType: 'tdrzgl',
            //         leaf: true
            //     }]


            // },{
            //     text: '任务管理',
            //     iconCls: 'x-fa  fa-list',
            //     viewType: 'rwgl_m',
            //     leaf: true
        }]

    }
});
