Ext.define('AP.view.application.ApplicationAddResult', {
    extend: 'Ext.tab.Panel',
    xtype: 'result',

    tabPosition: 'bottom',
    height: 350,
    border: true,
    bodyBorder: false,
    bodyPadding: "5",
    tabBar: {
        style: 'background-color: #999'
    },
    minTabWidth: 70,
    items: [{
        title: '源码',
        layout: 'fit',
        padding: '10 10',
        xtype: 'form',
        trackResetOnLoad: true,
        bodyStyle: "border:none!important",
        items: [{
            xtype: 'textarea',
            triggerWrapCls: 'textarea-border-no',
            fieldStyle: 'font-size: 16px; font-family: "Courier New";'
        }]
    }, {
        title: '预览',
        padding: 10,
        flex: 1,
        xtype: 'uxiframe',
        src: ''

    }],
    listeners: {
        tabchange: 'onTabChange'
    }
});