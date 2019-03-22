Ext.define('DA.view.entry.serviceswh.ServiceWHController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.servicewh',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onPublish: function () {
        var me = this;
        var selectModel = me.getView().getSelectionModel(),
            select = selectModel.getSelection(),
            store = me.getView().getStore();
        var length = select.length;
        if (length == 0) {
            Ext.toast('当前未选择接口，不能操作');
        } else {
            var id = '';
            Ext.Array.each(select, (item, index) => {
                if (index == 0) {
                    id = item.get('id')
                } else {
                    id += ',' + item.get('id')
                }
            });
            Ext.Msg.confirm('提示', '确定发布？', function (chooce) {
                if (chooce == 'yes') {
                    Ext.Ajax.request({
                        url: '/rest/publish/' + id,
                        success: function (rs) {
                            Ext.toast('发布成功，刷新列表');
                            selectModel.deselectAll(true);
                            store.reload();
                        }
                    })
                }
            });
        }
    },
    onAuthorize: function () {
        console.log('授权');
    },
    onShow: function (view, record, index) {
        this.formShow(record)
    },
    onShow1: function (tr, td, view, a, index, record) {
        this.formShow(record)
    },
    formShow: function (record) {
        var id = record.get('id'),
            me = this;
        Ext.Ajax.request({
            url: '/rest/services/' + id,
            success: function (rs) {
                var data = Ext.decode(rs.responseText);
                me.open({
                    xtype: 'services-showform',
                    record: data,
                    viewModel: {
                        data: {
                            service: data
                        }
                    },
                }, {
                    width: 880,
                    height: 500,
                    title: '详细信息'
                })
            }
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
    onCopy: function (view, row, column, button, action, record, tr) {
        var input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', record.get('whurl'));
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            // ('复制成功');
            Ext.toast('复制成功');
        }
        document.body.removeChild(input);
    },
//刷新
    onRefresh: function () {
        this.getView().getStore().reload();
    }

});
