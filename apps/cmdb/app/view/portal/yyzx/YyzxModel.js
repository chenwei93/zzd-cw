Ext.define('Cmdb.view.portal.yyzx.YyzxModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.yyzx',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Yyzx',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity : {
            // model:'Yyzx',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
