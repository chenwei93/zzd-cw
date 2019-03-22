Ext.define('Cmdb.view.business.mlzl.MlzlModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.mlzl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: 'app/view/business/mlzl/data/mlzl.json'
            }
        },
        list2: {
            proxy: {
                type: 'ajax2',
                url: 'app/view/business/mlzl/data/mlzlEntry.json'
            }
        },
        list3: {
            proxy: {
                type: 'ajax2',
                url: 'app/view/business/mlzl/data/mlzlServer.json'
            }
        },

        entity: {
            // model:'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
