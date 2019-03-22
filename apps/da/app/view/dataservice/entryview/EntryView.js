Ext.define('DA.view.dataservice.entry.EntryView', {
    extend: 'Ext.tab.Panel',

    requires: [
        'DA.view.dataservice.entry.EntryViewForm',
        'DA.view.dataservice.entry.EntryViewDataset',
        'DA.view.dataservice.entry.EntryViewLog',
        'DA.view.dataservice.entry.EntryViewMetadata',
        'DA.view.dataservice.entry.EntryViewController'
    ],
    xtype: 'entry-view',
    controller: 'entry-view',
    tabPosition: 'bottom',
    tabRotation: 0,
    tabBar: {
        border: false
    },
    xxxx: null,
    defaults: {
        textAlign: 'left',
        bodyPadding:
            15
    }
    ,
    items: [{
        title: '目录描述',
        xtype: 'entryview-form'
    }, {
        title: '资源结构',
        bodyPadding: 0,
        xtype: 'entryview-dataset'
    }, {
        title: '处理记录',
        bodyPadding: 0,
        xtype: 'entryview-log'
    }, {
        bodyPadding: 0,
        title: '元数据清单',
        xtype: 'entryview-metadata'
    }]
});
