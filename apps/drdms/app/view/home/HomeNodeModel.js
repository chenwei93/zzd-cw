Ext.define('DRDMS.view.home.HomeNodeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.homenode',
    data: {
        entityId: ''
    },

    stores: {
        rejected: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/changes?confirm=false'
            }
        },
        generated: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query=example&biz.currentState=Generated'
            }
        },
    }
});