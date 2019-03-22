Ext.define('Cmdb.view.asset.zckgl.dictionary.DictionaryController', {
    extend: 'Cmdb.base.ViewController',

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
        top._select = selectName;
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/base/api/codes/' + selectName,
                reader: {
                    rootProperty: 'array'
                }
            }
        };


        var grid = this.lookup('dictionarygrid');
        grid.setStore(store);
    },
    onAdd: function () {
        var view = this.lookup('dictionarygrid'),
            rec = new DRDMS.model.DataGrid({
                title: '',
                code: '',
                description: ''
            });
        view.store.insert(0, rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    },
    onEEdit: function (record, index, a, b, c, d) {
        var me = this;
        var code = index.record.data.code,
            title = index.record.data.title;
        Ext.Ajax.request({
            url: 'base/api/addcode?parentCode=' + top._select + '&code=' + code + '&title=' + title,
            success: function (rs) {
                me.lookup('dictionarytree').getStore().reload({
                    autoLoad: true,
                    type: 'tree',
                    proxy: {
                        type: 'ajax',
                        url: '/base/api/tree/codes',
                        reader: {
                            rootProperty: 'children'
                        }
                    }
                });

                alert('保存成功');
            },
            failure: function (rs) {
                me.lookup('dictionarytree').getStore().reload({
                    autoLoad: true,
                    type: 'tree',
                    proxy: {
                        type: 'ajax',
                        url: '/base/api/tree/codes',
                        reader: {
                            rootProperty: 'children'
                        }
                    }
                });

                alert('保存成功');
            }
        });
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

    },
    onAddNew: function () {
        this.open({
            xtype: 'dictionary-treeadd'
        }, {
            width: 700,
            height: 180,
            gridView: this.getView(),
            title: '新增数据字典'
        })
    }
});