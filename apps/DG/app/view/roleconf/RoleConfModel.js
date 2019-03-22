Ext.define('DG.view.roleconf.RoleConfModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.roleconf',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax',
                url: '/data-quality-rest/v1/rule/pageResult',
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
                        "name": "",
                        "status": '',
                        "jobType": '',
                        "beginCreateTime": "",
                        "endCreateTime": ""
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
