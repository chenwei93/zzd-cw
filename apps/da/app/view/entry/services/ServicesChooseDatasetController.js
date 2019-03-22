Ext.define('DA.view.entry.services.ServicesChooseDatasetController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.services-choose-dataset',

    onRender: function (view) {
        var win = view.up('window'),
            type = win.type,
            gridView = win.gridView.up('services-operate');
        var needData = type == 'input' ? gridView.inPut : gridView.outPut;
        var store = {
            autoLoad: true,
            data: needData
        };
        this.getView().setStore(store);
    },
    onSure: function (btn) {
        var win = btn.up('window'),
            gridView = win.gridView,
            chooseDataPanel = this.getView(),
            select = chooseDataPanel.getSelectionModel().getSelection(),
            selectLength = select.length;

        if (selectLength == 0) {
            Ext.toast('当前未选择字段。')
        } else {
            Ext.Msg.confirm('提示', '确定引入当前选择的数据？', function (btn) {
                if (btn == 'yes') {
                    for (var i in select) {
                        select[i] = select[i].data
                    }
                    gridView.getStore().insert(0, select);
                    win.close();
                }
            })
        }
    }
});
