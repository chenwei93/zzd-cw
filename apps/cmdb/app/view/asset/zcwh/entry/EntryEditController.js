Ext.define('Cmdb.view.asset.zcwh.entry.EntryEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.entry-edit',

    init: function (view) {

    },

    onSubmit: function () {
        var me = this;
        var entityId = me.getView().entityId;
        var panel = me.getView().items.items[0],
            base = panel.items.items[0],
            ext = panel.items.items[1],
            baseValue = base.getForm().getValues(),
            extValue = ext.getForm().getValues();
        var p = Object.assign(extValue, baseValue);
        var name = baseValue.resTitle;
        var store = panel.items.items[2].getStore().data.items;
        if (name != "") {
            var subMit = function (p) {
                if (entityId == undefined) {
                    Ext.Ajax.request({
                        url: '/drdms/api/entry',
                        method: 'POST',
                        params: p,
                        success: function (rs) {
                            var jude = JSON.parse(rs.responseText);
                            if (jude == true) {
                                Ext.Msg.alert({
                                    title: '提示',
                                    msg: '保存成功',
                                    buttonText: {yes: '确定', no: '取消'},
                                    fn: function (btn, text) {
                                        if (btn == 'yes') {
                                            location.reload();
                                        }
                                    }
                                });
                            } else {
                                Ext.Msg.alert({
                                    title: '提示',
                                    msg: '保存失败',
                                    buttonText: {yes: '确定', no: '取消'},
                                })
                            }
                        },
                        failure: function () {
                            Ext.Msg.alert({
                                title: '提示',
                                msg: '保存失败',
                                buttonText: {yes: '确定', no: '取消'}
                            })
                        }
                    });
                } else {
                    var griDStore = me.getView().up('window').gridView.getStore();
                    Ext.Ajax.request({
                        url: '/drdms/api/entry/' + entityId,
                        params: p,
                        method: 'POST',
                        success: function () {
                            Ext.Msg.alert({
                                title: '提示',
                                msg: '修改成功',
                                buttonText: {yes: '确定', no: '取消'},
                                fn: function (btn, text) {
                                    if (btn == 'yes') {
                                        griDStore.reload();
                                        me.getView().up('window').close();
                                    }
                                }
                            });
                        },
                        failure: function () {
                            Ext.Msg.alert({
                                title: '提示',
                                msg: '修改失败',
                                buttonText: {yes: '确定', no: '取消'},
                                fn: function (btn, text) {
                                    if (btn == 'yes') {
                                        griDStore.reload();
                                        me.getView().up('window').close();
                                    }
                                }
                            });
                        }
                    });
                }
            };
            if (store.length == 0) {
                p.datasetId = "";
                subMit(p)
            } else {
                if (top._id != undefined) {
                    p.datasetId = top._id;
                    subMit(p)
                } else {

                    for (var i = 0; i < store.length; i++) {
                        store[i] = store[i].data;
                        store[i]._class = 'dcsp.drdms.domain.dataset.Column';
                        if (store[i].dataType == "") {
                            store[i].dataType = 'Text';
                        }
                    }
                    var submitData = {
                        title: name,
                        fields: store
                    };
                    Ext.Ajax.request({
                        url: '/drdms/api/datasets',
                        method: 'POST',
                        jsonData: submitData,
                        success: function (rs) {
                            var id = JSON.parse(rs.responseText).id;
                            p.datasetId = id;
                            subMit(p);
                        }
                    });
                }

            }
        } else {
            Ext.Msg.alert({
                title: '提示',
                msg: '资源名称不可为空',
                buttonText: {yes: '确定', no: '取消'},
            })
        }
    },
    onRen: function (p, a, b) {
        var me = this;
        var Fl = p.config.reference;
        p.getEl().on('click', function (p) {
            //处理点击事件代码
            // debugger
            Ext.create({
                xtype: 'window',
                gridView: me.getView(),
                width: 800,
                height: 600,
                catalogF: Fl,
                title: '分类选择',
                scrollable: true,
                items: [{
                    xtype: 'entrycatalog'
                }]
            }).show()
        });
    },

    onNextClick: function (button) {
        //This is where you can handle any logic prior to moving to the next card
        var panel = button.up('panel');

        panel.getViewModel().set('atBeginning', false);

        this.navigate(button, panel, 'next');
    },

    onPreviousClick: function (button) {
        var panel = button.up('panel');

        panel.getViewModel().set('atEnd', false);

        this.navigate(button, panel, 'prev');
    },

    navigate: function (button, panel, direction) {
        var layout = panel.getLayout(),
            progress = this.lookupReference('progress'),
            model = panel.getViewModel(),
            progressItems = progress.items.items,
            item, i, activeItem, activeIndex;

        layout[direction]();

        activeItem = layout.getActiveItem();
        activeIndex = panel.items.indexOf(activeItem);

        for (i = 0; i < progressItems.length; i++) {
            item = progressItems[i];

            if (activeIndex === item.step) {
                item.setPressed(true);
            }
            else {
                item.setPressed(false);
            }

            // IE8 has an odd bug with handling font icons in pseudo elements;
            // it will render the icon once and not update it when something
            // like text color is changed via style addition or removal.
            // We have to force icon repaint by adding a style with forced empty
            // pseudo element content, (x-sync-repaint) and removing it back to work
            // around this issue.
            // See this: https://github.com/FortAwesome/Font-Awesome/issues/954
            // and this: https://github.com/twbs/bootstrap/issues/13863
            if (Ext.isIE8) {
                item.btnIconEl.syncRepaint();
            }
        }

        activeItem.focus();

        // beginning disables previous
        if (activeIndex === 0) {
            model.set('atBeginning', true);
        }

        // wizard is 4 steps. Disable next at end.
        if (activeIndex === 2) {
            model.set('atEnd', true);
        }
    },
    onSave: function () {
        var me = this;
    },
    onSaveGriddataset: function () {
        var name = this.getView().items.items[0].getValues().resTitle;
        var store = this.getView().items.items[2].getStore().data.items;
        for (var i = 0; i < store.length; i++) {
            store[i] = store[i].data;
            store[i]._class = 'dcsp.drdms.domain.dataset.Column';
            if (store[i].dataType == "") {
                store[i].dataType = 'Text';
            }
        }
        if(name == ""){
            Ext.Msg.alert({
                title: '提示',
                msg: '资源名称不可为空',
                buttonText: {yes: '确定', no: '取消'},
            })
        }else{
            var submitData = {
                title: name,
                fields: store
            };
            Ext.Ajax.request({
                url: '/drdms/api/datasets',
                method: 'POST',
                jsonData: submitData,
                success: function (rs) {
                    Ext.Msg.alert({
                        title: '提示',
                        msg: '保存成功',
                        buttonText: {yes: '确定', no: '取消'}
                    });
                    var id = JSON.parse(rs.responseText).id;
                    top._id = id;
                }
            });
        }

    },
    onNewGriddataset: function () {
        var jude = this.getView().items.items[2].getStore().isEmptyStore,
            view = this.getView().items.items[2];
        var addNewData = function () {
            var rec = new DRDMS.model.GridDataset({
                name: '',
                title: '',
                dataLength: '',
                notNull: '',
                require: '',
                common: '',
                dataType: '',
                valueRangeReference: ''
            });
            return rec;
        };
        if (jude != true) {
            view.store.insert(0, addNewData());
        } else {
            var store = {
                autoLoad: true,
                data: addNewData()
            };
            view.setStore(store);
        }
    },
    onChooseSelect: function (view, value, pre, fn) {
        var data = value,
            me = this;

        var column = this.getView().items.items[2].columns[6];
        if (data != pre) {
        }
        if (data == 'Directory') {
            var editor = {
                xtype: 'combo',
                displayField: 'title',
                valueField: 'code',
                emptyText: '数据类型',
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: '/base/api/catalogs/Dictionary'
                    }
                },
            };
            column.setEditor(editor);
        } else {
            var editor = {
                xtype: 'textfield'
            };
            column.setEditor(editor);
        }
    },
    onDele: function (grid, rowindex) {
        var me = this;
        var store = this.getView().items.items[2].getStore();
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    store.removeAt(rowindex);
                }
            }
        })
    }
});