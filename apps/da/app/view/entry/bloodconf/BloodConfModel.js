Ext.define('DA.view.entry.bloodconf.BloodConfModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.bloodconf',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 15,
            proxy: {
                type: 'ajax',
                url1: 'app/store/data/BloodConf.json',
                url: '/narcissus-data-bond-rest/data/bond/table/column/mapping/pageList',
                actionMethods: {
                    create: 'POST',
                    read: 'POST',
                    update: 'POST',
                    destroy: 'POST'
                },
                paramsAsJson: true,
                extraParams: {
                    "rows": 15,
                    "entity": {
                        "sourceColumnCh": "",
                        "sourceColumnEn": "",
                        "targetColumnCh": "",
                        "targetColumnEn": ""
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
