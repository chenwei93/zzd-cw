Ext.define('Cmdb.view.dashboard.sj.sjgx.SjgxModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sjgx',

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
