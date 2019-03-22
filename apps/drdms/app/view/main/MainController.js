/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DRDMS.view.main.MainController', {
    extend: 'Ext.app.ViewController',


    alias: 'controller.main',
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange'
    },

    config: {
        showNavigation: true
    },

    collapsedCls: 'main-nav-collapsed',

    init: function (view) {
        this.verifyLogin();
        var me = this,
            refs = me.getReferences();
        me.callParent([view]);

        me.nav = refs.navigation;
        me.navigationTree = refs.navigationTree;
    },
    //验证当前是否登录
    verifyLogin: function () {
        var vm = this.getViewModel();
        Ext.Ajax.request({
            url: '/sso/getCurrentAccount',
            success: function (rs) {
                //成功
                var res = rs.responseText;
                if (res == '') {
                    Ext.toast('当前未登录，请登录后再使用');
                    location.href = '/redirect.html';
                    vm.set('jude', false);
                } else {
                    try {
                        var responseText = Ext.decode(res);
                        var showName = responseText.display ? responseText.display : responseText.nick;
                        vm.set('nick', showName);
                        vm.set('dept', responseText.department);
                        vm.set('jude', true);
                        Ext.toast('登录成功');
                    } catch (e) {
                        Ext.toast('当前未登录，请登录后再使用');
                        location.href = '/redirect.html';
                    }
                }
            },
            failure: function (rs) {
                Ext.toast('当前未登录，请登录后再使用');
                location.href = '/redirect.html';
            }
        })
    },

    onNavigationItemClick: function () {
        // The phone profile's controller uses this event to slide out the navigation
        // tree. We don't need to do anything but must be present since we always have
        // the listener on the view...
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);
        }
    },

    onRouteChange: function (id) {
        this.setCurrentView(id);
    },

    setCurrentView: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            newView = null,
            refs = me.getReferences(),
            mainCard = refs.mainCard,
            navigationTree = me.navigationTree,
            store = navigationTree.getStore(),
            node = store.findNode('routeId', hashTag) ||
                store.findNode('viewType', hashTag),
            item = mainCard.child('component[routeId=' + hashTag + ']');

        if (!item) {
            item = mainCard.add({
                xtype: node.get('viewType'),
                routeId: hashTag
            });

            newView = item;
        }

        mainCard.setActiveItem(item);

        navigationTree.setSelection(node);

        if (newView && newView.isFocusable(true)) {
            newView.focus();
        }
    },
    onToggleNavigationSize: function () {

        var me = this,
            refs = me.getReferences(),
            navigationListContainer = refs.treelistContainer,
            navigationList = refs.navigationTree,
            wrapContainer = refs.mainCard,
            collapsing = !navigationList.getMicro(),
            new_width = collapsing ? 64 : 250;
        if (collapsing == true) {
            navigationListContainer.setWidth(new_width);
            navigationList.setMicro(collapsing);
            Ext.resumeLayouts();
        } else {
            if (!collapsing) {
                navigationList.setMicro(false);
            }
            navigationListContainer.setWidth(new_width);
            // wrapContainer.updateLayout({isRoot: true});
            navigationList.el.addCls('nav-tree-animating');

            if (collapsing) {
                navigationList.on({
                    afterlayoutanimation: function () {
                        navigationList.setMicro(true);
                        navigationList.el.removeCls('nav-tree-animating');
                    },
                    single: true
                });
            }
        }
    },
    onSelect: function (a, b, c, d) {
        var menu = a.menu;
        menu.on('click', function (e, menu, g) {
            var value = menu.text;
            var url = location.href;
            if (url.indexOf("#") != -1) {
                var index = url.indexOf("#");
                url = url.substring(0, index);
            }

            url = url.replace("/drdms/", "/rbase/");
            location.href = url;
        })
    },
    onLoginOut: function (btn) {
        var vm = this.getViewModel();
        Ext.Msg.confirm('提示', '确定退出登陆？', function (btn, text) {
            if (btn == 'yes') {
                var jude = vm.get('jude');
                vm.set('nick', '管理员');
                location.href = '/logout/cas';
                // if (jude) {
                //     Ext.Ajax.request({
                //         url: '/logout',
                //         success: function (rs) {
                //             Ext.toast('登出成功');
                //             vm.set('nick', '管理员');
                //             location.href = '/redirect.html';
                //         }
                //     });
                // } else {
                //     window.open('/logout/cas');
                //     Ext.toast('登出成功');
                //     vm.set('nick', '管理员');
                // }
            }
        })
    },
});
