Ext.define('Cmdb.view.asset.zckgl.gxgl.GxglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gxgl',

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
