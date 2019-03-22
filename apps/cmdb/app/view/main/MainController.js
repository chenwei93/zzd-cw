/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onButtonClick: function (btn) {
        this.redirectTo(btn.itemId, true);
    },

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
        me.callParent([view]);

        me.nav = refs.navigation;
        me.navigationTree = refs.navigationTree;
        me.breadcrumb = refs.breadcrumb;

        me.modules = Ext.data.StoreManager.lookup('cmdb-module');
        me.moduleHome = null;
        top._slIndex = 1;
        me.resolveLogin();
    },

    resolveLogin: function () {
        var me = this;
        var users = Ext.getStore('user');
        var params = Ext.Object.fromQueryString(window.location.search.substr(1));
        var user = null;

        try {
            if (params['user']) {
                user = users.query('name', params['user']);
                if (user != null) {
                    Ext.app.ViewController.LOGIN_USER = user.first().getData();

                    me.getViewModel().set('nick', Ext.app.ViewController.LOGIN_USER.displayName);
                    me.getViewModel().set('user', Ext.app.ViewController.LOGIN_USER.name);
                    me.getViewModel().set('dept', Ext.app.ViewController.LOGIN_USER.dept);
                    console.info('登录成功:', Ext.app.ViewController.LOGIN_USER);
                }
            }
        } catch (e) {
            user = null;
        }

        if (user == null) {
            Ext.Msg.alert('提示', '系统未登录');
            // 跳转到登录页面
        }
    },

    onNavigationItemClick: function () {
        // The phone profile's controller uses this event to slide out the navigation
        // tree. We don't need to do anything but must be present since we always have
        // the listener on the view...
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(this.lastModule + '-' + to);
        }
    },

    onRouteChange: function (id) {
        if (Ext.isEmpty(id)) {
            id = 'portal';
        }

        // 获取module和menu
        var ids = id.split('-');
        if (ids.length < 2) ids[1] = null;
        else if (ids.length > 2) {
            var str = '';
            for (var i = 1; i < ids.length; i++) {
                str += '-' + ids[i];
            }
            ids[1] = str.substr(1);
        }

        this.setCurrentModule(ids);
    },

    setCurrentModule: function (ids) {
        var menu = ids[1];
        var module = ids[0];
        var me = this;

        if (me.lastModule != module) {
            var store = Ext.data.StoreManager.lookup('menu-' + module);
            if (store != null) {

                me.lastModule = module;
                me.modules.each(function (record) {
                    if (record.get('name') == module) {
                        me.moduleHome = record.get('home');
                        me.getViewModel().set('appTitle', record.get('title'));
                        return false;
                    }
                });

                me.navigationTree.setStore(store);
                //me.breadcrumb.setStore(store);
            } else {
                console.error('指定模块不存在', 'menu-' + module);
            }
        }

        if (menu == null) menu = me.moduleHome;

        this.setCurrentView(menu);
    },

    setCurrentView: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            newView = null,
            refs = me.getReferences(),
            // mainCard = refs.mainCard,
            mainCard = me.lookup('maincard'),
            navigationTree = me.navigationTree,
            breadcrumb = me.breadcrumb,
            store = navigationTree.getStore(),
            node = store.findNode('routeId', hashTag) ||
                store.findNode('viewType', hashTag);
        var item = mainCard.child('component[routeId=' + hashTag + ']');

        if (node == null) {
            console.warn('菜单不存在:', hashTag);
            return;
        }

        if (!item) {
            item = mainCard.add({
                xtype: node.get('viewType'),
                routeId: hashTag
            });

            newView = item;
        }
        mainCard.setActiveItem(item);

        navigationTree.setSelection(node);
        if (breadcrumb) {
            breadcrumb.setSelection(node);

        }

        if (newView && newView.isFocusable(true)) {
            newView.focus();
        }
    },
    onLoginOut: function () {
        Ext.Msg.confirm('提示', '确定退出登录？', function (btn, text) {
            if (btn == 'yes') {
                var locationHref = location.href;
                var resolve = locationHref.substring(0, locationHref.indexOf('cmdb') + 4);
                location.href = resolve + '/login/login.html';
            }
        })
    },
    onClick: function () {

    },

});
