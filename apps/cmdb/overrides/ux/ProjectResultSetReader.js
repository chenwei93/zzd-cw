Ext.define('Cmdb.ux.ProjectResultSetReader', {
    extend: 'Ext.data.JsonReader',

    alias: 'reader.resultset',

    config: {
        transform: function (responseData) {
            if (this.beforeCallback) {
                this.beforeCallback(responseData);
            }
            responseData.success = true;

            if (responseData.content && responseData.content.length == 1) {
                if (responseData.content[0].id == null) responseData.content = [];
            }

            if (responseData.page == null) {
                var page = {
                    "size": responseData.size,
                    "totalElements": responseData.totalElements,
                    "totalPages": responseData.totalPages,
                    "number": responseData.number,
                    "sort": responseData.sort
                };
                responseData.page = page;
            }

            if (this.afterCallback) {
                this.afterCallback(responseData);
            }
            return responseData;
        },

        type: 'json',

        rootProperty: 'content',
        totalProperty: 'page.totalElements'
    }
});