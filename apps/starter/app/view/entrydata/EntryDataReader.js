Ext.define('Starter.view.entrydata.EntryDataReader', {
    extend: 'Ext.data.JsonReader',

    alias: 'reader.entrydata-reader',

    config: {
        transform: function (responseData) {
            var data = responseData.content;
            for (var j = 0; j < data.length; j++) {
                var extra = data[j].extraAttributes,
                    arr = Object.keys(extra);
                for (var i = 0; i < arr.length; i++) {
                    var sx = arr[i];
                    if (extra[sx] != null) {
                        if (data[j][sx] != null && data[j][sx].hasOwnProperty('value')) {
                            console.log(sx);
                            data[j][sx] = data[j][sx].value;
                        }
                        data[j][sx] = extra[sx]
                    }
                }
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

            return responseData;
        },

        type: 'json',

        rootProperty: 'content',
        totalProperty: 'page.totalElements'
    }
});