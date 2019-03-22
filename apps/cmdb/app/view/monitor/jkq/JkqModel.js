Ext.define('Cmdb.view.monitor.jkq.JkqModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.jkq',

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
