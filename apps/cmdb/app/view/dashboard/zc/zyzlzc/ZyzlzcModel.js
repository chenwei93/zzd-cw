Ext.define('Cmdb.view.dashboard.zc.zyzlzc.ZyzlzcModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zyzlzc',

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
