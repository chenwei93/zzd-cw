Ext.define('DA.view.gzt.zhgzt.ZhgztE', {
    extend: 'Ext.panel.Panel',
    xtype: 'zhgzt-e',


    requires: [
        'DA.view.gzt.zhgzt.Dbgrid',
        'DA.view.gzt.zhgzt.Contacts',
        'DA.view.gzt.zhgzt.Zcjs',
        'DA.view.gzt.zhgzt.Tzgrid',

        'DA.view.gzt.zhgzt.ZhgztController',
        'DA.view.gzt.zhgzt.ZhgztModel'
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
            src: 'resources/calendar/basic.html',
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
            text: '服务申请',
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-skyatlas',
            text: '资产分析'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-slideshare',
            text: '服务开发'
        }]
    }]
});
