Ext.define('DG.view.bloodshow.BloodShowModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.bloodshow',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 15,
            proxy: {
                type: 'ajax',
                url: '/narcissus-data-bond-rest/data/bond/table/pageList',
                actionMethods: {
                    read: 'POST'
                },
                paramsAsJson: true,
                extraParams: {
                    "rows": 15,
                    "entity": {
                        "nameCh": "",
                        "nameEn": "",
                        "description": ""
                    }
                },
                reader: {
                    rootProperty: 'list'
                }
            }
        },

        entity: {
            // model:'Resource',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
