Ext.define('Cmdb.view.asset.bmzcqd.ZcEditController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zc-edit',


    onSure: function (btn) {
        if (btn.up('window').closeWin != null) {
            var value = btn.up('form').getValues();
            value.time = Date.now();
            value.type = btn.up('window').needSLtype;
            value.sl_code = btn.up('window').needSLsltype;
            var store = Ext.getStore('mlxsl');
            store.add(value);
            store.sync();
            btn.up('window').closeWin.close()
        } else {
            if (btn.up('window').needGrid != null) {
                if (btn.up('window').needStatus != 'wh') {
                    var value = btn.up('form').getValues();
                    value.time = Date.now();
                    value.type = btn.up('window').needSLtype;
                    value.sl_code = btn.up('window').needSLsltype;
                    var store = Ext.getStore('mlxsl');
                    store.add(value);
                    store.sync();
                    btn.up('window').needGrid.add(btn.up('form').getValues())
                }
            }
            btn.up('window').close();
        }

    },
    onCancel: function (btn) {
        if (btn.up('window').closeWin != null) {
            btn.up('window').closeWin.close()
        } else {
            btn.up('window').close();
        }

    }
});