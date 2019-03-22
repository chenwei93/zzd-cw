Ext.define('Cmdb.view.ops.zbgl.ZbglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zbgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Zbgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Zbgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
