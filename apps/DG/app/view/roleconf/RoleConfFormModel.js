Ext.define('DG.view.roleconf.RoleConfFromModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.roleconf-form',

    data: {},

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/QReport.json'
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
