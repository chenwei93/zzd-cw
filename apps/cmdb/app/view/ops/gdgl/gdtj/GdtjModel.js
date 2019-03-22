Ext.define('Cmdb.view.ops.gdgl.gdtj.GdtjModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gdtj',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Gdcx',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Gdcx.json'
            }
        },
        entity: {
            // model:'Gdcx',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
