Ext.define('Cmdb.view.asset.yzyzcgl.zypzgl.ZypzglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zypzgl',

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
