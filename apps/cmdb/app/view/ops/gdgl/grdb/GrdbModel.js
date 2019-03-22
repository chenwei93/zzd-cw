Ext.define('Cmdb.view.ops.gdgl.grdb.GrdbModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.grdb',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Grdb',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity: {
            // model:'Grdb',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
