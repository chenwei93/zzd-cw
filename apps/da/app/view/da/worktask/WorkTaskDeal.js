Ext.define('DA.view.da.worktask.WorkTaskDeal', {
    extend: 'Ext.panel.Panel',
    xtype: 'worktask-deal',


    requires: [
        'DA.view.da.worktask.Timeline',
        'DA.view.da.worktask.WorkTaskEdit',
        'DA.view.da.worktask.OrderTemple',
    ],
    layout: 'border',
    defaults: {
        collapsible: false,
        split: true,
        bodyStyle: 'padding:15px',
        scrollable: true
    },


    items: [{
        //timeline
        xtype: 'timeline',
        region: 'west',
        width: 175,
        minSize: 100,
        maxSize: 250
    }, {
        //worktask
        xtype: 'worktask-edit',
        region: 'center',
    }, {
        //orderTemple
        xtype: 'ordertemple',
        region: 'south',
        height: '60%',
        // minSize: 75,
        // maxSize: 250,
    }]
});
