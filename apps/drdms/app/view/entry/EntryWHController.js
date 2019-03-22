Ext.define('DRDMS.view.entry.EntryWHController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entry-wh',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (view, record, index, tr, td) {
        var id = record.id;
        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '目录详情',
            width: 800,
            height: 612
        });
    },
    onShow1: function (view, record, index, tr, td) {
        var id = td.record.id;
        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '目录详情',
            width: 800,
            height: 612
        });
    },
    onEdit: function (view, record, index, tr, td) {
        // debugger;
        var id = td.record.id;
        this.open({
            xtype: 'entry-edit',
            entityId: id
        }, {
            title: '目录编辑',
            width: 1100,
            height: 664,
            gridView: this.getView()

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
                url = '/drdms/api/entries?query=example&resource.resTitle=' + value;
                this.reloadGrid(url, gridStore);
            }
        }
    },
    onReset: function () {
        var gridStore = this.getView().getStore(),
            url = '/drdms/api/entries';
        this.reloadGrid(url, gridStore);
        var search = this.lookup('searchText');
        search.setValue('');
    },
    onDelete: function (grid, rowindex) {
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
    onreset: function () {
        var search = this.lookup('searchText');
        search.setValue('');
        this.getView().getStore().reload({
            type: 'ajax2',
            url: '/drdms/api/entries'
        })
    },
    onFile: function () {
        this.open('fileupload', {
            width: 500,
            height: 365,
            gridView: this.getView(),
            title: '导入'
        });
    },
    fileUpload: function (field, value) {
        var me = this;
        var form = this.getView();
        var store = form.up('window').gridView.getStore();
        form.submit({
            url: '/drdms/api/upload',
            waitMsg: '上传文件中',
            submitEmptyText: false,
            success: function (arg1, action) {
                Ext.toast('上传成功，刷新列表');
                store.reload();
                form.up('window').close();
            },
            failure: function (arg1, action) {
                Ext.toast('上传失败');
                form.up('window').close();
            }
        });
    },


    // TODO - Add control logic or remove is not needed
});