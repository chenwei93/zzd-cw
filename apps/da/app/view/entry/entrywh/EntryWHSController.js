Ext.define('DA.view.entry.entrywh.EntryWHSController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.entry-wh',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },


    onShow: function (view, record, index, tr, td) {
        var id = record.id;
        this.showView(id);
    },
    onShow1: function (view, record, index, tr, td) {
        var id = td.record.id;
        this.showView(id);
    },

    //显示目录详情
    showView: function (id) {
        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '数据集详情',
            width: 800,
            height: 612
        });
    },
    // 编辑数据集
    onEdit: function (view, rowindex, colindex, btn, event, record, tr) {
        var id = record.get('id');
        this.open({
            xtype: 'dataset-edit',
        }, {
            title: '数据集编辑',
            width: '90%',
            height: '90%',
            needId: id,
            gridView: this.getView(),
            needRecord: record

        });
    },
    //克隆
    onClone: function (view, rowindex, colindex, btn, event, record, tr) {
        var id = record.get('id');
        this.open({
            xtype: 'dataset-edit',
        }, {
            title: '数据集克隆',
            width: '90%',
            height: '90%',
            needId: id,
            panelType: 'clone',
            gridView: this.getView(),
            needRecord: record

        });
    },
    //根据条件刷新当前grid
    reloadGrid: function (url, store) {
        store.reload({
            type: 'ajax2',
            url: url
        })
    },
    onSpecialkey: function (field, e) {
        if (e.getKey() == Ext.EventObject.ENTER) {
            var value = this.lookup('searchText').getValue(),
                gridStore = this.getView().getStore();
            if (value == '') {
                this.reloadStore();
            } else {
                var url = '/rest/entries?query=example&resource.resTitle=' + value;
                this.reloadGrid(url, gridStore);
            }
        }
    },
    //重置
    onReset: function () {
        var gridStore = this.getView().getStore(),
            url = '/rest/entries?query=example&entityStatus=Default';
        this.reloadGrid(url, gridStore);
        var search = this.lookup('searchText');
        search.setValue('');
    },
    //删除数据集
    onDelete: function (view, rowindex, colindex, btn, event, record, tr) {
        var me = this;
        Ext.Msg.confirm('提示', '确定删除？', function (btn, text) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: '/rest/entries/' + record.get('id'),
                    method: 'DELETE',
                    success: function (rs) {
                        Ext.toast('删除成功,刷新列表');
                        me.getView().getStore().reload();
                    }
                })
            }
        })
    },

    //刷新
    onreset: function () {
        var search = this.lookup('searchText');
        search.setValue('');
        this.getView().getStore().reload({
            type: 'ajax2',
            url: '/rest/entries'
        })
    },
    //导入
    onFile: function () {
        this.open('fileupload', {
            width: 500,
            height: 365,
            gridView: this.getView(),
            title: '导入'
        });
    },
    fileUpload: function (field, value) {
        var form = this.getView(),
            win = orm.up('window');
        var store = form.up('window').gridView.getStore();
        form.submit({
            url: '/drdms/api/upload',
            waitMsg: '上传文件中',
            submitEmptyText: false,
            success: function (arg1, action) {
                Ext.toast('上传成功，刷新列表');
                store.reload();
                win.close();
            },
            failure: function (arg1, action) {
                Ext.toast('上传失败');
                win.close();
            }
        });
    },
    //生成接口
    onCreateJK: function (view, rowindex, colindex, btn, event, record, tr) {
        var id = record.get('id'),
            title = record.get('entityTitle');
        this.open({
            xtype: 'createjk'
        }, {
            title: '生成接口',
            width: 500,
            height: 300,
            needId: id,
            needTitle: title
        })
    },
});
