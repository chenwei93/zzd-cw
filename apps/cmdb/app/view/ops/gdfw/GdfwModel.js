Ext.define('Cmdb.view.ops.gdfw.GdfwModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gdfw',

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
