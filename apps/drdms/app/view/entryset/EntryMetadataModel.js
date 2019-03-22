/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.entryset.EntryMetadataModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entrymetadata',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntryMetadata',
            pageSize: 20,
            type: 'tree',
            folderSort: true,
            proxy: {
                type: 'ajax',
                url: '/drdms/api/tree/package',
                reader: {
                    // rootProperty: 'children',
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
            // model:'Resource',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/resources/{entityId}',
                reader: 'result'
            }
        }
    }
});
