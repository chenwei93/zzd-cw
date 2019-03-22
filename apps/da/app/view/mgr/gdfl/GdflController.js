Ext.define('DA.view.mgr.gdfl.GdflController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.gdfl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onAdd: function () {
        this.open({
            xtype: 'gdfl-edit'
        }, {
            title: '新增工单分类',
            width: 600,
            height: 200
        })
    },
    onEdit: function (tr, td, view, index, grid, record) {
        this.open({
            xtype: 'gdfl-edit',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            title: '编辑' + record.get('text'),
            width: 600,
            height: 200
        })
    },
    onSave: function (btn) {
        var form = btn.up('gdfl-edit'),
            record = form.record;
        if (record) {
            record.commit();
        } else {
            this.getView().getStore().add(form.getValues())
        }
        btn.up('window').close()
    },
    onCancel: function (btn) {
        var form = btn.up('gdfl-edit'),
            record = form.record;
        if (record) {
            record.reject();
        }
        btn.up('window').close()
    }
});
