Ext.define('DRDMS.view.region.RegionController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.region',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onDelete: function (grid,rowindex) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var store = me.getView().getStore();
                    store.removeAt(rowindex);
                }
            }
        })
    },
    onEdit: function (tr, td, view, record, index) {
        Ext.create({
            xtype: 'window',
            width: 800,
            record: index.record,
            viewModel: {
                data: {
                    region: index.record
                }
            },
            title: '编辑地区',
            items: [{
                xtype: 'region-edit'
            }]
        }).show();
    },
    onCancel: function () {
        var win = this.getView().up('window');
        var record = this.getView().up('window').record;
        record.reject();
        win.close();
    },
    onSave: function () {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '修改成功',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var record = me.getView().up('window').record;
                    record.commit();
                    win.close();
                }

            }
        });
    },
    onAdd: function () {
        Ext.create({
            xtype: 'window',
            width: 800,
            gridView: this.getView(),
            title: '新增地区',
            items: [{
                xtype: 'region-add'
            }]
        }).show();
    },
    onCancelAdd: function () {
        var win = this.getView().up('window');
        win.close();
    },
    onSaveAdd: function (a) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '新增成功。',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var store = me.getView().up('window').gridView.getStore();
                    var value = a.up('form').getForm().getValues();
                    store.add({
                        text: value.text,
                        code: value.code,
                        rank: value.rank,
                        leaf: true
                    });
                    win.close();
                }

            }
        });
    }

    // TODO - Add control logic or remove is not needed
});
