Ext.define('AP.ux.ProjectResultReader', {
    extend: 'Ext.data.JsonReader',

    alias: 'reader.result',

    config: {
        transform: function (responseData) {
            if (this.beforeCallback) {
                this.beforeCallback(responseData);
            }

            responseData.success = true;

            if (this.afterCallback) {
                this.afterCallback(responseData);
            }

            return responseData;
        },
        rootProperty: ''
    }
});