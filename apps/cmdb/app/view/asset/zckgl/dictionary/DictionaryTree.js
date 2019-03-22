Ext.define('Cmdb.view.asset.zckgl.dictionary.DictionaryTree', {
    extend: 'Ext.tree.Panel',

    xtype: 'dictionary-tree',

    title: '数据字典',

    viewModel: {
        type: 'dictionarytree'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '新增',
        iconCls: 'x-fa fa-plus',
        ui: 'default',
        handler:'onAddNew'
    }],
    listeners: {
        select: 'onSelect',
        'beforeitemexpand': function (node, deep, animal) {

        }
    },
    rootVisible: false,
    animate: false,
    reserveScrollbar: true
});