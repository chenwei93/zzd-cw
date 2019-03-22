Ext.define('Starter.view.dictionary.DictionaryController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.dictionary',


    onSelect: function (record, view, index) {
        //获取当前节点的name
        var selectName = record.selected.items[0].data.extraAttributes.code;
        //获取当前节点的子节点们
        var selectNodeChilds = record.selected.items[0].childNodes,
            length = record.selected.items[0].childNodes.length;
        var childarr = [];
        for (var i = 0; i < length; i++) {
            var name = selectNodeChilds[i].data.name;
            childarr.push(name);
        }

        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/rest/codes/' + selectName,
                reader: {
                    rootProperty: 'array'
                }
            }
        };


        var grid =this.lookup('dictionarygrid');
        grid.setStore(store);
    },
    onAdd: function () {
        var view = this.getView(),
            rec = new Starter.model.DataGrid({});
        view.store.insert(0, rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    },
    onEdit: function (node) {
        // debugger;
        var store = Ext.getCmp('datagrid').store.data.items[0].data.name;
        var select = Ext.getCmp('datatree').selModel.getSelection()[0],
            newNode = {
                name: store,
                leaf: true
            };
        select.appendChild(newNode);


    },
    onDelete: function (record, index) {
        //删除tree的节点
        var select = Ext.getCmp('datatree').selModel.getSelection()[0];
        select.childNodes[index].remove();

        //删除grid的行
        var _store = Ext.getCmp('datagrid').getStore();
        _store.removeAt(index);
        console.log('store:', Ext.getCmp('datagrid').getStore())

    }
});