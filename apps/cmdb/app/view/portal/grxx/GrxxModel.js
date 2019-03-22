Ext.define('Cmdb.view.portal.grxx.GrxxModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.grxx',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Grxx',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/portal/grxx/Grxx.json'
            }
        },
        entity : {
            // model:'Grxx',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
