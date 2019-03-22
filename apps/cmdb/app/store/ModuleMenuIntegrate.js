Ext.define('Cmdb.store.ModuleMenuIntegrate', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-integrate',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '综合管理中心',
        expanded: true,
        children: [{

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

            text: '文件出入管理',
            iconCls: 'x-fa fa-male',
            viewType: 'jbxxgl',
            leaf: true
        }, {
            text: '机房出入管理',
            iconCls: 'x-fa fa-calendar-check-o',
            viewType: 'kqgl',
            leaf: true
        }, {
            text: '文档管理',
            iconCls: 'x-fa fa-paperclip',
            viewType: 'rlzgl',
            leaf: true
        }, {
            text: '人员管理',
            iconCls: 'x-fa fa-user-plus',
            viewType: 'ryddgl',
            leaf: true
        }, {
            text: '来访管理',
            iconCls: 'x-fa fa-pencil',
            viewType: 'tdrzgl',
            leaf: true
        }, {
            text: '培训管理',
            iconCls: 'x-fa fa-list',
            viewType: 'tdrzgl',
            leaf: true
        }, {
            text: '值班管理',
            iconCls: 'x-fa fa-refresh',
            viewType: 'tdrzgl',
            leaf: true
        }, {
            text: '项目管理',
            iconCls: 'x-fa fa-bookmark',
            viewType: 'tdrzgl',
            leaf: true
        }, {
            text: '方案论证',
            iconCls: 'x-fa fa-cogs',
            viewType: 'tdrzgl',
            leaf: true
        }]
    }
});
