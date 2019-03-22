Ext.define('Cmdb.view.ops.yjylgl.YjylglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.yjylgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Yjylgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Yjylgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
