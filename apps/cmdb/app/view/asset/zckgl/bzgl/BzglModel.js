Ext.define('Cmdb.view.asset.zckgl.bzgl.BzglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.bzgl',

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
