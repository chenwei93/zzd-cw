Ext.define('Starter.view.main.MainController', {
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
        console.log(me,refs);
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
        var arr = ['个人密码重置'],
            text = node.data.text;
        if (arr.indexOf(text) == 0) {
            Ext.create({
                xtype: 'window',
                title: '个人密码重置',
                modal: true,
                items: [{
                    xtype: 'pwd'
                }]
            }).show();
        }
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
    }
});