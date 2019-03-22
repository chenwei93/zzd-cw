Ext.define('Cmdb.view.portal.zhgzt.ZhgztModel', {
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
                url: 'app/store/data/portal/zhgzt/db.json'
            }
        },
        list1: {
            // model: 'Zhgzt',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/portal/zhgzt/contacts.json'
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
