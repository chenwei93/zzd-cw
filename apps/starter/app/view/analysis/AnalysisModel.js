Ext.define('Starter.view.analysis.AnalysisModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.analysis',

    data: {
        entityId: ''
    },

    stores: {
        column: {
            autoLoad: true,
            fields: [{
                name: 'dept',
                mapping: 'department.name'
            }, {
                name: 'data1',
                mapping: 'fileValue.items'
            }, {
                name: 'data2',
                mapping: 'dbValue.size'
            }],
            proxy: {
                type: 'ajax',
                url: '/api/statByDepartment',
                reader: {
                    type: 'json',
                    rootProperty: 'array'
                }
            }
        },
        line: {
            autoLoad: true,
            fields: [{
                name: 'dateDisplay'
            }, {
                name: 'data1',
                mapping: 'dbValue.items'
            }, {
                name: 'data2',
                mapping: 'fileValue.items'
            }],
            proxy: {
                type: 'ajax',
                url: '/api/statByDate',
                reader: {
                    type: 'json',
                    rootProperty: 'array'
                }
            }
        },
        pie: {
            autoLoad: true,
            fields: [{
                name: 'dateDisplay',
                mapping: 'department.name'
            }, {
                name: 'data1',
                mapping: 'fileValue.items'
            }, {
                name: 'data2',
                mapping: 'dbValue.total'
            }, {
                name: 'data3',
                mapping: 'dbValue.items'
            }],
            proxy: {
                type: 'ajax',
                url: '/api/statByDepartment',
                reader: {
                    type: 'json',
                    rootProperty: 'array'
                }
            }
        },

        entity: {
            proxy: {
                type: 'ajax2',
                url: '/rest/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});