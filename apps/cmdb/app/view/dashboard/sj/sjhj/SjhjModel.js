Ext.define('Cmdb.view.dashboard.sj.sjhj.SjhjModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sjhj',

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
