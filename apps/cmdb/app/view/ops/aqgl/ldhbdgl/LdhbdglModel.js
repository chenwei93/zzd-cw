Ext.define('Cmdb.view.ops.aqgl.ldhbdgl.LdhbdglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.ldhbdgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Sjgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Sjgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
