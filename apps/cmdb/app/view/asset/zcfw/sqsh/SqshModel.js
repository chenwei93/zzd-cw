Ext.define('Cmdb.view.asset.zcfw.sqsh.SqshModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sqsh',

    data: {
        btnText: '按钮'
    },

    stores: {
        list: {
            // model: 'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/a'
            }
        },
        entity: {
            // model:'Zcfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
