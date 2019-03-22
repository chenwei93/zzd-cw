Ext.define('DG.view.qreport.QReportController', {
    extend: 'DG.base.ViewController',
    alias: 'controller.qreport',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    //详情
    onDetail: function (view, row, col, btn, a, record, tr) {
       console.log('详情');
    },
    onSearch: function (btn) {
        var view = this.getView(),
            store = view.getStore(),
            vm = this.getViewModel();
        var sData = vm.get('startTime'),
            eData = vm.get('endTime'),
            rData = vm.get('rolesName'),
            entryData = vm.get('entryName');
        console.log('搜索所需数据：', sData, rData, eData, entryData);
        store.reload()
    },
    onReset: function (btn) {
        var view = this.getView(),
            store = view.getStore(),
            vm = this.getViewModel();
        vm.set('startTime', '');
        vm.set('rolesName', '');
        vm.set('entryName', '');
        vm.set('endTime', '');
        store.reload();
    },
    onShow: function (view, row, col, btn, a, record, tr) {
        this.open({
            xtype: 'showreport',
            needId: record.get('id')
        }, {
            width: '70%',
            title: '详情'
        })
    },
    onComboChange: function (combo, value, pre) {
        var grid = combo.up('grid');
        this.setGridStore(value, grid);
    },
    setGridStore: function (id, grid) {
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/QReport.json'
            }
        };
        grid.setStore(store);
    },
    onShowGridRender: function (view) {
        this.setGridStore(view.needId, view);
    }
});
