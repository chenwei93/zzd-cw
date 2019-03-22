Ext.define('Cmdb.view.asset.zcywgl.ZcywglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zcywgl',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity : {
            // model:'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
