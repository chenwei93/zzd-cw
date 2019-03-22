Ext.define('AP.view.application.ApplicationAddController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.application-add',

    onAddService: function () {
        this.open({
            xtype: 'application-choose',
            gridView: this.getView()
        }, {
            width: 500,
            height: 300,
            title: '选择服务'
        });
    },
// 删除所选行
    onDelete: function () {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var select = me.getView().lookup('service').getSelectionModel().getSelection(),
                        store = me.getView().lookup('service').getStore();
                    for (var i = 0; i < select.length; i++) {
                        var index = store.indexOf(select[i]);
                        store.removeAt(index);
                    }
                }
            }
        })
    },
    //清空列表
    onRefresh: function () {
        var me = this;
        me.getView().lookup('service').setStore('');
    },
    onSave: function () {
        var me = this;
        var formValue = this.getView().lookup('base').getForm().getValues(),
            gridStore = this.getView().lookup('service').getStore().data.items,
            gridData = [],
            formTitle = formValue.title,
            formName = formValue.name,
            formQualified = formValue.qualified;
        if (formTitle == "" || formName == "" || formQualified == "") {
            var msg = '标题、标识名和组名不可为空。',
                obj = {yes: '确定'};
            me.extMsgAlert(msg, obj, null);
        }else{
            if (gridStore.length == 0) {
                var msg = '至少选择一个服务。',
                    object = {
                        yes: '确定'
                    };
                me.extMsgAlert(msg, object, null);
            } else {
                for (var i = 0; i < gridStore.length; i++) {
                    gridData.push(gridStore[i].data.idRel)
                }
                var ser = {
                    service: gridStore[0].data.idRel
                };
                var arr, arrAl = [];
                var itemsQuery = this.getView().lookup('addview').items.items;
                for (var i = 0; i < itemsQuery.length; i++) {
                    var item = itemsQuery[i].items.items[0];
                    if (item.hasOwnProperty('needId')) {
                        var jude = 1;
                        var name = 'views',
                            data = item.needId;
                        arr = name + '/' + data;
                        arrAl.push(arr);
                    } else {
                        jude = 0;
                    }
                }
                var record = me.getView().record;
                if (record != undefined) {
                    jude = 1;
                }
                if (jude == 1) {
                    var gridArr = {
                        services: gridData,
                        views: arrAl
                    };
                    var value = this.getView().lookup('base').getForm().getValues();
                    var arrAll = Object.assign(ser, gridArr, value);
                    if (record != undefined) {
                        var msg = '确定修改？',
                            object = {
                                yes: '确定',
                                no: '取消'
                            },
                            fn = function () {
                                var id = record.data.id;
                                var gridView = me.getView().gridView;
                                me.extAjaxSave(id, arrAll, gridView)
                            };
                        me.extMsgAlert(msg, object, fn);
                    } else {
                        var msg = '确定保存？',
                            obj = {yes: '确定', no: '取消'},
                            fun = function () {
                                Ext.Ajax.request({
                                    url: '/ap/api/applications',
                                    jsonData: arrAll,
                                    dataType: 'json',
                                    method: 'POST',
                                    success: function () {
                                        var msg = '保存成功',
                                            fn = function () {
                                                location.reload();
                                            },
                                            object = {yes: '确定'};
                                        me.extMsgAlert(msg, object, fn);
                                    }
                                })
                            };
                        me.extMsgAlert(msg, obj, fun);
                    }
                } else {
                    var msg = '还有未生成的视图',
                        object = {yes: '确定'};
                    this.extMsgAlert(msg, object, null)
                }
            }
        }
    },
    extAjaxSave: function (id, data, gridView) {
        var me = this;
        Ext.Ajax.request({
            url: '/ap/api/applications/' + id,
            jsonData: data,
            dataType: 'json',
            method: 'PUT',
            success: function () {
                var msg = '修改成功',
                    object = {yes: '确定'},
                    fn = function () {
                        gridView.getStore().reload();
                        me.getView().up('window').close();
                    };
                me.extMsgAlert(msg, object, fn);
            }
        })
    },
    extMsgAlert: function (msg, object, fn) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: object,
            fn: function (btn, text) {
                if (btn == 'yes') {
                    if (fn != null) {
                        fn()
                    }
                }
            }
        })
    },
    onCancel: function () {
        if (this.getView().up('window') != undefined) {
            this.getView().up('window').close()
        } else {
            location.reload();
        }
    },
    onFocus: function (view, event, eOpts) {
        var inputTitle = view.up('appadd-base').items.items[0].items.items[0].getValue(),
            serviceName = view.getValue();
        if (inputTitle != '') {
            if (serviceName == '') {
                Ext.Ajax.request({
                    url: '/base/api/pinyin/' + encodeURIComponent(inputTitle),
                    success: function (rs) {
                        rs.responseText = rs.responseText.replace(/\"/g, "");
                        view.setValue(rs.responseText);
                    }
                })
            }
        }
    },
});