Ext.define('Cmdb.view.dashboard.gz.gdcl.GdclModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gdcl',

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
