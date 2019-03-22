/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('DA.view.mgr.resourcepool.ResourcePoolController', function () {

    return {
        extend: 'DA.base.ViewController',
        alias: 'controller.resourcepool',

        //加载列表数据
        initViewModel: function (vm) {
            vm.getStore('list').loadPage(1);
        },


        /**
         * 弹出窗口：显示，编辑，新增
         */
        showDetail: function (xtype, title, record, extra) {
            var id = record ? record.get('id') : null,
                projection;
            if (record) {
                var format = record.get('allowFormat');
                projection = format == 'Db' ? 'dbResourcePool' : 'resourcePool';
            }
            var items = {
                    xtype: xtype,
                    entityId: id,
                    projection: projection
                },
                win = {title: title};
            win = extra ? Ext.apply(extra, win) : win;

            this.open(items, win)
        },

        //双击显示单条资源池的详细信息
        onShow: function (view, record, index) {
            var format = record.get('allowFormat');
            if (format == 'Db' || format == 'Service') {
                this.showDetail('resourcepool-showdb', '资源池查看', record, {
                    width: 830,
                    height: 580
                });
            }
            else {
                this.showDetail('resourcepool-showfile', '资源池查看', record, {
                    width: 670,
                    height: 420
                });
            }
        },

        //单击列查看按钮，显示单条资源池的详细信息
        onShow1: function (tr, td, view, a, index, record) {
            var format = record.get('allowFormat');
            if (format == 'Db' || format == 'Service') {
                this.showDetail('resourcepool-showdb', '资源池查看', record, {
                    width: 830,
                    height: 580
                });
            }
            else {
                this.showDetail('resourcepool-showfile', '资源池查看', record, {
                    width: 670,
                    height: 420
                });
            }
        },

        //单击列编辑按钮，显示单条资源池的详细信息可编辑状态
        onEdit: function (tr, td, view, a, index, record) {
            var format = record.get('allowFormat');
            if (format == 'Db' || format == 'Service') {
                this.showDetail('resourcepool-adddb', '资源池编辑', record, {
                    width: 830,
                    height: 660,
                    gridView: this.getView(),
                    panelType: record.get('allowFormat'),

                });
            }
            else {
                this.showDetail('resourcepool-addfile', '资源池编辑', record, {
                    width: 670,
                    height: 470,
                    gridView: this.getView(),
                    panelType: record.get('allowFormat'),
                });
            }
        },

        // 新增资源池
        onNew: function () {
            this.showDetail('resourcepool-addchoose', '选择新增资源池的资源形态', null, {
                width: 300,
                height: 170,
                gridView: this.getView(),
            });
        },

        // 删除资源池
        onDelete: function (view, rowindex, a, b, c, record) {
            var id = record.get('id');
            var url = '/rest/resourcePools/' + id,
                store = this.getView().getStore();
            Ext.Msg.confirm('提示', '确定删除？', function (btn) {
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
        },

        // 显示资源池里的资源库列表
        onShowResource: function (view, rowindex, colindex, btn, event, record) {
            var code = record.get('code');
            this.showDetail('choose-resource', '浏览资源池', record, {
                resPoolCode: code,
                width: 700,
                height: 600,
                gridView: this.getView()
            });
        },

        //加载预览资源池form
        onChooseResourceRender: function (view) {
            var win = view.up('window'),
                code = win.resPoolCode;
            var store = {
                model: 'chooseResource',
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/rest/resourceByPool/' + code
                }
            };
            view.setStore(store);
        },

        // 选择资源后提交
        onCreateJK: function (btn) {
            var win = btn.up('window'),
                code = win.resPoolCode;

            var gridView = btn.up('choose-resource'),
                select = gridView.getSelectionModel().getSelection(),
                length = select.length;

            if (length == 0) {
                Ext.toast('提示', '当前未有选中的资源')
            } else {
                var keys = select[0].get('entityKey');
                Ext.Array.each(select, (item, index, arr) => {
                    if (index > 0) {
                        keys += ',' + item.get('entityKey')
                    }
                });
                var url = '/rest/generateResource/' + code;
                Ext.Ajax.request({
                    url: url,
                    method: 'POST',
                    params: 'keys=' + keys,
                    success: function (rs) {
                        win.close();
                    }
                });
            }
        },

        //同步
        onSyncZyk: function (view, rowindex, colindex, btn, event, record) {
            var store = this.getView().getStore(),
                code = record.get('code');
            var url = '/rest/syncResource/' + code;

            Ext.Msg.confirm('提示', '是否立即同步当前资源池？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        method: 'POST',
                        success: function () {
                            Ext.toast('同步成功，刷新列表');
                            store.reload();
                        },
                        failure: function () {
                            Ext.toast('同步失败');
                        }
                    });
                }
            });
        }
    }
});
