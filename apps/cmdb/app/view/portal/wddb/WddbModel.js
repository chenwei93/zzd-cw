Ext.define('Cmdb.view.portal.wddb.WddbModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.wddb',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            model: 'Wddb',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/portal/wddb/db.json'
            }
        },
        entity : {
            // model:'Wddb',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
