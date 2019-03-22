Ext.define('DA.view.gzt.zhgzt.ZhgztModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.zhgzt',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            // model: 'Zhgzt',
            proxy: {
                type: 'ajax2',
                url: 'resources/data/zhgzt/db.json'
            }
        },
        list1: {
            // model: 'Zhgzt',
            proxy: {
                type: 'ajax2',
                url: 'resources/data/zhgzt/contacts.json'
            }
        },
        entity : {
            // model:'Zhgzt',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
