Ext.define('Cmdb.view.mgr.jkgl.JkglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.jkgl',

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
