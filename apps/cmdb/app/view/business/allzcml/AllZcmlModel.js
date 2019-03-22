Ext.define('Cmdb.view.business.allzcml.AllZcmlModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.allzcml',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax',
                url: 'app/view/business/allzcml/data/AllEntryList.json',
                reader:{
                    rootProperty: function (rs) {
                        if (rs.children != null) {
                            if (rs.children.length == 1) {
                                return rs.children[0].children;
                            } else {
                                return rs.children

                            }
                        }
                    }
                }
            }
        },
        entity: {
            // model:'Gdfw',
            proxy: {
                type: 'ajax',
                url: '/api/Resource/{entityId}',
            }
        }
    }
});
