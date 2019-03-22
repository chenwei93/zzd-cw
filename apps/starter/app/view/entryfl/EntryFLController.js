Ext.define('Starter.view.entryfl.EntryFLController', {
    extend: 'Starter.base.ViewController',
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
        var win = this.getView().up('window'),
            gridView = win.gridView,
            grid = gridView.getSelectionModel(),
            gridList = grid.getSelection(),
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
            Ext.toast('当前未选择目录,不能进行操作');
        } else {
            if (turnCodes(catalogGb) == null && turnCodes(catalogSs) == null && turnCodes(catalogHy) == null) {
                Ext.toast('当前未选择目录,不能进行操作');
            } else {
                var pa = {
                    catalogGB: turnCodes(catalogGb),
                    catalogSS: turnCodes(catalogSs),
                    catalogHY: turnCodes(catalogHy)
                };
                Ext.MessageBox.confirm('提示', '确定将选择的分类添加到指定的目录中', function (chooce) {
                    if (chooce == 'yes') {
                        Ext.Ajax.request({
                            url: '/portal/entryX/' + turnIds(gridList) + '/catalogs',
                            params: pa,
                            method: 'POST',
                            success: function (rs) {
                                if (rs.responseText == "true") {
                                    Ext.toast('保存成功');
                                    grid.deselectAll(true);
                                    deselectAll([0, 1, 2]);
                                    var win = me.getView().up('window');
                                    win.close();
                                }
                            }
                        });
                    }

                })
            }
        }
    },

    onNo: function (button) {
        Ext.MessageBox.confirm('提示','确定关闭？', function (chooce) {
            if (chooce == 'yes') {
                button.up('window').close();
            }
        });
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
    //选择部门刷新列表
    onSelect: function (picker, record, eOpts) {
        var value = record.data.id;
        var store = this.getView().getStore(),
            url = '/rest/fullEntryData?query&departments=' + value;
        this.reloadGrid(url, store);
    },

    //根绝条件刷新当前grid
    reloadGrid: function (url, store) {
        store.reload({
            type: 'ajax2',
            url: url
        })
    },
    onSaveAdd: function (btn) {
        var me = this;
        Ext.MessageBox.confirm('提示', '确定新增？', function (chooce) {
            if (chooce == 'yes') {
                var win = me.getView().up('window');
                var store = me.getView().up('window').gridView.getStore();
                var value = btn.up('form').getForm().getValues();
                var code = value.code,
                    title = value.text;
                var parentCode;
                var selection = me.getView().up('window').gridView.getSelectionModel().getSelection().length;
                if (selection == 0) {
                    var firstCode = store.data.items[0].data.code;
                    if (firstCode == 'A00') {
                        parentCode = 'CatalogHY'
                    } else if (firstCode == 'ZA') {
                        parentCode = 'CatalogGB'
                    } else if (firstCode == 'XXY') {
                        parentCode = 'CatalogSS'
                    }
                } else {
                    var _code = me.getView().up('window').gridView.getSelectionModel().getSelection()[0].data.code;
                    parentCode = _code;
                }
                Ext.Ajax.request({
                    url: encodeURI('/base/api/addcode?parentCode=' + parentCode + '&code=' + code + '&title=' + title),
                    success: function (rs) {
                        store.reload();
                        win.close();
                    }
                });

            }
        });
    },
    onCancelAdd: function () {
        var win = this.getView().up('window');
        win.close();
    },
})
;
