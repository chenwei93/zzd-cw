/**
 * This view is an example list of people.
 */
Ext.define('Cmdb.view.main.MainHeader', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-header',

    requires: [
        'Cmdb.store.Module'
    ],


    id: 'mainHeader',
    height: 60,
    layout: 'column',
    bodyStyle: {
        "backgroundColor": "#2eadf5",
    },
    items: [
        {
        //     margin: '15 5 20 20',
        //     xtype: 'image',
        //     height: 30,
        //     width: 30,
        //     alt: 'logo',
        //     src: 'resources/logo.png'
        // }, {
            margin: '5 0 0 20',
            xtype: 'tbtext',
            bind: {
                text: '<h2 style="color: white">{title}&#160;—&#160;<span style="font-size:18px;font-weight: normal;color: white">{appTitle}</span></h2>'
            },
            Width: 675
        }, {
            xtype: 'toolbar',
            style: {
                "background-color": "rgba(46,173,245,0)"
            },
            margin: '10 0 0 0',
            items: [{
                iconCls1: 'x-fa fa-users',
                style: {
                    "background-color": "rgba(46,173,245,0)",
                    "color": "white"
                },
                border: false,
                iconCls: 'x-fa fa-chevron-circle-down',
                arrowCls: null,
                menu: {
                    xtype: 'menu',
                    plain: true,
                    items: {
                        xtype: 'buttongroup',
                        title: '选择应用',
                        columns: 2,
                        defaults: {
                            xtype: 'button',
                            scale: 'large',
                            iconAlign: 'left',
                            textAlign: 'left',
                            handler: 'onButtonClick'
                        },
                        items: [
                            {
                                text: '工作门户',
                                colspan: 2,
                                width: '100%',
                                itemId: 'portal',
                                iconCls: 'x-fa fa-television',
                                displayText: 'User manager',
                                height: '4em'
                            }, {
                                text: '运维管理中心',
                                itemId: 'ops',
                                iconCls: 'x-fa fa-cog',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '资产管理和服务中心',
                                itemId: 'asset',
                                iconCls: 'x-fa fa-money',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '可视化展厅',
                                itemId: 'dashboard',
                                iconCls: 'x-fa fa-eye',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '监控预警室',
                                itemId: 'monitor',
                                iconCls: 'x-fa fa-camera',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '平台管理部',
                                itemId: 'mgr',
                                iconCls: 'x-fa fa-sitemap',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '日常事务处理中心',
                                itemId: 'integrate',
                                iconCls: 'x-fa fa-th-large',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '日常业务管理中心',
                                itemId: 'business',
                                iconCls: 'x-fa fa-user-md',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '接口服务管理中心',
                                itemId: 'interface',
                                iconCls: 'x-fa fa-user-md',
                                displayText: 'User manager',
                                width: 240,
                                height: '4em'
                            }, {
                                text: '数字资产管理中心',
                                itemId: 'entry',
                                iconCls: 'x-fa fa-list',
                                displayText: 'User manager',
                                colspan: 2,
                                width: '100%',
                                height: '4em'
                            }]
                    }
                }
            }]
        }],
    dockedItems: {
        xtype: 'toolbar',
        id: 'toolbarx',
        dock: 'right',
        style: {
            "background-color": "rgba(46,173,245,1)"
        },
        layout: 'hbox',
        defaults: {
            style: {
                "background-color": "rgba(46,173,245,1)"
            },
            flex: 1
        },
        items: [{
            border: false,
            id: 'deptx',
            bind: {
                text: '{dept}'
            },
        }, {
            border: false,
            id: 'nickx',
            bind: {
                text: '{nick}'
            },
            handler: 'onLoginOut'
        }, {
            margin: '3 10 7 10',
            xtype: 'image',
            cls: 'header-right-profile-image topoint',
            height: 45,
            width: 45,
            alt: '当前用户',
            tooltip: '管理员',
            reference: 'gly',
            listeners: {
                'click': {
                    element: 'el',
                    fn: 'onLoginOut'
                }
            },

            bind: {
                src: 'resources/images/user-profile/' + '{user}' + '.png',
            }
        }]
    },
    listeners: {
        render: function () {
            if (Ext.app.ViewController.LOGIN_USER.name != 'chenw') {
                function setBgColor(itemArr) {
                    Ext.Array.each(itemArr, (item, index, arr) => {
                        var component = document.getElementById(item);
                        component.style.backgroundColor = "#CDC9A5";
                    })
                }

                this.setBodyStyle("backgroundColor", "#CDC9A5");
                setBgColor(['toolbarx', 'deptx', 'nickx'])
            }
        }
    }
});
