Ext.define('DRDMS.view.entry.EntryPublishedController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entry-published',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onShow: function (view, record, index, tr, td) {
        var id = record.id;
        this.open({
            xtype: 'entry-view',
            entityId: id,
        }, {
            title: '已处理数据详情',
            width: 800,
            height: 612,
        });
    },
    onRestNode: function () {
        this.getView().getStore().reload({
            type: 'ajax2',
            url: '/drdms/api/entries?query=example&biz.currentState=Generated'
        });
    },
    onreset: function () {
        this.getView().getStore().reload({
            type: 'ajax2',
            url: '/drdms/api/entries?query=example&biz.currentState=Published'
        });
    },
    onEdit: function (view, record, index, tr, td) {
        // debugger;
        var id = td.record.id;
        this.open({
            xtype: 'entry-edit',
            entityId: id,
        }, {
            title: '已处理数据详情',
            width: 1100,
            height: 664,
            gridView: this.getView()
        });
    },
    onShownode: function (view, record, index, tr, td) {
        this.onShow(view, record, index, tr, td)
    },
    onEditnode: function (view, record, index, tr, td) {
        // debugger;
        this.onEdit(view, record, index, tr, td);
    },
    //中心端根据标题进行搜索
    onSpecialkey: function (field, e) {

        var url = '/drdms/api/entries?query=example&biz.currentState=Published';
        this.onSpecialkeyNode(field, e, url);
    },
    //部门端根据标题进行搜索
    onSpecialkeyNode: function (field, e, url) {
        if (e.getKey() == Ext.EventObject.ENTER) {
            var value = this.lookup('searchText').getValue();
            var gridStore = this.getView().getStore();
            if (url) {
                url = url
            } else {
                url = '/drdms/api/entries?query=example';
            }
            if (value == '') {
                this.reloadStore();
            } else {
                url = url + '&resource.resTitle=' + value;
                this.reloadGrid(url, gridStore);
            }
        }
    },
    //根据搜索标题刷新当前grid
    reloadGrid: function (url, store) {
        store.reload({
            type: 'ajax2',
            url: url
        })
    },
    onReset: function () {
        this.getView().getStore().reload();
    }

    // TODO - Add control logic or remove is not needed
});
