Ext.define('Cmdb.view.asset.zckgl.catalog.CatalogHYController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.cataloghy',

    onRealm: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            record: record,
            viewModel: {
                data: {
                    catalog: record
                }
            },
            title: '编辑行业分类',
            items: [{
                xtype: 'catalog-edit'
            }]
        }).show();
    },
    onAddClick: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            title: '新增行业分类',
            items: [{
                xtype: 'catalog-add'
            }],
            gridView: this.getView()
        }).show();
    },
    onDelete: function (grid, rowindex) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '确定删除？',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var store = me.getView().getStore();
                    store.removeAt(rowindex);

                }
            }
        })
    },
    onCancel: function () {
        var win = this.getView().up('window');
        var record = this.getView().up('window').record;
        record.reject();
        win.close();
    },
    onSave: function () {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '修改成功',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var record = me.getView().up('window').record;
                    record.commit();
                    win.close();
                }

            }
        });
    },
    onSaveAdd: function (a) {
        var me = this;
        Ext.Msg.alert({
            title: '提示',
            msg: '新增成功。',
            buttonText: {yes: '确定', no: '取消'},
            fn: function (btn, text) {
                if (btn == 'yes') {
                    var win = me.getView().up('window');
                    var store = me.getView().up('window').gridView.getStore();
                    var value = a.up('form').getForm().getValues();
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

            }
        });
    },
    onCancelAdd: function () {
        var win = this.getView().up('window');
        win.close();
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore(),
                filterField = me.lookup('searchText'),
                filters = store.getFilters();//当前表格的filter

            if (filterField.value) {//有输入值,添加filter
                this.nameFilter = filters.add({
                    // id: 'nameField',
                    property: 'text',//通过text属性过滤
                    value: filterField.value,//值为搜索框输入的值
                    anyMatch: true,//模糊匹配
                    caseSensitive: false
                });
            } else if (this.nameFilter) {//未输入，则移除filter
                filters.remove(this.nameFilter);
                this.nameFilter = null;
            }
        }
    },
    onFocus: function (view) {
        var value = view.getValue(),
            inputTitle = view.up('catalog-add').lookup('inputText').getValue();
        if (value == "" && inputTitle != "") {
            Ext.Ajax.request({
                url: '/base/api/pinyin/' + encodeURIComponent(inputTitle),
                success: function (rs) {
                    rs.responseText = rs.responseText.replace(/\"/g, "");
                    view.setValue(rs.responseText);
                }
            })
        }
    }
});