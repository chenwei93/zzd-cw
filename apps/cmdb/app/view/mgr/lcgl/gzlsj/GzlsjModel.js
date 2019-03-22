Ext.define('Cmdb.view.mgr.lcgl.gzlsj.GzlsjModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gzlsj',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity : {
            // model:'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
