/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('ETL.view.rnode.RNodeController', {
    extend: 'ETL.base.ViewController',
    alias: 'controller.rnode',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    showDetail: function (xtype, title, record, extra) {
        var id = record ? record.get('id') : null,
            items = {
                xtype: xtype,
                entityId: record ? record.get('id') : null
            };

        var win = {title: '资源主机' + title};
        win = extra ? Ext.apply(extra, win) : win;

        this.open(items, win)
    },
    OnRNodeRender: function (view) {
        var id = view.entityId, params = {id: id};
        console.log(view,view.getViewModel());
        if (id) {
            Ext.Ajax.request({
                url: ETL.base.ViewController.HTTP_PREFIX+'/showServerCatalog',
                params: params,
                method: 'POST',
                success: function (rs) {
                    console.log(view,view.getViewModel());
                    var res = Ext.decode(rs.responseText);
                    view.getViewModel().setData(res)
                }
            })
        }
    },

    // 加载数据
    onShowRender: function (view) {
        var id = view.entityId, params = {id: id};
        if (id) {
            Ext.Ajax.request({
                url: ETL.base.ViewController.HTTP_PREFIX+'/showServerCatalog',
                params: params,
                method: 'POST',
                success: function (rs) {
                    var res = Ext.decode(rs.responseText);
                    view.getViewModel().setData(res)
                }
            })
        }
    },
    // 详细
    onShow1: function (view, rowindex, colindex, btn, event, record, tr) {
        this.showDetail('rnode-show', '查看', record, {width: 650, height: 330});
    },

    //编辑
    onEdit: function (view, rowindex, colindex, btn, event, record, tr) {
        this.showDetail('rnode-add', '编辑', record, {
            width: 605,
            height: 370,
            gridView: this.getView()
        });
    },

    // 新增
    onAdd: function () {
        this.showDetail('rnode-add', '新增', null, {
            width: 605,
            height: 370,
            closeAction: 'close',
            gridView: this.getView()
        });
    },

    // 删除
    onDelete: function (view, rowindex, colindex, btn, event, record, tr) {
        var url = '/removeServer', params = {id: record.get('id')};
        var store = this.getView().getStore();

        Ext.Msg.confirm('提示', '确定删除?', function (btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url:  ETL.base.ViewController.HTTP_PREFIX+url,
                    params: params,
                    method: 'POST',
                    success: function () {
                        Ext.toast('删除成功，刷新列表');
                        store.reload();
                    }
                });
            }
        });
    },
    //取消保存
    onCancelAdd: function (btn) {
        var me = this,
            form = btn.up('rnode-add'),
            Form = form.getForm(),
            win = btn.up('window');
        if (win) {
            Ext.Msg.confirm('提示', '确定取消保存?', function (chooce) {
                if (chooce == 'yes') {
                    Form.reset();
                    win.close();
                    Ext.toast('已取消保存');
                }
            });
        }
    },

    //确定保存
    onSaveAdd: function (btn) {
        var win = btn.up('window'),
            gridView = win.gridView,
            store = gridView.getStore(),
            form = btn.up('rnode-add'),
            Form = form.getForm(),
            entityId = form.entityId;
        var url = '/saveServerCatalog';

        if (entityId) {
            url = '/updateServer'
        }
        Ext.MessageBox.confirm('提示', '确定保存?', function () {


            form.submit({
                url: ETL.base.ViewController.HTTP_PREFIX+url,
                params:{id:entityId},
                success: function (data) {
                    console.log("11111111111");
                    Form.reset();
                    store.reload();
                    win.close();
                    Ext.toast('保存成功，刷新列表')
                },
                failure: function (data) {
                    console.log("============="+data);
                    Form.reset();
                    store.reload();
                    win.close();
                    Ext.toast('保存成功，刷新列表')
                }
            })
        })
    }

});
