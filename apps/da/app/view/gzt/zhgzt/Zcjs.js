Ext.define('DA.view.gzt.zhgzt.Zcjs', {
    extend: 'Ext.panel.Panel',
    xtype: 'zcjs',


    bodyCls: 'zcjsbg',
    items: [{
        layout: 'fit',
        xtype: 'form',
        bodyPadding: 10,
        bodyCls: 'zcjsbg',
        trackResetOnLoad: true,
        items: [{
            xtype: 'textarea',
            fieldStyle: 'font-size: 16px; font-family: "Courier New";'
        }]
    }, {
        margin:'10 0 0 30',
        xtype: 'button',
        style: {
            "border-color": "#35BAF6",
            "background-color": "#0A5A7A",
        },
        text: '资产检索'
    }]
});
