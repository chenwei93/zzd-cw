Ext.define('Cmdb.view.mgr.fwzxgl.FwzxglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.fwzxgl',

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
