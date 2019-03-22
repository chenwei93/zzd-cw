Ext.define('DRDMS.view.entryset.ResourceFormatController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.resourceformat',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onEdit: function (tr, td, view, index, a, record) {
        Ext.create({
            xtype: 'window',
            width: 600,
            record: record,
            viewModel: {
                data: {
                    resourceformat: record
                }
            },
            title: '编辑资源形态',
            items: [{
                xtype: 'resourceformat-edit'
            }]
        }).show();
    },
    onDelete: function (grid,rowindex) {
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
    onAddClick: function () {
        Ext.create({
            xtype: 'window',
            width: 600,
            title: '新增资源形态',
            items: [{
                xtype: 'resourceformat-add'
            }],
            gridView: this.getView()
        }).show();
    },
    onSaveAdd: function (a, b, c, d, e, record) {

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
                    store.add({
                        name: value.text,
                        code: value.code,
                        describtion: value.desc
                    })
                    win.close();
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
                    property: 'name',//通过name属性过滤
                    value: filterField.value,//值为搜索框输入的值
                    anyMatch: true,//模糊匹配
                    caseSensitive: false
                });
            } else if (this.nameFilter) {//未输入，则移除filter
                filters.remove(this.nameFilter);
                this.nameFilter = null;
            }
        }
    }
});
