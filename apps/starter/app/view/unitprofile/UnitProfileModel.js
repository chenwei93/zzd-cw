/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.unitprofile.UnitProfileModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.unitprofile',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 20,
            model: 'UnitProfiles',
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                url: '/rest/unitProfiles'
            }
        },

        entity: {
            pageSize: 20,
            model: 'EntryData',
            proxy: {
                type: 'ajax2',
                url: '/rest/entryDatas/{entityId}',
                reader: 'result'
            }
        }
    }
});
