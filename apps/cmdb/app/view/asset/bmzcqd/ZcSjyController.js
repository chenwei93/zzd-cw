Ext.define('Cmdb.view.asset.bmzcqd.ZcSjyController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zc-sjy',


    onAdd: function () {
        this.open({
            xtype: 'zcsjy-edit'
        }, {
            title: '新增',
            width: 700,
            height: 500
        })
    },
    onEdit: function (tr, td, view, index, a, record) {
        this.open({
            xtype: 'zcsjy-edit',
            record: record,
            viewModel: {
                data: {
                    zcsjy: record
                }
            },
        }, {
            title: '修改',
            width: 700,
            height: 500
        })
    },
    onZcSjyEditSure: function (btn) {
        btn.up('zcsjy-edit').record.commit();
        this.closeWin(btn);
    },
    onZcSjyEditCancel: function (btn) {
        this.closeWin(btn);
    },
    closeWin: function (btn) {
        btn.up('window').close();
    }
});