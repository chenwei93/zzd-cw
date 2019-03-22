Ext.define('DRDMS.view.dictionary.Dictionary', {
    extend: 'Ext.panel.Panel',
    xtype: 'dictionary',

    requires: [
        'DRDMS.view.dictionary.DictionaryController',
        'DRDMS.view.dictionary.DictionaryTreeModel',
        'DRDMS.view.dictionary.DictionaryGrid',
        'DRDMS.view.dictionary.DictionaryTree'
    ],
    layout: 'border',
    controller: 'dictionary',

    items: [{
        xtype: 'dictionary-tree',
        region: 'west',
        reference:'dictionarytree',
        width: 340
    }, {
        xtype: 'dictionary-grid',
        region: 'center',
        reference:'dictionarygrid'
    }]
});