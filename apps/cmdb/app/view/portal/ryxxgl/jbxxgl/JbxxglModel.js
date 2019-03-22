Ext.define('Cmdb.view.portal.ryxxgl.jbxxgl.JbxxglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.jbxxgl',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Jbxxgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'
            }
        },
        entity : {
            // model:'Jbxxgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
