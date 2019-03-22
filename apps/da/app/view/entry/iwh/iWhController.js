Ext.define('DA.view.entry.iwh.iWhController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.iwh',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (view, record, index) {
        var data = record.getData();
        if (data.entity) {
            record.set('entityTitle_', data.entity.entityTitle);
            record.set('entityKey_', data.entity.entityName)
        }
        this.open({
            xtype: 'services-showform',
            record: data,
            viewModel: {
                data: {
                    service: record
                }
            },
        }, {
            width: 880,
            height: 500,
            title: '接口详细信息'
        })
    },
    onShow1: function (tr, td, view, a, index, record) {
        var data = record.getData();
        if (data.entity) {
            record.set('entityTitle_', data.entity.entityTitle);
            record.set('entityKey_', data.entity.entityName)
        }
        this.open({
            xtype: 'services-showform',
            record: data,
            viewModel: {
                data: {
                    service: record
                }
            },
        }, {

            width: 880,
            height: 500,
            title: '接口详细信息'
        })
    },
    onRefresh: function () {
        this.lookup('serviceType').setValue('');
        this.getView().getStore().reload({
            url: '/rest/services'
        })
    },
    onCopy: function (view, row, column, button, action, record, tr) {
        var input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', record.get('url'));
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            // ('复制成功');
            Ext.toast('复制成功');
        }
        document.body.removeChild(input);
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore();
            if (field.reference == "searchTextT") {
                var filterField = me.lookup('searchTextT');
                var params = '&title=' + filterField.value;
            } else {
                var filterField = me.lookup('searchText');
                var params = '&qname=' + filterField.value;
            }
            var newStore = {
                autoLoad: true,
                model: 'Services',
                proxy: {
                    type: 'ajax2',
                    url: '/ap/api/services?query=example&type=Default' + params
                }
            };

            // me.getView().setStore(newStore);
        }
    },
    onDelete: function (tr, td, view, a, index, record) {
        var me = this,
            id = record.get('id');
        Ext.Msg.confirm('提示', '确定删除当前行接口？',
            function (chooce) {
                if (chooce == 'yes') {
                    Ext.Ajax.request({
                        url: '/rest/services/' + id,
                        method: 'DELETE',
                        success: function () {
                            Ext.toast('删除成功');
                            me.getView().getStore().reload();
                        }
                    })
                }
            })
    },
    //接口发布
    onPublish: function (btn) {
        var selectModel = this.getView().getSelectionModel(),
            store = this.getView().getStore(),
            select = selectModel.getSelection();
        if (select.length == 0) {
            Ext.toast('当前没有选中的接口，不可操作')
        } else {
            Ext.MessageBox.confirm('提示', '确定发布当前选中的' + select.length + '个接口？', function (chooce) {
                if (chooce == 'yes') {
                    var id = '';
                    Ext.Array.each(select, (item, index) => {
                        if (index == 0) {
                            id = item.get('id')
                        } else {
                            id += ',' + item.get('id')
                        }
                    });
                    Ext.Ajax.request({
                        url: '/rest/publish/' + id,
                        success: function (rs) {
                            Ext.toast('发布成功，刷新列表');
                            selectModel.deselectAll(true);
                            store.reload();
                        },
                        failure: function (rs) {
                            Ext.toast('发布失败');
                            selectModel.deselectAll(true);
                        }
                    })
                }
            })
        }
    },
    onChooseSelect: function (combo, now, pre) {
        var store = this.getView().getStore(),
            url = '/rest/services?query=example&status=';
        store.reload({
            url: url + now
        })
    },
    onEdit: function (view, row, column, button, action, record, tr) {
        var id = record.get('id');
        this.open({
            xtype: 'services',
            needId: id
        }, {
            width: 900,
            height: 600,
            title: '编辑',
            gridView: this.getView(),
            needId: id
        })
    },
});
