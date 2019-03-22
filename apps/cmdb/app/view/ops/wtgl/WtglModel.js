Ext.define('Cmdb.view.ops.wtgl.WtglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.wtgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Wtgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Wtgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
