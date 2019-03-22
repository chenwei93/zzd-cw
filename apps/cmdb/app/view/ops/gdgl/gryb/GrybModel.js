Ext.define('Cmdb.view.ops.gdgl.gryb.GrybModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gryb',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Gryb',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity: {
            // model:'Gryb',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
