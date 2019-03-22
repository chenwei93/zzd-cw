Ext.define('Cmdb.model.TimeLine', {
    extend: 'Cmdb.model.Base',

    fields: ['name', 'content', 'date', 'notificationType', 'tabId'],

    proxy: {
        type: 'localstorage',
        id: 'TimeLine'
    }
});