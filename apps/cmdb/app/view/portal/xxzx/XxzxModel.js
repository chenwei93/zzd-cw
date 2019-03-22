Ext.define('Cmdb.view.portal.xxzx.XxzxModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.xxzx',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Xxzx',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/portal/xxzx/xxzx.json'
            }
        },
        entity : {
            // model:'Xxzx',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
