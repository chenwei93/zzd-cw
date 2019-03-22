/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Cmdb.view.asset.sjzcgl.resourcepool.ResourcePoolModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.resourcepool',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'ResourcePool',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/asset/resourcepool/resourcepool.json'

            }
        },
        entity: {
            model: 'ResourcePool',
            proxy: {
                type: 'ajax',
                url: '/rbase/api/resourcePools/{entityId}'
            }
        }
    }
});
