Ext.define('Cmdb.model.asset.Sjkfgl', {
    extend: 'Cmdb.model.Base',

    fields: ['title', 'name', 'status', 'c_time', 'pre_person', 'now_person',
        'next_person', 'type', 'tabId', 'event_type', 'all_event'
    ],

    proxy: {
        type: 'localstorage',
        id: 'sjkfgl'
    }
});