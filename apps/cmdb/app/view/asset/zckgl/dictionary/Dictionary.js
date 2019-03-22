Ext.define('Cmdb.view.asset.zckgl.dictionary.Dictionary', {
    extend: 'Ext.panel.Panel',
    xtype: 'dictionary',

    requires: [
        'Cmdb.view.asset.zckgl.dictionary.DictionaryController',
        'Cmdb.view.asset.zckgl.dictionary.DictionaryTreeModel',
        'Cmdb.view.asset.zckgl.dictionary.DictionaryGrid',
        'Cmdb.view.asset.zckgl.dictionary.DictionaryTree',
        'Cmdb.view.asset.zckgl.dictionary.DictionaryTreeAdd',
    ],
    layout: 'border',
    controller: 'dictionary',

    height: 513,
    items: [{
        xtype: 'dictionary-tree',
        region: 'west',
        reference: 'dictionarytree',
        width: 340
    }, {
        xtype: 'dictionary-grid',
        region: 'center',
        reference: 'dictionarygrid'
    }]
});
