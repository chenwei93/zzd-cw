Ext.define('Cmdb.view.mgr.lcgl.lcpz.LcpzModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.lcpz',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Gdfw',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/mgr/lcgl/Lcpz.json'
            }
        },
        entity: {
            // model:'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
