Ext.define('DA.view.mgr.rzgl.RzglController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.rzgl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onCreateGD: function (view, row, col, btn, event, record) {
        this.open({
            xtype: 'rz-cjgd',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            title: '新建工作',
            width: 800,
            height: 580,
            scrollable: true
        })
    },
    onShowError: function () {
        this.open({
            xtype: 'rzgl-show'
        }, {
            width: 700,
            height: 600,
            title: '异常明细'
        })
    },
    onSearch: function (btn) {
        var grid = this.getView();
        var selection = grid.getSelectionModel().getSelection();
        if (selection.length > 0) {
            grid.ensureVisible(selection[0]);
        }

    }
});
