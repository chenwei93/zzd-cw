Ext.define('Cmdb.view.ops.rzgl.RzglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rzgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Shenjgl',
            pageSize: 10,
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/rzgl/rzgl.json'

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
