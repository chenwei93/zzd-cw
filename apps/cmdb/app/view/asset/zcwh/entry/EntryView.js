Ext.define('Cmdb.view.asset.zcwh.entry.EntryView', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryViewForm',
        'Cmdb.view.asset.zcwh.entry.EntryViewDataset',
        'Cmdb.view.asset.zcwh.entry.EntryViewLog',
        'Cmdb.view.asset.zcwh.entry.EntryViewMetadata',
        'Cmdb.view.asset.zcwh.entry.EntryViewController'
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