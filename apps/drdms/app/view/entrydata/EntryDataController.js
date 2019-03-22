Ext.define('DRDMS.view.entrydata.EntryDataController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entrydata',


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
    onShow2: function (grid, rowIndex, colIndex, cell, event, record, row) {
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
    onReset: function () {
        this.getView().getStore().reload();
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var grid = me.getView();
            var store = grid.getStore(),
                filterField = me.lookup('searchText').value;
            var url = '/drdms/api/entryDatas',
                params = '';
            //TODO @chenw 资源目录查询不起效
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
