Ext.define('AP.view.services.ServicesAddViewController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.services-addview',
    onRefresh: function () {
        var me = this,
            gridView = this.lookup('grid'),
            formView = this.lookup('form');
        var id = me.getView().up('services').needId;
        if (gridView.getStore().data.length == 0) {
            Ext.Ajax.request({
                url: '/ap/server/script',
                method: 'POST',
                success: function (rs) {
                    var name = rs.responseText;
                    top._needName = name;
                    var store = {
                        autoLoad: true,
                        proxy: {
                            type: 'ajax',
                            url: '/ap/server/script/' + name + '/api'
                        }
                    };
                    gridView.setStore(store);
                    Ext.Ajax.request({
                        url: '/ap/server/script/' + name + '/',
                        success: function (rs) {
                            formView.items.items[0].setValue(rs.responseText);
                        }
                    })
                }
            });
        } else {
            var store = {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/ap/server/script/' + top._needName + '/api'
                }
            };
            gridView.setStore(store);
            Ext.Ajax.request({
                url: '/ap/server/script/' + top._needName + '/',
                success: function (rs) {
                    formView.items.items[0].setValue(rs.responseText);
                }
            })
        }

    },
    onSave: function () {
        var me = this,
            formView = me.lookup('form'),
            jude = formView.getForm().getValues(),
            dirty = formView.getForm().isDirty();
        if (top._needName == undefined) {
            var msg = '当前未生成源码',
                fn = null;
        } else {
            if (jude.code == "") {
                var msg = '当前无数据',
                    fn = null;
                me.extMsgAlert(msg, fn);
            } else {
                if (dirty == true) {
                    var arr = formView.items.items[0].getValue();
                    Ext.Ajax.request({
                        url: '/ap/server/script/' + top._needName + '/',
                        headers: {'Content-Type': "text/plain"},
                        params: arr,
                        method: 'PUT',
                        success: function (rs) {
                            Ext.toast('保存成功');
                        }
                    })

                } else {
                    var msg = '当前数据未修改',
                        fn = null;
                    me.extMsgAlert(msg, fn);
                }
            }
        }
    },
    onUpload: function () {
        this.open('fileupload', {
            width: 500,
            height: 190,
            title: '上传'
        });
    },
    onDownload: function () {

    },
    onCellClick: function (view, td, index, record, tr) {
        var data = record.data.title;
    },
    extMsgAlert: function (msg, fn) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    if (fn != null) {
                        fn()
                    }
                }
            }
        })
    },
    fileUpload: function (field, value) {
        var me = this;
        var form = this.getView();
        form.submit({
            url: '/raw/upload/',
            waitMsg: '上传文件中',
            submitEmptyText: false,
            success: function (arg1, action) {
                Ext.toast('上传成功');
                form.up('window').close();
            },
            failure: function (arg1, action) {
                Ext.toast('上传失败:' + '<b>' + action.result.msg + '</b>');
                form.up('window').close();
            }
        });
    }
});