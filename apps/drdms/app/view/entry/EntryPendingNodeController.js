Ext.define('DRDMS.view.entry.EntryPendingNodeController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entry-pendingnode',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onApproved: function () {

    },
    onShow: function (view, record, index, tr, td) {
        var id = record.id;
        this.open({
            xtype: 'entry-view',
            entityId: id,
        }, {
            title: '待处理数据详情',
            width: 800,
            height: 612,
        });
    },
    onEdit: function (view, record, index, tr, td) {
        // debugger;
        var id = td.record.id;
        this.open({
            xtype: 'entry-edit',
            entityId: id,
        }, {
            title: '待处理数据详情',
            width: 1100,
            height: 664,
            gridView: this.getView()

        });
    },
    onQuery: function () {

    },
    onDelete: function () {

    },
    //根据搜索标题刷新当前grid
    reloadGrid: function (url, store) {
        store.reload({
            type: 'ajax2',
            url: url
        })
    },
    //根据标题进行搜索
    onSpecialkey: function (field, e) {
        var url;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var value = this.lookup('searchText').getValue();
            var gridStore = this.getView().getStore();
            if (value == '') {
                url = '/drdms/api/entries?query=example&biz.currentState=Generated';
                this.reloadGrid(url, gridStore);
            } else {
                url = '/drdms/api/entries?query=example&resource.resTitle=' + value;
                this.reloadGrid(url, gridStore);
            }
        }
    },
    onRestNode: function () {
        var url = '/drdms/api/entries?query=example&biz.currentState=Generated',
            gridStore = this.getView().getStore();
        this.reloadGrid(url, gridStore);
    },
    //弹出提示框
    toMsgAlert: function (msg, url) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: url,
                        success: function (rs) {
                            me.reloadStore();
                            me.getView().getSelectionModel().deselectAll(true);
                        }
                    })
                }
            }
        })
    },
    onDeal: function () {
        console.log();
        var me = this,
            msg, url;
        var gridLength = this.getView().getStore().data.length;
        if (gridLength == 0) {
            Ext.Msg.alert({
                title: '提示',
                msg: '当前没有需要处理的数据。',
                buttonText: {yes: '确定'}
            })
        } else {
            var selection = this.getView().getSelectionModel().getSelection();
            var length = selection.length;
            if (length > 0) {
                var status = selection[length - 1].data.biz.currentState, _id;
                if (status == 'UnPublished') {
                    status = 'Publish'
                } else if (status == 'UnSubmitted') {
                    status = 'Submit'
                } else {
                    status = 'Confirm'
                }
                if (length != 0) {
                    _id = selection[0].id;
                    for (var i = 1; i < length; i++) {
                        _id += ',' + selection[i].id
                    }
                }
            }
            if (length != 0) {
                msg = '确定批量处理' + length + '条目录吗？';
                url = '/drdms/api/process?action=' + status + '&ids=' + _id;
                me.toMsgAlert(msg, url);
            } else {
                msg = '确定全部批量处理吗？';
                url = '/drdms/api/process?action=' + status;
                me.toMsgAlert(msg, url);
            }
        }
    }
});