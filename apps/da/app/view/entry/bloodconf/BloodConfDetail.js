Ext.define('DA.view.entry.bloodconf.BloodConfDetail', {
    extend: 'Ext.panel.Panel',
    xtype: 'bloodconf-detail',


    scrollable: true,
    items: [{
        height: 600,
        xtype: 'uxiframe',
        src: 'app/view/entry/bloodconf/detail/detail.html',
    }]

});
