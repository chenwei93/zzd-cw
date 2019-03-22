/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RBase.view.resourcepool.ResourcePoolModel', {
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
                url: '/rbase/api/resourcePools'
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
