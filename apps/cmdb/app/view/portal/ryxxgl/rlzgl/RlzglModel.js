Ext.define('Cmdb.view.portal.ryxxgl.rlzgl.RlzglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rlzgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Rlzgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity: {
            // model:'Rlzgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
