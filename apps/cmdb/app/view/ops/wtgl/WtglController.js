Ext.define('Cmdb.view.ops.wtgl.WtglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.wtgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onChooseSelect: function (combo, value, pre) {
        this.getView().getStore().reload({
            url: 'app/store/data/ops/gdgl/' + value + '.json'

        })
    },
    onNew: function () {
        this.open({
            xtype: 'cjgd'
        }, {
            title: '新增问题',
            width: 800,
            height: 580,
            scrollable: true
        })
    },
    onDeal: function () {
        this.open({
            xtype: 'sqsh'
        }, {
            title: '处理',
            width: 900,
            height: 620
        })
    }
});