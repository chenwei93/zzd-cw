/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.main.MainHeader', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-header',

    requires: [
        'RBase.view.main.Main'
    ],


    shadow: true,
    shadowOffset: 5,
    bodyStyle: {
        "background-color": "#2C3844",
        "width": "100%",
        "height": "76px"
    },
    layout: 'column',
    items: [{
        margin: '10 5 20 20',
        xtype: 'image',
        height: 35,
        width: 35,
        alt: 'logo',
        src: 'resources/logo1.png'
    }, {
        xtype: 'tbtext',
        margin: '19 10 0 5',
        style: {
            "font-size": '22px',
            "font-weight": '450',
            "color": 'white'
        },
        width: 415,
        html: '杭州萧山智慧城市大数据服务平台-资源管理'
    }, {
        xtype: 'button',
        style: {
            "background-color": "rgba(255,255,255,0)"
        },
        border: false,
        margin: '12 0 20 0',
        width: 35,
        height: 35,
        arrowCls: null,
        iconCls: 'x-fa fa-chevron-circle-down',
        tooltip: '切换系统',
        menu: [{
            text: '杭州萧山智慧城市大数据服务平台-目录管理'
        }],
        listeners: {
            'click': 'onSelect'
        }
    }, {
        columnWidth: 0.9,
        margin: '100 0 0 0',
        height: 1
    }, {
        xtype: 'button',
        margin: '10 2 20 10',
        ui: 'header',
        style: {
            "color": "white",
            "font-size": "19px"
        },
        height: 35,
        width: 35,
        iconCls: 'x-fa fa-navicon',
        handler: 'onToggleNavigationSize'

    }, {
        xtype: 'textfield',
        hrefTarget: '_self',
        margin: '10 40 20 0',
        width: 300,
        lineHeight: 65,
        triggerCls: 'x-fa fa-search',
        emptyText: '关键字搜索'
    }, {
        xtype: 'tbtext',
        margin: '20 0 0 10',
        bind: {
            text: '{nick}'
        },
        style: {
            'font-family': '黑体'
        },
        cls: 'topoint',
        width: 50,
        reference: 'guanliyuan',
        listeners: {
            'click': {
                element: 'el',
                fn: 'onClick'
            }
        }
    }, {
        margin: '10 0 20 10',
        xtype: 'image',
        cls: 'header-right-profile-image topoint',
        height: 35,
        width: 35,
        alt: '当前用户',
        tooltip: '{nick}',
        listeners: {
            'click': {
                element: 'el',
                fn: 'onClick'
            }
        },
        src: 'resources/7.png'
    }]
});
