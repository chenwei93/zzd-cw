Ext.define('Cmdb.view.portal.ryxxgl.ryddgl.RyddglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.ryddgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Ryddgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity: {
            // model:'Ryddgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
