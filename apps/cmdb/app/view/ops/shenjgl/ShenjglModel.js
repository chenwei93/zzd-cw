Ext.define('Cmdb.view.ops.shenjgl.ShenjglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.shenjgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Shenjgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Shenjgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
