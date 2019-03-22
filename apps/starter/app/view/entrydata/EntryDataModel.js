/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.entrydata.EntryDataModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entrydata',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntryData',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/fullEntryData',
                reader: 'entrydata-reader'
                //     rootProperty: 'content',
                //     totalProperty: 'page.totalElements',
                //     transform: function (rs) {
                //         var data = rs.content;
                //         for (var j = 0; j < data.length; j++) {
                //             var extra = data[j].extraAttributes,
                //                 arr = Object.keys(extra);
                //             for (var i = 0; i < arr.length; i++) {
                //                 var sx = arr[i];
                //                 if (extra[sx] != null) {
                //                     if (data[j][sx] != null && data[j][sx].hasOwnProperty('value')) {
                //                         console.log(sx);
                //                         data[j][sx] = data[j][sx].value;
                //                     }
                //                     data[j][sx] = extra[sx]
                //                 }
                //             }
                //         }
                //         if (rs.page == null) {
                //             var page = {
                //                 "size": rs.size,
                //                 "totalElements": rs.totalElements,
                //                 "totalPages": rs.totalPages,
                //                 "number": rs.number,
                //                 "sort": rs.sort
                //             };
                //             rs.page = page;
                //         }
                //         return rs;
                //     }
                // }
            }
        },

        entity: {
            model: 'EntryData',
            proxy: {
                type: 'ajax2',
                url: '/rest/entryDatas/{entityId}',
                reader: 'result'
            }
        }
    }
});
