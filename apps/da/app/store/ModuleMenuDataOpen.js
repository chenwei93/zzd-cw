Ext.define('DA.store.ModuleMenuDataOpen', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-dataopen',
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
            text: '数据资源共享管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '共享数据资源目录上架',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }, {
                text: '共享数据资源目录查询',
                iconCls: 'x-fa  fa-list',
                viewType: 'entry-search',
                leaf: true
            }, {
                text: '共享数据资源目录申请管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                leaf: true
            }]
        }, {

            text: '数据资源开放管理',
            iconCls: 'x-fa  fa-list',
            children: [{
                text: '数据资源开放目录管理',
                iconCls: 'x-fa  fa-list',
                children: [{
                    text: '数据资源开放目录上架',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'zygl',
                    leaf: true
                }, {
                    text: '数据资源开放目录下架',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'zygl',
                    leaf: true
                }, {
                    text: '数据资源开放目录查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'zygl',
                    leaf: true
                }]
            }, {
                text: '开放数据资源脱敏管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '开放数据资源脱敏规则管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'tmgl',
                    leaf: true
                }, {
                    text: '开放数据资源脱敏任务管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '开放数据资源风控管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '开放数据资源风控规则管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: 'fkgl',
                    leaf: true
                }, {
                    text: '开放数据资源风控任务管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '开放数据资源风控监察管理',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }, {
                text: '开放数据资源管理',
                iconCls: 'x-fa  fa-list',
                viewType: '',
                children: [{
                    text: '开放数据资源采集',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '开放数据资源上架',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '开放数据资源下架',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }, {
                    text: '开放数据资源查询',
                    iconCls: 'x-fa  fa-list',
                    viewType: '',
                    leaf: true
                }]
            }]


        }, {
            text: '开放资源申请管理',
            iconCls: 'x-fa  fa-list',
            viewType: '',
            leaf: true
        }]

    }
});
