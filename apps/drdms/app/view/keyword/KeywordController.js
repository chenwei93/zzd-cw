Ext.define('DRDMS.view.keyword.KeywordController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.keyword',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onReset: function () {
        var store = this.getView().getStore();
        store.reload();
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
                    property: 'title',//通过title属性过滤
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
    onRealm: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            record: record,
            viewModel: {
                data: {
                    keyword: record
                }
            },
            title: '编辑标签',
            items: [{
                xtype: 'keyword-edit'
            }]
        }).show();
    },
    onAddClick: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            title: '新增标签',
            items: [{
                xtype: 'keyword-add'
            }],
            gridView: this.getView()
        }).show();
    },
    onSelectionChange: function (grid, selection) {
        var code = selection[0].data.code;
        top._code = code;
    }
    ,
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
    }
    ,
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
                        title = value.title,
                        des = value.description;
                    var record = {
                        code: code,
                        description: des,
                        title: title
                    };
                    store.add(record);
                    win.close();

                }

            }
        });
    }
    ,
    onCancelAdd: function () {
        var win = this.getView().up('window');
        win.close();
    }
    ,
    onCancel: function () {
        var win = this.getView().up('window');
        var record = this.getView().up('window').record;
        record.reject();
        win.close();
    }
    ,
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
    }

// TODO - Add control logic or remove is not needed
})
;
