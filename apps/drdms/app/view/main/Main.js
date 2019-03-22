/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DRDMS.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DRDMS.view.main.MainController',
        'DRDMS.view.main.MainModel',
    ],
    padding: "1 1",
    layout: 'card',
    items: {
        xtype: 'app-home',
    },
    listeners: {
        render: function () {
            var me = this;
            Ext.Ajax.request({
                url: '/base/api/test',
                success: function (rs) {
                    var jude = JSON.parse(rs.responseText).isCenter;
                    if (jude == false) {
                        var items = {
                            xtype: 'app-homenode'
                        };
                    } else {
                        var items = {
                            xtype: 'app-home'
                        };
                    }
                    if (me.items.items.length == 1) {
                        me.removeAll();
                        me.add(items)
                    }
                }
            });
        }
    }
});
