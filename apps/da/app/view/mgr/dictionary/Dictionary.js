Ext.define('DA.view.mgr.dictionary.Dictionary', {
    extend: 'Ext.panel.Panel',
    xtype: 'dictionary',

    requires: [
        'DA.view.mgr.dictionary.DictionaryController',
        'DA.view.mgr.dictionary.DictionaryTreeModel',
        'DA.view.mgr.dictionary.DictionaryGrid',
        'DA.view.mgr.dictionary.DictionaryTree'
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
