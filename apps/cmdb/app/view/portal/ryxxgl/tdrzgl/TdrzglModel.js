Ext.define('Cmdb.view.portal.ryxxgl.tdrzgl.TdrzglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.tdrzgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Tdrzgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity: {
            // model:'Tdrzgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
