/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RBase.view.resourcenode.ResourceNodeModel', {
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
                url: '/rbase/api/resourceNodes'
                // url: 'app/view/resourcenode/demo.json'
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
