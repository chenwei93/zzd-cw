Ext.define('Cmdb.view.dashboard.gz.rykq.RykqModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rykq',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Sjgl',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity: {
            // model:'Sjgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
