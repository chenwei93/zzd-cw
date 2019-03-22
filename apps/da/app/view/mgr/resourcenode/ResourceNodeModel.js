/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.mgr.resourcenode.ResourceNodeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resourcenode',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'ResourceNode',
            proxy: {
                type: 'ajax2',
                // url: '/rest/resourceNodes'
                url1: 'resources/data/mgr/rnode/ResourceNode.json',
                url: 'http://192.17.2.2/ResourceNode.json'
            }
        },

        entity: {
            model: 'ResourceNode',
            proxy: {
                type: 'ajax',
                // url: '/rest/resourceNodes/{entityId}',
                url: 'resources/data/mgr/rnode/{entityId}.json',

                reader: {
                    transform: function (rs) {
                        var ports = rs.ports;
                        if (ports) {
                            var duankou = Object.keys(ports),
                                xieyi = Object.values(ports);
                            rs.duankou = duankou;
                            rs.xieyi = xieyi;
                        }
                        return rs
                    }
                }
            }
        }
    }
});
