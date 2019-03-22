Ext.define('DA.view.dataservice.entry.EntryPendingCenterController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.entry-pendingcenter',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },


    onApproved: function () {

    },
    onShow: function (view, record, index, tr, td) {
        var id = record.id;
        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '待处理数据详情',
            width: 800,
            height: 612

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
                            top._length = 0;
                            me.reloadStore();
                            me.getView().getSelectionModel().deselectAll(true);
                        },
                        failure: function (rs) {
                        }
                    })
                }
            }
        })
    },
    onDeal: function () {
        var me = this, msg, url;
        var selection = this.getView().getSelectionModel().getSelection();
        var length = selection.length;
        if (length > 0) {
            var status = selection[length - 1].data.biz.currentState, _id;
            if (status == 'UnPublished') {
                status = 'Publish'
            } else if (status == 'UnApproved') {
                status = 'Approve'
            } else if (status == 'Rejected') {
                status = 'Reject'
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
            Ext.Msg.alert({
                title: '提示',
                msg: '当前没有选中的数据。',
                buttonText: {yes: '确定'}
            })
        }
    },
    //刷新按钮
    onRest: function () {
        var url = '/drdms/api/entries?query&biz.currentState=UnApproved,UnPublished',
            store = this.getView().getStore();
        this.reloadGrid(url, store);
    },
    onSpecialkey: function (field, e) {
        if (e.getKey() == Ext.EventObject.ENTER) {
            var value = this.lookup('searchText').getValue(),
                gridStore = this.getView().getStore();
            if (value == '') {
                this.reloadStore();
            } else {
                var url = '/drdms/api/entries?query=example&biz.currentState=UnApproved,UnPublished&resource.resTitle=' + value;
                this.reloadGrid(url, gridStore);
            }
        }
    },
    //combo查看不用状态下的待处理数据(UnApproved,UnPublish)
    onChange: function () {
        var val = this.lookup('comboState').getValue(),
            gridStore = this.getView().getStore();
        var url = '/drdms/api/entries?query=example&biz.currentState=' + val;
        this.reloadGrid(url, gridStore);
    },
    //根绝条件刷新当前grid
    reloadGrid: function (url, store) {
        store.reload({
            type: 'ajax2',
            url: url
        })
    }
});
