Ext.define('DRDMS.view.keyword.KeywordModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.keyword',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: '/base/codesByType/Tag'
            }
        },
        entity : {
            model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
