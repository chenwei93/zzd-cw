Ext.define('Cmdb.view.monitor.sjt.SjtModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sjt',

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
