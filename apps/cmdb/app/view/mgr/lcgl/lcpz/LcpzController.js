Ext.define('Cmdb.view.mgr.lcgl.lcpz.LcpzController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.lcpz',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onEdit: function (tr, td, view, index, a, record) {
        this.open({
            xtype: 'lcpz-edit',
            needRecord: record,
            viewModel: {
                data: {
                    show: record
                }
            }

        }, {
            title: '编辑' + record.get('title'),
            width: 750,
            height: 400
        })
    },
    onAdd: function (btn) {
        this.open({
            xtype: 'lcpz-add',
        }, {
            title: '新增',
            needType: 'add',
            width: 750,
            height: 400
        })
    },
    onSave: function (btn) {
        var grid = this.lookup('grid');
        var form = this.lookup('form'),
            formValue = form.getValues();
        var data = grid.getStore().getData();
        var arr = [];
        for (var i in data.items) {
            arr.push(data.items[i].data);
        }
        if (btn.up('window').needType != 'add') {
            btn.up('lcpz-edit').needRecord.set('items', arr);
            btn.up('lcpz-edit').needRecord.set('title', formValue.title);
            btn.up('lcpz-edit').needRecord.set('code', formValue.code);
            btn.up('lcpz-edit').needRecord.set('changeTime', Date.now());
        } else {
            formValue.items = arr;
            formValue.updateTime = Date.now();
            formValue.changeTime = Date.now();
            formValue.version = '1.1.1';
            this.getView().getStore().add(formValue);
        }
        btn.up('window').close()
    },
    onCancel: function (btn) {
        if (btn.up('lcpz-edit').needRecord) {
            btn.up('lcpz-edit').needRecord.reject();
        }
        btn.up('window').close()

    },
    onRender: function (view) {
        var grid = this.lookup('grid');
        var store = {
            autoLoad: true,
            data: view.needRecord.get('items')
        };
        grid.setStore(store)
    },
    onAddGridRecord: function (btn) {
        var grid = btn.up('grid'),
            store = grid.getStore();
        var store1 = {
            autoLoad: true,
            data: {
                title: ''
            }
        };
        if (store.isEmptyStore) {
            grid.setStore(store1);
        } else {
            var data = {
                title: ''
            };
            store.add(data)
        }
    },
    onDelete: function (view, row, col, btn, a, record) {
        var grid = view.grid,
            store = grid.getStore();
        store.remove(record);
    }
});