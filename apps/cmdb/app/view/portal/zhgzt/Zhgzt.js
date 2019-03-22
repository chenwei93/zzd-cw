Ext.define('Cmdb.view.portal.zhgzt.Zhgzt', {
    extend: 'Ext.panel.Panel',
    xtype: 'zhgzt',


    requires: [
        'Cmdb.view.portal.zhgzt.Dbgrid',
        'Cmdb.view.portal.zhgzt.Contacts',
        'Cmdb.view.portal.zhgzt.Zcjs',
        'Cmdb.view.portal.zhgzt.Tzgrid',

        'Cmdb.view.portal.zhgzt.ZhgztController',
        'Cmdb.view.portal.zhgzt.ZhgztModel'
    ],
    viewModel: {
        type: 'zhgzt'
    },
    controller: 'zhgzt',
    scrollable: true,
    bodyPadding: 10,
    defaults: {
        layout: 'hbox',
        margin: '10 0 0 0'
    },
    items: [{
        defaults: {
            height: 250,
            margin: '0 20 0 0',
            border: true
        },
        items: [{
            flex: 1,
            xtype: 'dbgrid',
        }, {
            flex: 1,
            xtype: 'tzgrid',

        }, {
            flex: 1,
            title: '工作日程',
            xtype: 'uxiframe',
            src: 'app/view/portal/zhgzt/calendar/basic.html',
        }, {
            flex: 0.5,
            xtype: 'contacts',
        }]

    }, {
        defaults: {
            height: 180,
            margin: '20 20 0 0',
            border: true
        },
        items: [{
            flex: 2,
            xtype: 'zcjs',
        }, {
            flex: 1.5,
            xtype: 'chartywblx'
        }]
    }, {
        defaults: {
            margin: '10 20 0 0',
            iconAlign: 'top',
            scale: 'large'
            // flex: 1
        },
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-database',
            text: '我的工作',
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-github',
            text: '消息中心',
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-safari',
            text: '个人信息',
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-vimeo',
            text: '文档管理',
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-skyatlas',
            text: '应用中心'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-slideshare',
            text: '人员信息管理'
        }]
    }]
});
