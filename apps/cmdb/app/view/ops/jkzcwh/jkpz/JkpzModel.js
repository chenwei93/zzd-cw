Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.jkpzx',

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
