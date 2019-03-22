Ext.define('Cmdb.view.dashboard.gz.ywbl.YwblModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.ywbl',

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
