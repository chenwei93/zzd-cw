Ext.define('Cmdb.model.AllDb', {
    extend: 'Cmdb.model.Base',
    fields: ['person', 'des', 'nextperson', 'status',
        'tabId', 'event_status', 'region',
        'rb_auto', 'gddes', 'eventtype',
        'needType',
        'title', 'name', 'status', 'c_time', 'pre_person', 'now_person',
        'next_person', 'type', 'tabId', 'event_type', 'all_event', 'needType',
        'sl_code'],

    proxy: {
        type: 'localstorage',
        id: 'alldb'
    }
});