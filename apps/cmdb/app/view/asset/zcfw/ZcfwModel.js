Ext.define('Cmdb.view.asset.zcfw.ZcfwModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zcfw',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Gdfw',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity : {
            // model:'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
