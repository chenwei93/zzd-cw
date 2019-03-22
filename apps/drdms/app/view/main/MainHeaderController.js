/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DRDMS.view.main.MainHeaderController', {
    extend: 'Ext.app.ViewController',


    alias: 'controller.mainheader',

    // initViewModel: function () {
    //     this.loadEntity();
    // },
    loadEntity: function () {
        var me = this;
        var vm = this.getViewModel(),
            entityId = this.getView().getEntityId();

        var pvm = vm.getParent();
        pvm.set('entityId', entityId);
        pvm.notify();

        var store = vm.get('entity');
        store.load(function (records, operation, success) {
            if (records.length != 1) {
                console.debug('获取失败，返回空值');
                alert('获取失败，返回空值');
            } else {
                var data = records[0].getData();
                vm.setData(data);
                var center = data.center;
                // var panel = me.getView().up().items.items[2].items.items[0].getStore();
                var treeList = vm.get('treelist');
                treeList.addListener('beforeload', function (store, rds, opts) {
                    store.filterBy(function (record) {
                        if (record.get('center') != center && record.get('center') != "all") {
                            return false;
                        } else {
                            return true;
                        }
                    });
                });
                treeList.load();
            }
        });
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
            if (value == '数据服务管理平台') {
                url = url.replace("/drdms/", "/ap/");
            } else {
                url = url.replace("/drdms/", "/rbase/");
            }
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