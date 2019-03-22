Ext.define('Cmdb.view.ops.gdgl.gdcx.GdcxModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gdcx',

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
