Ext.define('Cmdb.view.asset.zckgl.entryset.EntrySetEditController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.entryset-edit',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onMetadata: function () {
        var select = this.getView().lookup('metadata').getSelectionModel().getSelection(),
            length = select.length;
        var grid = this.getView().up('window').gridView,
            gridStore = grid.getStore(),
            win = this.getView().up('window'),
            id = win.needId;
        if (length == 0) {
            Ext.Msg.alert({
                title: '提示',
                msg: '当前未选择元数据项。',
                buttonText: {yes: '是', no: '否'},
                fn: function (btn, text) {
                    if (btn == 'yes') {
                        win.close();
                    }
                }
            })
        } else {
            var item = select[0].data.name;
            for (var i = 1; i < length; i++) {
                item += ',' + select[i].data.name;
            }
            Ext.Ajax.request({
                url: '/drdms/api/objectPackages/' + id + '/updateClass?attributes=' + item,
                method: 'PUT',
                success: function (rs) {
                    gridStore.reload();
                    win.close();
                }
            });
        }
    }
});