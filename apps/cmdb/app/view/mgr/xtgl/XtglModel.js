Ext.define('Cmdb.view.mgr.xtgl.XtglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.xtgl',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/a'
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
