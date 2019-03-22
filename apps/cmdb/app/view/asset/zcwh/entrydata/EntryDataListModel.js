Ext.define('Cmdb.view.asset.zcwh.entrydata.EntryDataListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entrydata-list',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntryData',
            pageSize: 25,
            proxy: {
                type: 'ajax2',
                // url: '/drdms/api/entryDatas',
                url: 'app/store/data/asset/entrydata/entryDatas.json',
                reader: {
                    type: 'resultset',
                    beforeCallback: function (responseData) {
                        var data = responseData.content;
                        for (var j = 0; j < data.length; j++) {
                            var extra = data[j].extraAttributes;
                            if (extra != null) {
                                var arr = Object.keys(extra);
                                for (var i = 0; i < arr.length; i++) {
                                    var sx = arr[i];
                                    if (extra[sx] != null) {
                                        if (data[j][sx] != null && data[j][sx].hasOwnProperty('value')) {
                                            data[j][sx] = data[j][sx].value;
                                        }
                                        data[j][sx] = extra[sx]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        entity: {
            model: 'EntryData',
            proxy: {
                type: 'ajax2',
                url: 'app/view/entrydata/data/{entityId}.json',
                reader: 'result'
            }
        }
    }
});