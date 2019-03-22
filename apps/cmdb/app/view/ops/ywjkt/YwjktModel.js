Ext.define('Cmdb.view.ops.ywjkt.YwjktModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.ywjkt',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Ywjkt',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity : {
            // model:'Ywjkt',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
