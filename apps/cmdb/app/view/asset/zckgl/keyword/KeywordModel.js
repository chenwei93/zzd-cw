Ext.define('Cmdb.view.asset.zckgl.keyword.KeywordModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.keyword',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/asset/entry/Tag.json',
            }
        },
        entity: {
            model: 'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
