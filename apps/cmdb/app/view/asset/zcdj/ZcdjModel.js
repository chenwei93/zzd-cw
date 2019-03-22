Ext.define('Cmdb.view.asset.zcdj.ZcdjModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zcdj',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Zcfw',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/asset/zcdj/Zcdj.json'
            }
        },
        entity: {
            // model:'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
