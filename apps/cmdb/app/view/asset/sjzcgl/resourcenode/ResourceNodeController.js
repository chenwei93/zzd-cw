/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.view.asset.sjzcgl.resourcenode.ResourceNodeController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.resourcenode',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (view, record, index) {
        var id = record.data.id;
        this.open({
            xtype: 'resourcenode-show',
            entityId: id
        }, {
            width: 650,
            height: 330,
            title: '资源主机查看'
        })
    },
    onShow1: function (tr, td, view, record, index) {
        // debugger;
        var id = index.record.data.id;
        this.open({
            xtype: 'resourcenode-show',
            entityId: id
        }, {
            width: 650,
            height: 330,
            title: '资源主机查看'
        })
    },
    onEdit: function (tr, td, view, index, grid, record) {
        // debugger;
        var id = record.data.id;
        this.open({
            xtype: 'resourcenode-add',
            entityId: id
        }, {
            width: 605,
            height: 370,
            title: '资源主机编辑',
            gridView: this.getView()
        })
    },
    //编辑页面保存、取消
    onSave: function () {
        var me = this;
        var win = me.getView().up('window'),
            record = win.record;
        var msg = '确定保存？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                record.commit();
                win.close();
            };
        this.msgAlert(msg, obj, fn);

    },
    onCancel: function () {
        var me = this;
        var win = me.getView().up('window'),
            record = win.record;
        var msg = '确定取消保存？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                record.reject();
                win.close()
            };
        this.msgAlert(msg, obj, fn);

    },
    onAdd: function () {
        this.open('resourcenode-add', {
            width: 605,
            height: 370,
            title: '资源主机新增',
            gridView: this.getView()
        });
    },

    onDelete: function (view, rowindex, a, b, c, record) {
        var me = this;
        var id = record.data.id;
        var msg = '确定删除？',
            url = '/rbase/api/resourceNodes/' + id;
        var store = me.getView().getStore(),
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                Ext.Ajax.request({
                    url: url,
                    method: 'DELETE',
                    success: function () {
                        store.reload();
                    }
                });
            };
        this.msgAlert(msg, obj, fn);
    },
    msgAlert: function (msg, obj, fn) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: obj,
            fn: function (btn, text) {
                if (btn == 'yes') {
                    if (fn != null) {
                        fn();
                    }
                }
            }
        })
    }
});
