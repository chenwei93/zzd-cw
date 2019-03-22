Ext.define('Starter.view.news.News', {
    extend: 'Ext.form.Panel',
    xtype: 'news',


    requires: [
        'Starter.view.news.NewsController'
    ],
    controller: 'news',
    tbar: {
        reference: 'tbar',
        items: [{
            text: '提交',
            ui: 'default',
            handler: 'onSubmit'

        }, {
            text: '取消',
            handler: 'onCancel'
        }]
    },
    layout: 'column',
    bodyPadding: 10,
    defaults: {
        columnWidth: 0.5,
        margin: 5
    },

    items: [],
    listeners: {
        render: 'onNewsRender'
    }
});
