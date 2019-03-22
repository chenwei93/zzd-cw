/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AP.view.main.MainController', {
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
        var me = this,
            refs = me.getReferences();
        console.log(me, refs);

        me.callParent([view]);

        me.nav = refs.navigation;
        me.navigationTree = refs.navigationTree;
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
        console.log(mainCard);
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
            url = url.replace("/ap/", "/drdms/");
            location.href = url;
        })
    },
    onClick: function (a) {
        var gly = this.getView().lookup('guanliyuan');
        Ext.Msg.alert({
            title: '提示',
            msg: '确定退出登陆？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/base/api/logout',
                        success: function () {
                            gly.setText('管理员');
                        }
                    });
                }
            }

        })
    }

});
