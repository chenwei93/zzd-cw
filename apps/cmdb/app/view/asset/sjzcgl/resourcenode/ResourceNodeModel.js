/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Cmdb.view.asset.sjzcgl.resourcenode.ResourceNodeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.resourcenode',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'ResourceNode',
            proxy: {
                type: 'ajax2',
                // url: '/rbase/api/resourceNodes'
                url: 'app/store/data/asset/resourcenode/resourcenode.json'
            }
        },

        entity: {
            model: 'ResourceNode',
            proxy: {
                type: 'ajax',
                url: '/rbase/api/resourceNodes/{entityId}'
            }
        }
    }
});
