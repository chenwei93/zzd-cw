Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.fwsmwh',

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
