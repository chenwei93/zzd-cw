Ext.define('Cmdb.view.asset.zcfw.sqsh.sqd', {
    extend: 'Ext.form.Panel',
    xtype: 'sqd',

requires:['Cmdb.view.asset.zcfw.sqsh.SqdModel',],
    bodyPadding: 10,
    height: 350,
    scrollable: true,
    // viewModel: 'sqd',
    // items: [{
    //
    // }],
    listeners: {
        afterrender: 'onRender'
    }
});
