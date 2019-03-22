/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.base.ViewController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.Window'
    ],

    statics: {
        DEFAULT_ITEM: {},

        DEFAULT_WINDOW: {
            xtype: 'window',
            layout: 'fit',
            width: 500,
            height: 500
        },

        LOGIN_USER: null
    },

    getLogin: function () {
        return LOGIN_USER;
    },

    /**
     * 使用name显示对象的renderer
     * @param value
     */
    renderWithName: function (value) {
        return value == null ? null : value.name;
    },
    /**
     * 装载一条数据
     */
    loadEntity: function () {
        var vm = this.getViewModel(),
            entityId = this.getView().getEntityId();

        var pvm = vm.getParent();
        pvm.set('entityId', entityId);
        pvm.notify();

        var store = vm.get('entity');
        store.load(function (records, operation, success) {
            if (records.length != 1) {
                console.debug('获取失败，返回空值');
            }
            var data = records[0].getData();
            vm.setData(data);
        });
    },

    /**
     * 弹出子窗口
     * @param target
     * @param windowConfig
     * @returns {winCfg}
     */
    open: function (target, windowConfig) {
        if (target == null) return null;

        var itemCfg,
            winCfg;

        if (Ext.isString(target)) itemCfg = Ext.apply({}, {xtype: target}, Cmdb.base.ViewController.DEFAULT_ITEM);
        else if (Ext.isObject(target)) {
            itemCfg = Ext.apply({}, target, Cmdb.base.ViewController.DEFAULT_ITEM);
        } else {
            Ext.Error.raise('错误的参数');
        }

        if (windowConfig == null) windowConfig = {};
        if (Ext.isString(windowConfig)) windowConfig = {title: windowConfig};
        winCfg = Ext.apply({}, windowConfig, Cmdb.base.ViewController.DEFAULT_WINDOW);

        winCfg = Ext.apply({}, {items: itemCfg}, winCfg);
        var win = Ext.create(winCfg);
        this.getView().add(win);

        win.setScrollable(true);
        win.show();

        return win;
    },
    /**
     * Store刷新
     */
    reloadStore: function () {
        var defaultStore = 'list';
        this.getViewModel().getStore(defaultStore).reload();
    },

    createTitle: function (name, data, time) {
        if (time != null) {
            top._slIndex++;
            return name + '实例' + data + '_' + time;
        } else {
            top._slIndex++;
            return name + '实例' + data
        }
    }
});
