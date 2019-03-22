Ext.define('DRDMS.view.pages.Error404', {
    extend: 'DRDMS.view.pages.ErrorBase',
    xtype:'page404',

    items:[{
        cls: 'error-page-top-text',
        html: '404'
    },{
        cls: 'error-page-desc',
        html: '<p>Seems you\'ve hit a wall!</p><p>Try going back to our ' +
        '<a href="#dashboard"> Home page </a></p>'
    }]
});
