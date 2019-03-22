Ext.define('Cmdb.view.portal.ryxxgl.kqgl.KqglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.kqgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Kqgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity: {
            // model:'Kqgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
