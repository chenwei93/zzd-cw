/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.news.NewsController', {
    extend: 'Starter.base.ViewController',
    alias: 'controller.news',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onNewsRender: function (view) {
        var item;
        if (view.showType == 'edit') {
            item = [
                {
                    xtype: 'textfield',
                    fieldLabel: '标题',
                    name: 'title'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '录入人',
                    name: 'author'
                }, {
                    fieldLabel: '新闻类型',
                    xtype: 'combo',
                    store: {
                        data: [{
                            name: '政策法规',
                            value: 'TYPE1'
                        }, {
                            name: '工作动态',
                            value: 'TYPE2'
                        }]
                    },
                    displayField: 'name',
                    valueField: 'value',
                    name: 'type'
                }, {
                    xtype: 'datefield',
                    name: 'createTime',
                    format: 'Y-m-d',
                    fieldLabel: '创建时间'
                }, {
                    xtype: 'textarea',
                    columnWidth: 1,
                    height: '75%',
                    fieldLabel: '新闻内容',
                    name: 'content2'
                }];
        } else if (view.showType == 'show') {
            var tbar = this.lookup('tbar');
            tbar.setHidden(true);
            item = [
                {
                    xtype: 'displayfield',
                    fieldLabel: '标题',
                    name: 'title',
                    columnWidth: 1
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '录入人',
                    name: 'author'
                }, {
                    fieldLabel: '新闻类型',
                    xtype: 'displayfield',
                    renderer: function (data) {
                        var arr = {
                            TYPE1: '政策法规',
                            TYPE2: '工作动态'
                        };
                        if (arr[data]) {
                            return arr[data]
                        } else {
                            return data
                        }
                    },
                    name: 'type'
                }, {
                    xtype: 'displayfield',
                    name: 'createTime',
                    fieldLabel: '创建时间'
                }, {
                    xtype: 'displayfield',
                    columnWidth: 1,
                    height: '75%',
                    fieldLabel: '新闻内容',
                    name: 'content2'
                }];
        } else {
            item = [
                {
                    xtype: 'textfield',
                    fieldLabel: '标题',
                    name: 'title',
                    columnWidth: 1
                }, {
                    xtype: 'textfield',
                    fieldLabel: '录入人',
                    name: 'author'
                }, {
                    fieldLabel: '新闻类型',
                    xtype: 'combo',
                    store: {
                        data: [{
                            name: '政策法规',
                            value: 'TYPE1'
                        }, {
                            name: '工作动态',
                            value: 'TYPE2'
                        }]
                    },
                    displayField: 'name',
                    valueField: 'value',
                    name: 'type'
                }, {
                    xtype: 'textarea',
                    columnWidth: 1,
                    height: '75%',
                    fieldLabel: '新闻内容',
                    name: 'content2'
                }];
        }
        view.removeAll();
        view.add(item);
        if (view.record) {
            var record = view.record,
                date = record.get('createTime');
            var a = Ext.Date.format(new Date(date), 'Y-m-d');
            record.data.createTime = a;
            var data = view.record.data;
            view.getForm().setValues(data)
        }
    },
    onAdd: function (btn) {
        this.open({
            xtype: 'news'
        }, {
            layout: 'fit',
            width: 600,
            height: 500,
            title: '新闻录入',
            gridView: this.getView()
        })
    },
    onSubmit: function (btn) {
        var me = this, win = btn.up('window'),
            grid = win.gridView,
            form = me.getView();

        Ext.MessageBox.confirm('提示', '确定保存？', function (chooce) {
            if (chooce == 'yes') {
                var url = '/rest/news', params = '', method = 'POST';
                if (form.entityId) {
                    params = '/' + form.entityId;
                    method = 'PUT';
                }
                me.getView().submit({
                    url: url + params,
                    method: method,
                    jsonSubmit: true,
                    success: function () {
                        me.successCallBack(win, grid);
                    },
                    failure: function () {
                        me.successCallBack(win, grid);
                    }
                })
            }
        })
    },
    successCallBack: function (win, grid) {
        Ext.toast('保存成功');
        win.close();
        grid.getStore().reload();
    },
    onDelete: function (view, row, col, btn, event, record, tr) {
        var me = this, id = record.get('id');
        Ext.MessageBox.confirm('提示', '确定删除当前该行数据？', function (chooce) {
            if (chooce == 'yes') {
                Ext.Ajax.request({
                    url: '/rest/news/' + id,
                    method: 'DELETE',
                    success: function () {
                        Ext.toast('删除成功，刷新列表');
                        me.getView().getStore().reload();
                    }
                })
            }
        })
    },
    onCancel: function (btn) {
        var win = btn.up('window');
        Ext.MessageBox.confirm('提示', '确定不保存当前输入？', function (chooce) {
            if (chooce == 'yes') {
                Ext.toast('取消保存成功');
                win.close();
            }
        })
    },
    onEdit: function (view, row, col, btn, event, record, tr) {
        this.open({
            xtype: 'news',
            showType: 'edit',
            record: record,
            entityId: record.get('id')
        }, {
            layout: 'fit',
            width: 700,
            height: 500,
            title: '新闻编辑',
            gridView: this.getView()
        })
    },
    onShow: function (view, row, col, btn, event, record, tr) {
        this.open({
            xtype: 'news',
            showType: 'show',
            record: record,
            scrollable: true,
            entityId: record.get('id')
        }, {
            layout: 'fit',
            width: 700,
            height: 500,
            title: '新闻查看',
            gridView: this.getView()
        })
    }

});
