Ext.define('Cmdb.view.ops.xmgl.XmglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.xmgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Xmgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Xmgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
