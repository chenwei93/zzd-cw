Ext.define('DA.view.mgr.gdfl.GdflModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gdfl',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Gdfw',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/mgr/workorder/gdfl.json'
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
