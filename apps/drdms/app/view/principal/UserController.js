Ext.define('DRDMS.view.principal.UserController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.user',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onDelete: function (gri, rowindex) {
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

    onAdd: function () {
        var view = this.getView(),
            rec = new DRDMS.model.Principal({
                name: '',
                displayName: '',
                code: '',
                dept: '',
                area: ''
            });
        view.store.insert(0, rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    },
    onEEdit: function (record, index, a, b, c, d) {
        var record = index.record;
        record.commit();
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore(),
                filterField = me.lookup('searchText'),
                filters = store.getFilters();//当前表格的filter
            if (filterField.value) {//有输入值,添加filter
                this.nameFilter = filters.add({
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
    },
    onreloadStore: function () {
        this.getView().getStore().reload();
    },
    onUserPlus: function (view, rowindex, colindex, button, event, record, tr) {
        var id = record.data.id;
        this.open({
            xtype: 'user-roles'
        }, {
            layout: 'fit',
            title: '分配角色',
            needRecord: record,
            gridView: this.getView(),
            width: 500,
            height: 300
        })
    },
    onChangePassword: function (view, rowindex, colindex, button, event, record, tr) {
        var id = record.data.id;
        this.open({
            xtype: 'user-changepsd'
        }, {
            layout: 'fit',
            title: '重置密码',
            needId: id,
            width: 330,
            height: 230
        })
    }

    // TODO - Add control logic or remove is not needed
});
