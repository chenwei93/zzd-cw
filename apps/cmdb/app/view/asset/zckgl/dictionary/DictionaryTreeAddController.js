Ext.define('Cmdb.view.asset.zckgl.dictionary.DictionaryTreeAddController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.dictionary-treeadd',

    onSSave: function () {
        var store = this.getView().up('window').gridView.items.items[0].getStore(),
            win = this.getView().up('window');
        var value = this.getView().getForm().getValues(),
            code = value.code,
            title = value.title;
        Ext.Ajax.request({
            url: '/base/api/addcatalog?' + 'code=' + code + '&title=' + encodeURIComponent(title),
            success: function () {
                store.reload();
                win.close();
            }
        })
    },
    onCCancel: function () {
        this.getView().up('window').close();
    }
});