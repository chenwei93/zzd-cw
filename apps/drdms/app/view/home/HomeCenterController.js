Ext.define('DRDMS.view.home.HomeCenterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homecenter',

    initViewModel: function (vm) {
        vm.getStore('unpublished').loadPage(1);
        vm.getStore('unapproved').loadPage(1);
        // vm.getStore('unpublished').loadPage(1);
    },

    selectionChange: function (selection) {
        var _length = selection.length;
        if (_length > 0) {
            var message = selection[_length - 1].id;
            var status = selection[_length - 1].data.biz.currentState;
            var _id;
            if (status == 'UnPublished') {
                status = 'Publish'
            } else if (status == 'UnApproved') {
                status = 'Approve'
            } else if (status == 'Rejected') {
                status = 'Reject'
            } else {
                status = 'Confirm'
            }
            if (_length == 0) {
                _id = message;
            } else {
                var _m = selection[0].id;
                _id = _m;
                for (var i = 1; i < _length; i++) {
                    message = selection[i].id;
                    _id += ',' + message
                }
            }
        }
        var obj = {
            ids: _id || null,
            status: status || null,
            length: _length
        };
        return obj;
    },
    //刷新grid如有选中则消除选中状态
    reloadGrid: function (type, reference) {
        if (type != null) {
            var defaultStore = type;
            this.getViewModel().getStore(defaultStore).reload();
            if (reference != null) {
                var toReference = this.lookup(reference).down('grid');
                toReference.getSelectionModel().deselectAll(true);
            }
        }
    },
    //弹出提示框
    toMsgAlert: function (msg, url, type1, type2, reference) {
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
                            top._len = 0;
                            me.reloadGrid(type1, reference);
                            me.reloadGrid(type2, null);
                        },
                        failure: function (rs) {
                        }
                    })
                }
            }
        })
    },
    onShow: function (view, record, index, tr, td) {
        var id = record.id;
        Ext.create({
            xtype: 'window',
            title: '数据详情',
            width: 800,
            height: 612,
            items: [{
                xtype: 'entry-view',
                entityId: id
            }]
        }).show();
    },
    onDeal: function () {
        var me = this,
            msg, url, type1, type2, reference;
        var grid = this.getView().lookup('todogrid'),
            gridLength = grid.getStore().data.length,
            selection = grid.getSelectionModel().getSelection();
        var needData = me.selectionChange(selection);
        if (gridLength == 0) {
            Ext.Msg.alert({
                title: '提示',
                msg: '当前没有可操作的数据。',
                buttonText: {yes: '确定'}
            })
        } else {
            if (needData.length == 0) {
                msg = '确定全部批量处理吗';
                url = '/drdms/api/process?action=Approve';
                type1 = 'unapproved';
                type2 = 'unpublished';
                reference = null;
                me.toMsgAlert(msg, url, type1, type2, reference);
            } else {
                msg = '确定批量处理' + needData.length + '条目录吗';
                url = '/drdms/api/process?action=' + needData.status + '&ids=' + needData.ids;
                type1 = 'unapproved';
                type2 = 'unpublished';
                reference = 'todo';
                me.toMsgAlert(msg, url, type1, type2, reference);
            }
        }

    },

    onDealtoup: function () {
        var me = this,
            msg, url, type1, type2, reference;
        var grid = this.getView().lookup('toupgrid'),
            gridLength = grid.getStore().data.length,
            selection = grid.getSelectionModel().getSelection();
        var needData = me.selectionChange(selection);
        if (gridLength == 0) {
            Ext.Msg.alert({
                title: '提示',
                msg: '当前没有可操作的数据。',
                buttonText: {yes: '确定'}
            })
        } else {
            if (needData.length == 0) {
                msg = '确定全部批量处理吗';
                url = '/drdms/api/process?action=Publish';
                type1 = null;
                type2 = 'unpublished';
                reference = null;
                me.toMsgAlert(msg, url, type1, type2, reference);
            } else {
                msg = '确定批量处理' + needData.length + '条目录吗';
                url = '/drdms/api/process?action=' + needData.status + '&ids=' + needData.ids;
                type1 = null;
                type2 = 'unpublished';
                reference = 'todo';
                me.toMsgAlert(msg, url, type1, type2, reference);
            }
        }
    },
});