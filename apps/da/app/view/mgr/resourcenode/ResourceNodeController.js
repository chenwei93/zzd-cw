/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('DA.view.mgr.resourcenode.ResourceNodeController', function () {
    //获取id
    var safeGetId = function (record) {
        var id = record ? record.get('id') : null;
        return id
    };

    return {
        extend: 'DA.base.ViewController',
        alias: 'controller.resourcenode',


        initViewModel: function (vm) {
            vm.getStore('list').loadPage(1);
        },

        showDetail: function (xtype, title, record, extra) {
            var id = safeGetId(record),
                items = {
                    xtype: xtype,
                    entityId: id
                };

            var win = {title: '资源主机' + title};
            win = extra ? Ext.apply(extra, win) : win;

            this.open(items, win)
        },


        onShow: function (view, record, index) {
            this.showDetail('resourcenode-show', '查看', record, {width: 650, height: 330});
        },

        onShow1: function (view, rowindex, colindex, btn, event, record, tr) {
            this.showDetail('resourcenode-show', '查看', record, {width: 650, height: 330});
        },

        onEdit: function (view, rowindex, colindex, btn, event, record, tr) {
            this.showDetail('resourcenode-add', '编辑', record, {
                width: 605,
                height: 370,
                gridView: this.getView()
            });
        },

        onAdd: function () {
            this.showDetail('resourcenode-add', '新增', null, {
                width: 605,
                height: 370,
                closeAction: 'close',
                gridView: this.getView()
            });
        },

        onDelete: function (view, rowindex, colindex, btn, event, record, tr) {
            var url = '/rest/resourceNodes/' + safeGetId(record);
            var store = this.getView().getStore();

            Ext.Msg.confirm('提示', '确定删除?', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        method: 'DELETE',
                        success: function () {
                            Ext.toast('删除成功，刷新列表');
                            store.reload();
                        }
                    });
                }
            });
        }
    }
});
