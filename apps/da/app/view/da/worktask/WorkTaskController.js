Ext.define('DA.view.da.worktask.WorkTaskController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.worktask',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onInitiate: function (btn) {
        console.log('onInitiate');
    },
    onRest: function (btn) {
        this.getView().getStore().reload();
    },
    onChangeStatus: function (combo, value, pre, event) {
        console.log('onChangeStatus', value)
    },
    onSpecialkey: function () {
        console.log('onSpecialkey', arguments)
    },
    onSearch: function () {
        console.log('onSearch')
    },
    onDeal: function (tableview, rowindex, colindex, btn, time, record, tr) {
        this.open({
            xtype: 'worktask-deal'
        }, {
            title: '处理任务',
            width: '80%',
            height: 600
        })
    }
});
