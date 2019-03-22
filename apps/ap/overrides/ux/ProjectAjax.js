Ext.define('AP.ux.ProjectAjax', {
    extend: 'Ext.data.proxy.Rest',

    alias: 'proxy.ajax2',

    requires: [
        'AP.ux.ProjectResultReader',
        'AP.ux.ProjectResultSetReader'
    ],

    config : {
        reader:'resultset',
        startParam: '',
        pageParam: 'page',
        limitParam: 'size'
    },
    getParams: function() {
        var params = this.callParent(arguments);

        var page = params.page;
        if (page && page > 0) params.page = page - 1;

        return params;
    }
});