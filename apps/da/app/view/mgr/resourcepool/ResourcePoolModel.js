/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.mgr.resourcepool.ResourcePoolModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resourcepool',

    data: {
        entityId: '',
        allowFormat: '',
        projection:'',

        rNode: '',
        dType: '',
        path: '',
        extra: '',


    },

    stores: {
        list: {
            model: 'ResourcePool',
            proxy: {
                type: 'ajax2',
                url1: '/rest/resourcePools',
                url: 'resources/data/mgr/rpool/ResourcePool.json',
            }
        },
        entity: {
            model: 'ResourcePool',
            proxy: {
                type: 'ajax',
                url: '/rest/resourcePools/{entityId}?projection={projection}'
            }
        }
    }
});
