Ext.define('Cmdb.model.Wddb', {
    extend: 'Cmdb.model.Base',

    fields: ['y_title', 'name', 'status', 'c_time', 'pre_person', 'now_person',
        'next_person', 'type', 'tabId', 'event_type', 'all_event', 'needType',
        'sl_code',
    ],

    proxy: {
        type: 'localstorage',
        id: 'wddb'
    }
});