Ext.define('Cmdb.view.asset.zcwh.entry.EntryFLController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.entry-fl',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },


    onChoose: function () {
        this.open({
            xtype: 'entryfl-choose'
        }, {
            width: 828,
            height: 590,
            scrollable: true,
            pack: 'center',
            // align: 'center',
            title: '指定分类',
            gridView: this.getView()
        })
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

    //指定分类
    onOK: function () {
        var me = this;
        var gridList = this.getView().up('window').gridView.getSelectionModel().getSelection(),
            grid = this.getView().up('window').gridView.getSelectionModel(),
            panel = this.getView().up('entryfl-choose'),
            catalogGb = panel.items.items[0].items.items[0].getView().getSelectionModel().getSelection(),
            catalogSs = panel.items.items[1].items.items[0].getView().getSelectionModel().getSelection(),
            catalogHy = panel.items.items[2].items.items[0].getView().getSelectionModel().getSelection();
        var turnIds = function (selection) {
            var ids;
            for (var i = 0; i < selection.length; i++) {
                if (i == 0) {
                    ids = selection[0].data.id;
                } else {
                    ids += ',' + selection[i].data.id;
                }
            }
            if (ids == undefined) {
                return null
            }
            return ids
        };
        var turnCodes = function (selection) {
            var ids;
            for (var i = 0; i < selection.length; i++) {
                if (i == 0) {
                    ids = selection[0].data.code;
                } else {
                    ids += ',' + selection[i].data.code;
                }
            }
            if (ids == undefined) {
                return null
            }
            return ids
        };
        var deselectAll = function (index) {
            for (var i = 0; i < index.length; i++) {
                panel.items.items[i].items.items[0].getView().getSelectionModel().deselectAll(true);
            }
        };
        if (turnIds(gridList) == null) {
            var msg = '当前未选择目录。',
                obj = {yes: '确定'};
            me.msgAlert(msg, obj, null);
        } else {
            if (turnCodes(catalogGb) == null && turnCodes(catalogSs) == null && turnCodes(catalogHy) == null) {
                var msg = '当前未选择分类。',
                    obj = {yes: '确定'};
                me.msgAlert(msg, obj, null);
            } else {
                var pa = {
                    catalogGB: turnCodes(catalogGb),
                    catalogSS: turnCodes(catalogSs),
                    catalogHY: turnCodes(catalogHy)
                };
                var msg = "确定将选择的分类添加到指定的目录中？",
                    obj = {yes: '确定', no: '取消'},
                    fn = function () {
                        Ext.Ajax.request({
                            url: '/drdms/api/entry/' + turnIds(gridList) + '/catalogs',
                            params: pa,
                            method: 'POST',
                            success: function (rs) {
                                if (rs.responseText == "true") {
                                    var message = "保存成功。",
                                        object = {yes: '确定'},
                                        todo = function () {
                                            grid.deselectAll(true);
                                            deselectAll([0, 1, 2]);
                                            var win = me.getView().up('window');
                                            win.close();
                                        };
                                    me.msgAlert(message, object, todo);
                                }
                            }
                        });
                    };
                me.msgAlert(msg, obj, fn);
            }

        }
    },

    onNo: function (button) {
        var msg = '确定关闭？',
            obj = {yes: '确定', no: '取消'},
            fn = function () {
                button.up('window').close();
            };
        this.msgAlert(msg, obj, fn);
    },
    onCreate: function () {
        Ext.create({
            xtype: 'window',
            width: 600,
            title: '新增分类',
            items: [{
                xtype: 'catalog-add'
            }],
            gridView: this.getView()
        }).show();
    },
//刷新按钮
    onRest: function () {
        var url = '/drdms/api/entries',
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
                url = '/drdms/api/entries?query=example&resource.resTitle=' + value;
                this.reloadGrid(url, gridStore);
            }
        }
    },

//选择部门刷新列表
    onSelect: function (picker, record, eOpts) {
        var value = record.data.id;
        var store = this.getView().getStore(),
            url = '/drdms/api/entries?query&departments=' + value;
        this.reloadGrid(url, store);
    },

//根绝条件刷新当前grid
    reloadGrid: function (url, store) {
        store.reload({
            type: 'ajax2',
            url: url
        })
    },

    msgAlert: function (msg, obj, fn) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: obj,
            fn: function (btn, text) {
                if (btn == 'yes') {
                    if (fn != null) {
                        fn();
                    }
                }
            }
        })
    }
})
;