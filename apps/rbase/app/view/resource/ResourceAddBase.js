Ext.define('RBase.view.resource.ResourceAddBase', {
    extend: 'Ext.form.Panel',


    xtype: 'resource-addbase',
    layout: 'column',
    margin: 20,
    defaults: {
        xtype: 'textfield',
        anchor: '100%',
        columnWidth: 0.5,
        labelWidth: 50
    },
    items: [{
        fieldLabel: '标题',
        name: 'title',
        padding: '0 10 10 0',
        reference: 'title'
    }, {
        fieldLabel: '资源池',
        xtype: 'combo',
        store: {
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                url: '/rbase/api/resourcePools'
            }
        },
        displayField: 'name',
        valueField: 'code',
        queryMode: 'local',
        reference: 'rPool'
    }, {
        fieldLabel: '资源名',
        name: 'name',
        columnWidth: 1,
        reference: 'name'

    }]
});
