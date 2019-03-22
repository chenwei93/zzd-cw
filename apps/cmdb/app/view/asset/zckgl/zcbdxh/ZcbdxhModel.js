Ext.define('Cmdb.view.asset.zckgl.zcbdxh.ZcbdxhModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zcbdxh',

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
