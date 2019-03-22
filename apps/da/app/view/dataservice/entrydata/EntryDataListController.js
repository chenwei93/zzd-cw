Ext.define('DA.view.dataservice.entrydata.EntryDataListController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.entrydata-list',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (view, record, index) {
        // debugger
        var id = record.id;

        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '目录详情',
            width: 800,
            height: 612
        });
    },
    onShow1: function (grid, rowIndex, colIndex, cell, event, record, row) {
        // debugger
        var id = record.get('id');

        this.open({
            xtype: 'entry-view',
            entityId: id
        }, {
            title: '目录详情',
            width: 800,
            height: 612
        });
    },
    onReset: function () {
        this.getView().getStore().reload();
    },
    onSpecialkey: function (field, e) {
        console.log(arguments);
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = me.getView();
            var store = grid.getStore(),
                filterField = me.lookup('searchText').value;
            var url = '/drdms/api/entryDatas',
                params = '';
            //TODO @chenw 资源清单查询不起效
            if (filterField) {
                params = '?query=example&resTitle=' + filterField
            }
            var newStore = {
                autoLoad: true,
                proxy: {
                    type: 'ajax2',
                    url: url + params
                }
            };
            grid.setStore(newStore);
        }
    }

});
