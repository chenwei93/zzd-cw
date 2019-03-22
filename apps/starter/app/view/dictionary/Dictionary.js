Ext.define('Starter.view.dictionary.Dictionary', {
    extend: 'Ext.panel.Panel',
    xtype: 'dictionary',

    requires: [
        'Starter.view.dictionary.DictionaryController',
        'Starter.view.dictionary.DictionaryDataModel',
        'Starter.view.dictionary.DictionaryGrid',
        'Starter.view.dictionary.DictionaryTree'
    ],
    layout: 'border',
    controller: 'dictionary',

    items: [{
        xtype: 'dictionary-tree',
        region: 'west',
        width: 340
    }, {
        xtype: 'dictionary-grid',
        region: 'center',
        reference:'dictionarygrid'
    }]
});