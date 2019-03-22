Ext.define('DA.view.entry.services.chooseCreateJK', {
    extend: 'Ext.panel.Panel',
    xtype: 'choose-createjk',


    requires:[
        'DA.view.entry.services.SchooseCreateJKController'
    ],
    controller: 'choose-createjk',
    layout: 'column',
    defaults: {
        margin: '3 0 0 50',
        columnWidth: 1
    },
    items: [{
        xtype: 'displayfield',
        value: '确定保存当前修改？',
    }, {
        reference: 'judejk',
        xtype: 'checkboxfield',
        boxLabel: '是否同时生成接口?',
        name: 'judejk',
        inputValue: '1',
    }],
    buttons: {
        items: [{
            text: '确定',
            handler: 'onChooseYes'
        }, {
            text: '取消',
            handler: 'onChooseNo'

        }]
    }

});
