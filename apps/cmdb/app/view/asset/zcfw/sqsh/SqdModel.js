Ext.define('Cmdb.view.asset.zcfw.sqsh.SqdModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sqd',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Gdfw',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'app/store/data/asset/zcfw/Sqsh.json',

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
