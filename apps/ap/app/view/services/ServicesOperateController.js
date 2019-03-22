Ext.define('AP.view.services.ServicesOperateController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.services-operate',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    //添加服务
    onAdd: function () {
        this.open({
            xtype: 'services-choose',
            gridView: this.getView()
        }, {
            width: 600,
            height: 500,
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
                    var select = me.callLookUp('select').getSelectionModel().getSelection(),
                        store = me.callLookUp('select').getStore();
                    for (var i = 0; i < select.length; i++) {
                        var index = store.indexOf(select[i]);
                        store.removeAt(index);
                        top._arrData.splice(index, 1);
                        var store = {
                            autoLoad: true,
                            data: ''
                        };
                        me.callLookUp('grid').setStore(store);
                        var qname = select[i].data.qname;
                        var _index = 0;
                        var _cList = [];
                        var _dList = [];
                        top._comboList.map(function (item, index) {
                            if (item.id != qname) {
                                _cList.push(item)
                                _dList.push(top._listData[index])
                            }
                        });
                        top._comboList = _cList;
                        top._listData = _dList;
                        var store = {
                            data: top._listData
                        };
                        me.setEditorStore()
                    }
                }
            }
        })
    },
    callLookUp: function (select) {
        return this.getView().lookup(select)
    },
    //清空列表
    onRefresh: function () {
        var me = this;
        me.callLookUp('select').setStore('');
        me.callLookUp('grid').setStore('');
    },

    onClick: function (view, record, a, index) {
        var me = this;
        var qname = record.data.qname;
        var length = top._arrData.length,
            jude = 1, index, data;
        for (var i = 0; i < length; i++) {
            if (top._arrData[i].hasOwnProperty(qname)) {
                index = i;
                if (top._arrData[i][qname].fields != null) {
                    jude = 0;
                }
            }
        }
        if (jude == 1) {
            Ext.Ajax.request({
                url: '/ap/api/services/' + qname + '/columns',
                success: function (rs) {
                    data = JSON.parse(rs.responseText);
                    for (var i = 0; i < data.length; i++) {
                        var addItem = qname + ':' + data[i].name;
                        data[i].qname = addItem;
                    }
                    top._arrData[index][qname].fields = data;
                    var store = {
                        autoLoad: true,
                        data: data,
                        bsQname: qname
                    };
                    me.callLookUp('grid').setStore(store);
                }
            });
        } else {
            var store = {
                autoLoad: true,
                data: top._arrData[index][qname].fields,
                bsQname: qname
            };
            me.callLookUp('grid').setStore(store);
        }

    },
    onEdit: function (a, index, c, d, e, record, g) {
        this.open({
            xtype: 'services-input',
            needRecord: record,

        }, {
            width: 500,
            height: 265,
            title: '输入脚本',
            recordIndex: index,
            gridView: this.getView()
        });
    },
    onChange: function (a, b, row, record, col, f) {
        var me = this;
        if (row == 5) {
            var bsQname = a.getStore().bsQname,
                data = a.getStore().data.items,
                jude = 1;
            if (record.data.hasOwnProperty('isRef')) {
                if (record.data.isRef == true) {
                    var newData = {
                        id: bsQname,
                        col: record.data.qname,
                        name: record.data.qname,
                        value: record.data.qname
                    };
                    var newList = {
                        name: record.data.qname,
                        value: record.data.qname
                    };
                    var _check = true;
                    top._comboList.map(function (item, index) {
                        if (item.id == bsQname && item.col == record.data.qname) {
                            _check = false
                        }
                    });
                    if (_check) {
                        top._comboList.push(newData);
                        top._listData.push(newList);
                    }
                }
                else {
                    var _index = 0;
                    top._comboList.map(function (item, index) {
                        if (item.id == bsQname && item.col == record.data.qname) {
                            _index = index
                        }
                    });
                    top._comboList.splice(_index, 1);
                    top._listData.splice(_index, 1);
                }
            }
            this.setEditorStore();
        }
    },

    resolveGridData: function (params, callback) {
        Ext.Ajax.request({
            url: '/ap/server/services/preview?thanks=true',
            jsonData: params,
            method: 'POST',
            success: function (rs) {
                var needData = JSON.parse(rs.responseText);
                if (needData != undefined) {
                    var fields = needData.metadata.items;
                    var columnsArr = [], columnsItem = {};
                    for (var i = 0; i < fields.length; i++) {
                        var items = fields[i];
                        columnsItem = {
                            dataIndex: items.alias,
                            text: items.title,
                            renderer: function (value) {
                                if (value == undefined) {
                                    value = '(空)'
                                }
                                return value;
                            }
                        };
                        columnsArr.push(columnsItem);
                    }
                }
                var obj = {
                    cols: columnsArr,
                    store: needData.result
                };
                callback(obj);
            }
        });

    },
    createGrid: function (rs) {
        var items = {
            xtype: 'services-view',
            columns: rs.cols,
            needRs: rs.store
        };
        return items
    },

    onView: function () {
        var me = this;
        if (top._needName == undefined) {
            top._needName = "";
        }
        if (top._arrData == undefined) {
            var msg = '未选择服务';
            me.extMsgAlert(msg, null);
        } else {
            var select = 0;
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
                if (turnK.length == 0) {
                    turnK = []
                }
                var arr = {
                    rawValue: Ext.JSON.encode(con),
                    refs: Ext.JSON.encode(turnK),
                    script: top._needName
                };
                console.log('提交的key：', turnK, '提交的数据：', arr);
                me.open({}, {
                    width: 800,
                    height: 500,
                    title: '数据预览',
                    listeners: {
                        render: function () {
                            var self = this;
                            me.resolveGridData(arr, function (result) {
                                var myLoad = new Ext.LoadMask({
                                    msg: '生成预览数据中...',
                                    target: self,
                                }).show();
                                setTimeout(function () {
                                    var ui = me.createGrid(result);
                                    self.add(ui);
                                    myLoad.hide();
                                }, 1000);
                            });
                        }
                    }
                });


            } else {
                var msg = '还有未操作的已选择的服务。';
                me.extMsgAlert(msg, null);
            }
        }

    },
    setEditorStore: function () {
        var editor = {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            store: {
                data: top._listData
            },
            displayField: 'name',
            valueField: 'value',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value'
        };
        this.getView().lookup('grid').columns[6].setEditor(editor);
    },
    onSave: function (a, b, c, d, e, f) {
        var me = this;
        var index = a.up('window').recordIndex,
            store = a.up('window').gridView.lookup('grid').getStore().data.items[index].data,
            form = a.up('services-input').down('textarea').getValue();
        var arr = {
            expression: form
        };
        store = Object.assign(store, arr);
        a.up('window').close();
    },
    onCancel: function (a) {
        a.up('window').close();
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
    onRenderInput: function (view, event) {
        if (view.needRecord) {
            if (view.needRecord.get('expression')) {
                view.getViewModel().set('input', view.needRecord.get('expression'))
            }
        }
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = field.up('services-grid');
            var store = field.up('services-grid').getStore(),
                filters = store.getFilters(),
                filterField = me.lookup('searchText');


            if (filterField.value) {//有输入值,添加filter
                this.nameFilter = filters.add({
                    property: 'title',//通过title属性过滤
                    value: filterField.value,//值为搜索框输入的值
                    anyMatch: true,//模糊匹配
                    caseSensitive: false
                });
                top._filter = this.nameFilter;
            } else if (this.nameFilter) {//未输入，则移除filter
                filters.remove(this.nameFilter);
                this.nameFilter = null;
                top._filter = null;
            }

        }
    },
})
;
