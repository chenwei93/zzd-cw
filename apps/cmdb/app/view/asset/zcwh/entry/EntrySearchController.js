Ext.define('Cmdb.view.asset.zcwh.entry.EntrySearchController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.entry-search',


    //搜索框回车搜索
    onSpecialkey: function (field, e) {
        if (e.getKey() == Ext.EventObject.ENTER) {
            this.onSearch();
        }
    },
    // 搜索按钮点击搜索
    onSearch: function () {
        var resultGrid = this.lookup('resultGrid'),
            panel = resultGrid.up('panel'),
            value = this.lookup('searchText').getValue(),
            url;
        url = encodeURI('/drdms/api/entries/search?key=' + value);
        if (value != '') {
            panel.items.items[0].setMargin(0);
            panel.items.items[1].setVisible(true)
            this.loadGrid(url, resultGrid);
        }
    },

    //根据条件加载结果grid
    loadGrid: function (url, grid) {
        var store = {
            model: 'EntryData',
            autoLoad: true,
            pageSize: 25,
            proxy: {
                type: 'ajax2',
                url: url
            }
        };
        grid.setStore(store)
    }
});