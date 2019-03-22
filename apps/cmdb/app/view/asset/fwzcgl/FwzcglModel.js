Ext.define('Cmdb.view.asset.fwzcgl.FwzcglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.fwzcgl',

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
