Ext.define('DA.view.dataservice.entrychangelog.EntryChangeLogModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.entry-changelog',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url1: '/drdms/api/changes',
                url: 'resources/data/dataservice/entry/changelogcenter.json'
            }
        },

        entity: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries/{entityId}'
            }
        }
    }
});
