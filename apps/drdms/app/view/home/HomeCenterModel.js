Ext.define('DRDMS.view.home.HomeCenterModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.homecenter',

    data: {
        entityId: ''
    },

    stores: {
        unapproved: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query=example&biz.currentState=UnApproved'
            }
        },
        unpublished: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query=example&biz.currentState=UnPublished',
            }
        },
    }
});