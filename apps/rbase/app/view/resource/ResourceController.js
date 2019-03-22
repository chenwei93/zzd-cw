/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.resource.ResourceController', {
    extend: 'RBase.base.ViewController',

    alias: 'controller.resource',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onChange: function () {
        var value = this.lookup('comborespool').getValue();
        var store = this.lookup('comborespool').up('grid').getStore();
        store.reload({
            type: 'ajax2',
            url: '/rbase/api/resources?query=example&locator.poolCode=' + value

        });
    },
    onSpecialkey: function (field, e) {
        if (e.getKey() == Ext.EventObject.ENTER) {
            var value = field.value;
            var store = this.lookup('comborespool').up('grid').getStore();
            if (value == '') {
                store.reload({
                    type: 'ajax2',
                    url: '/rbase/api/resources'
                });
            } else {
                store.reload({
                    type: 'ajax2',
                    url: '/rbase/api/resources?query=example&title=' + value
                });
            }
        }
    },
    onReset: function () {
        var store = this.lookup('comborespool').up('grid').getStore();
        store.reload({
            type: 'ajax2',
            url: '/rbase/api/resources'
        });
    },
    onView: function (the, record, item) {
        this.open('resource-show', {
            width: 670,
            height: 507,
            record: record,
            viewModel: {
                data: {
                    resource: record
                }
            },
            title: '资源库查看'
        });
    },
    onShow1: function (view, tr, td, index, record, item) {
        this.open('resource-show', {
            width: 670,
            height: 507,
            record: item,
            viewModel: {
                data: {
                    resource: item
                }
            },
            title: '资源库查看'
        });
    },
    onEdit: function (view, tr, td, index, record, item) {
        this.open('resource-edit', {
            width: 670,
            height: 550,
            record: item,
            scrollable: true,
            viewModel: {
                data: {
                    resource: item
                }
            },
            gridView: this.getView(),
            title: '资源库编辑'
        });
    },
    onAdd: function () {
        this.open('resource-add', {
            width: 670,
            height: 520,
            title: '资源库新增',
            gridView: this.getView()
        });
    },
    onDelete: function (view, row, col, tr, td, record, item) {
        var me = this,
            store = me.getView().getStore();
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除?',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/rbase/api/resources/' + record.get('id'),
                        method: 'DELETE',
                        success: function () {
                            Ext.toast('删除成功，刷新列表');
                            store.reload();
                        }
                    });
                }
            }
        });
    }
});
