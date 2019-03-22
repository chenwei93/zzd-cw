Ext.define('Cmdb.view.business.allzcml.PeMgrController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.pemgr',

    onPemgrRender: function (view, event) {
        var arr = [{
            zhname: '民政局',
            name: 'SAN 存储',
            sype: 10
        }, {
            zhname: '教育局',
            name: 'SAN 存储',
            sype: 150
        }, {
            zhname: '公安局',
            name: 'SAN 存储',
            sype: 100

        }];
        var obj = {
            1: arr[0],
            2: arr.slice(0, 2),
            3: arr,
        };
        var win = view.up('window'),
            data = win ? obj[win.record.getData().zh] : arr;
        view.setStore({
            autoLoad: true,
            data: data
        });
    },
    onEdit: function (view, row, col, btn, time, record, tr) {
        this.open({
            xtype: 'pemgr-edit',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            },
            winView: view.up('window')
        }, {
            title: '修改' + record.get('zhname') + '的配额',
            width: 500,
            height: 400
        })
    },
    onSure: function (btn) {
        var fView = btn.up('pemgr-edit'),
            fValue = fView.getValues();
        if (fValue.ncpe <= 8) {
            Ext.Msg.alert('警告', '民政局当前内存使用为10G。修改失败，请重新调整内存配额')
        } else {
            var ncpe = fValue.ncpe,
                win = fView.winView;
            if (win) {
                var winRec = win.record,
                    formRec = fView.record,
                    changeViewModelData = function (itemArr) {
                        Ext.Array.each(itemArr, (item, index, arr) => {
                            winRec.set(item, Number(winRec.get(item)) + Number(ncpe))
                        })
                    };
                formRec.set('sype', Number(formRec.get('sype')) + Number(ncpe));
                changeViewModelData(['yfppe', 'sype', 'sspe']);
            }
            var mlzlGrid = Ext.getCmp('mlzlGrid'),
                mlzlGridStore = mlzlGrid.getStore(),
                mlzlGridStoreData = mlzlGridStore.getData().items;
            Ext.Array.each(mlzlGridStoreData, (item, index, arr) => {
                if (item.get('code') == 'san') {
                    item.set('available', item.get('available') - Number(ncpe));
                }
            });
            btn.up('window').close();
        }
    },
    onCancel: function (btn) {
        btn.up('window').close();
    }

});