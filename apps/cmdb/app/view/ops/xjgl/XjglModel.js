Ext.define('Cmdb.view.ops.xjgl.XjglModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.xjgl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Xjgl',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/ops/gdgl/Grdb.json'

            }
        },
        entity: {
            // model:'Xjgl',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
