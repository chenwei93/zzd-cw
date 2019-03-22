Ext.define('AP.view.services.ServicesController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.services',

    callLookUp: function (data) {
        return this.getView().lookup(data)
    },
    onRenew: function () {
        var me = this;
        var showGrid = me.callLookUp('show'),
            storeGrid = me.callLookUp('operate').lookup('grid');
        var store = storeGrid.getStore().data.items;
        var columns = [], totalData = [];
        for (var i = 0; i < store.length; i++) {
            var data = store[i].data;
            if (data.hasOwnProperty('xs')) {
                if (data.xs == true) {
                    var columnsItems = {
                        text: data.name,
                        flex: 1,
                        reference: data.code,
                        dataIndex: data.name
                    };
                    columns.push(columnsItems);
                }
            }
        }
        var showStore = {
            autoLoad: true,
            data: [{}]
        };
        showGrid.setColumns(columns);
        showGrid.setStore(showStore);

    },
    onSee: function () {
        console.log('预览');
    },
    onCelldbclick: function (a, b, c, d, e, f, h) {
        this.open({
            xtype: 'services-input'
        }, {
            width: 500,
            height: 265,
            title: '输入脚本'
        });
    },
    onFocus: function (view, event, eOpts) {
        var inputTitle = view.up('services-base').lookup('inputTitle').getValue(),
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
    onSave: function () {
        var me = this;
        var id = me.getView().needId;
        var select = 0,
            formdata = me.getView().lookup('serbase').getForm().getValues(),
            formTitle = formdata.title,
            formName = formdata.name,
            formQualified = formdata.qualified;
        var sqlcustomize = this.lookup('sqlcustomize').getValue();
        // console.log(this.lookup('sqlcustomize').getValue());
        if (formTitle == "" || formName == "" || formQualified == "") {
            var msg = '标题、标识名和组名不可为空。',
                obj = {yes: '确定'};
            me.saveSucess(msg, obj, null);
        } else {
            if (top._arrData != undefined || top._arrData != null) {
                for (var i = 0; i < top._arrData.length; i++) {
                    var name = Object.keys(top._arrData[i])[0];
                    if (top._arrData[i][name].fields == null) {
                        select = 1
                    }
                }
                if (select == 0) {
                    var turnK = [], con = [];
                    for (var i = 0; i < top._arrData.length; i++) {
                        var name = Object.keys(top._arrData[i])[0];
                        var fields = top._arrData[i][name].fields;
                        con.push(top._arrData[i][name]);
                        for (var j = 0; j < fields.length; j++) {
                            if (fields[j].hasOwnProperty('refs')) {
                                if (fields[j].refs != null) {
                                    var key = 'eq(' + fields[j].qname + ',' + fields[j].refs + ')';
                                    turnK.push(key);
                                }
                            }
                        }
                    }

                    if (top._needName == undefined) {
                        top._needName = ""
                    }
                    if (id != undefined) {
                        if (top._record.function == null) {
                            var arr = {
                                configuration: {
                                    _class: 'dcsp.fl.configuration.ContentConfiguration',
                                    rawValue: Ext.JSON.encode(con),
                                    attributes: {
                                        refs: Ext.JSON.encode(turnK),
                                        delegateClassName: top._needName,
                                        delegateSql: sqlcustomize
                                    }
                                }
                            };
                        } else {
                            var arr = {
                                configuration: {
                                    _class: 'dcsp.fl.configuration.ContentConfiguration',
                                    rawValue: Ext.JSON.encode(con),
                                    attributes: {
                                        refs: Ext.JSON.encode(turnK),
                                        delegateSql: sqlcustomize
                                    }
                                },
                                function: top._record.function.idRel
                            };
                        }
                        console.log('提交的数据：', arr, 'rowValue:', con);
                        var msg = '确定修改？',
                            needObj = {yes: '确定', no: '取消'};
                        var fn = function () {
                            me.getView().lookup('serbase').getForm().submit({
                                url: '/ap/api/services/' + id,
                                method: 'PUT',
                                jsonSubmit: true,
                                params: arr,
                                success: function () {
                                    var message = '修改成功',
                                        object = {yes: '确定'};
                                    var fun = function () {
                                        me.getView().gridView.getStore().reload();
                                        me.getView().up('window').close();
                                    };
                                    me.saveSucess(message, object, fun);
                                },
                                failure: function () {
                                    var message = '修改成功',
                                        obj = {yes: '确定'};
                                    var fun = function () {
                                        me.getView().gridView.getStore().reload();
                                        me.getView().up('window').close();
                                    };
                                    me.saveSucess(message, obj, fun);
                                }
                            })
                        };
                        me.saveSucess(msg, needObj, fn)
                    } else {
                        var arr = {
                            configuration: {
                                _class: 'dcsp.fl.configuration.ContentConfiguration',
                                rawValue: Ext.JSON.encode(con),
                                attributes: {
                                    refs: Ext.JSON.encode(turnK),
                                    delegateClassName: top._needName,
                                    delegateSql: sqlcustomize
                                }
                            }
                        };
                        console.log('提交的key：', turnK, '提交的数据：', arr);
                        var message = '确定保存？',
                            needObj = {yes: '确定', no: '取消'},
                            fn = function () {
                                me.getView().lookup('serbase').getForm().submit({
                                    url: '/ap/api/services',
                                    url1: '/aa',
                                    jsonSubmit: true,
                                    params: arr,
                                    success: function (form, action) {
                                        var msg = '保存成功',
                                            obj = {yes: '确定'},
                                            fn = function () {
                                                location.reload();
                                            };
                                        me.saveSucess(msg, obj, fn);
                                    },
                                    failure: function (form, action) {
                                        var msg = '保存成功',
                                            obj = {yes: '确定'},
                                            fn = function () {
                                                location.reload();
                                            };
                                        me.saveSucess(msg, obj, fn);
                                    }
                                });
                            };
                        me.saveSucess(message, needObj, fn);
                    }
                } else {
                    var msg = '还有未操作的已选择的服务。',
                        obj = {yes: '确定'};
                    me.saveSucess(msg, obj, null);
                }
            } else {
                var msg = '当前未选择服务。',
                    obj = {yes: '确定'};
                me.saveSucess(msg, obj, null);
            }
        }
    },
    onCancel: function () {
        var me = this;
        if (me.getView().up('window') != undefined) {
            me.getView().up('window').close();
        } else {
            location.reload();
        }
    },
    saveSucess: function (msg, object, fn) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: object,
            fn: function (btn, text) {
                if (btn == 'yes') {
                    if (fn != null) {
                        fn();
                    }
                }

            }
        })
    },
    onTabViewRender: function (view) {
        var sqlcustomize = this.lookup('sqlcustomize');
        setTimeout(function () {
            if (view.up('window') != undefined) {
                if (top._record != undefined) {
                    var re = top._record;
                    if (re.configuration) {
                        if (re.configuration.attributes.delegateSql) {
                            console.log(sqlcustomize,re.configuration.attributes.delegateSql);
                            sqlcustomize.setValue(re.configuration.attributes.delegateSql);
                        }
                    }
                }
            }
        }, 1000)
    }
});