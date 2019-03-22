Ext.define('Starter.view.dictionary.DictionaryTree', {
    extend: 'Ext.tree.Panel',

    xtype: 'dictionary-tree',

    title: '数据字典',

    store: {
        type: 'tree',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/rest/tree/codes'
        }
    },
    listeners: {
        select: 'onSelect',
        'beforeitemexpand': function (node, deep, animal) {

        }
    },
    rootVisible: false,
    animate: false,
    reserveScrollbar: true
});