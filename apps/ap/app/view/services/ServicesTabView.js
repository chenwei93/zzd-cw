Ext.define('AP.view.services.ServicesTabView', {
    extend: 'Ext.tab.Panel',
    xtype: 'services-tabview',

    plain: true,
    frame: false,
    items: [{
        title: 'SQL自定义',
        items: [{
            height: 444,
            xtype: 'form',
            layout: 'fit',
            border: true,
            margin: 10,
            trackResetOnLoad: true,
            items: [{
                xtype: 'textarea',
                reference: 'sqlcustomize',
                flex: 1,
                name: 'sqlcustomize',
                triggerWrapCls: 'textarea-border-no',
                fieldStyle: 'font-size: 16px; font-family: "Courier New";'
            }]

        }]
    }, {
        title: '脚本自定义',
        xtype: 'services-addview'
    }],
    listeners: {
        render: 'onTabViewRender'
    }

});