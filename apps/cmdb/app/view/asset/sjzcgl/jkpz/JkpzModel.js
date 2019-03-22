Ext.define('Cmdb.view.asset.sjzcgl.jkpz.JkpzModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.jkpz',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity : {
            // model:'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
