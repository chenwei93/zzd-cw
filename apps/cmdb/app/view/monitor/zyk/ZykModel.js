Ext.define('Cmdb.view.monitor.zyk.ZykModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zyk',

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
