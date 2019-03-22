/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.resourcenode.ResourceNodeController', {
    extend: 'RBase.base.ViewController',

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
        var me = this,
            win = me.getView().up('window'),
            record = win.record,
            id = record.get('id'),
            url = '/rbase/api/resourceNodes/' + id;
        Ext.MessageBox.confirm('提示', '确定保存？', function (chooce) {
            if (chooce == 'yes') {
                Ext.Ajax.request({
                    url: url,
                    method: 'PUT',
                    success: function (rs) {
                        me.getView().getStore().reload();
                        win.close();
                    }
                });

            }
        })

    },
    onCancel: function () {
        var me = this;
        var win = me.getView().up('window'),
            record = win.record;
        Ext.MessageBox.confirm('提示', '确定取消保存？', function (chooce) {
            if (chooce == 'yes') {
                record.reject();
                win.close()
            }
        });
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
        var me = this,
            id = record.get('id'),
            url = '/rbase/api/resourceNodes/' + id;
        var store = me.getView().getStore();
        Ext.MessageBox.confirm('提示', '确定删除？', function (chooce) {
            if (chooce == 'yes') {
                Ext.Ajax.request({
                    url: url,
                    method: 'DELETE',
                    success: function () {
                        Ext.toast('删除成功，刷新列表')
                        store.reload();
                    }
                });
            }
        });
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = me.getView();
            var store = grid.getStore(),
                filterField = me.lookup('searchText').value;
            var url = '/rbase/api/resourceNodes',
                params = '';
            //TODO @chenw 资源主机查询
            if (filterField) {
                params = '?query=example&name=' + filterField
            }
            var newStore = {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: url + params
                }
            };
            grid.setStore(newStore);
        }
    }
});
