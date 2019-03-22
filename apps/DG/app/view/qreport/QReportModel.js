Ext.define('DG.view.qreport.QReportModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.qreport',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 15,
            proxy: {
                type: 'ajax',
                url: '/data-quality-rest/v1/job/result/pageResult',
                actionMethods: {
                    read: 'POST'
                },
                paramsAsJson: true,
                extraParams: {
                    "rows": 15,
                    "entity": {
                        "ruleName": "",
                        "tableName": "",
                        "beginTime": "",
                        "endTime": ""
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
