Ext.define('DRDMS.view.home.HomeNodeController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.homenode',


    initViewModel: function (vm) {
        vm.getStore('rejected').loadPage(1);
        vm.getStore('generated').loadPage(1);
    },

    //获取选中的行数以及选中行的id
    selectionChange: function (selection) {
        // debugger;
        var _length = selection.length;
        if (_length > 0) {
            var message = selection[_length - 1].id;
            var _id;
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
            ids: _id,
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
    toMsgAlert: function (msg, url, type1, type2, reference, method) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        method: method,
                        url: url,
                        success: function (rs) {
                            top._len = 0;
                            me.reloadGrid(type1, reference);
                            me.reloadGrid(type2, reference);
                        },
                        failure: function (rs) {
                        }
                    })
                }
            }
        })

    }
    ,
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
    }
    ,
    onShow1: function (view, record, tr, index) {
        var id = record.data.source.id;
        this.open({
            xtype: 'entry-view',
            entityId: id,
        }, {
            title: '变更目录详情',
            width: 800,
            height: 612,
        });
    }
    ,
    onDealcreate: function () {
        var me = this;
        var msg, url, type1, type2, reference;
        var grid = this.getView().lookup('crategrid'),
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
                msg = '确定全部提交吗？';
                url = ' /drdms/api/changes/' + id;
                type1 = 'rejected';
                type2 = 'generated';
                reference = null;
                me.toMsgAlert(msg, url, type1, type2, reference, 'POST');
            } else {
                msg = '确定提交已选择的' + needData.length + '条目录吗？';
                url = ' /drdms/api/changes/' + needData.ids;
                type1 = 'rejected';
                type2 = 'generated';
                reference = 'tocreate';
                me.toMsgAlert(msg, url, type1, type2, reference, 'POST');
            }
        }

    },


    onDealpublish: function () {
        var me = this,
            msg, url, type1, type2, reference;
        var grid = this.getView().lookup('generatedgrid'),
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
                msg = '确定全部提交吗？';
                url = '/drdms/api/process?action=Confirm';
                type1 = null;
                type2 = 'generated';
                reference = null;
                me.toMsgAlert(msg, url, type1, type2, reference, 'GET');
            } else {
                msg = '确定提交已选择的' + needData.length + '条目录吗？';
                url = '/drdms/api/process?action=Confirm&ids=' + needData.ids;
                type1 = null;
                type2 = 'generated';
                reference = 'topublish';
                me.toMsgAlert(msg, url, type1, type2, reference, 'GET');
            }
        }

// TODO - Add control logic or remove is not needed
    }
})
;