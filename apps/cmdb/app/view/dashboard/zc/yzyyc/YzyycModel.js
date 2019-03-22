Ext.define('Cmdb.view.dashboard.zc.yzyyc.YzyycModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.yzyyc',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Sjgl',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity: {
            // model:'Sjgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
