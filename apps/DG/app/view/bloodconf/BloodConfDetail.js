Ext.define('DG.view.bloodconf.BloodConfDetail', {
    extend: 'Ext.panel.Panel',
    xtype: 'bloodconf-detail',


    scrollable: true,
    items: [{
        height: 600,
        xtype: 'uxiframe',
        src: 'app/view/bloodconf/detail/detail.html',
    }]

});
