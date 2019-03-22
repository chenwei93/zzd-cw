Ext.define('DA.model.Services', {
    extend: 'DA.model.Base',

    fields: [
        'qualified', 'name', 'title', {
            name: 'node',
            mapping: 'node.title',
            type: 'string'
        }, {
            name: 'type',
            mapping: function (data) {
                var value = data.type;
                if (value == 'Default') {
                    value = '基础服务'
                } else if (value == 'SYSTEM') {
                    value = '系统默认服务'
                } else if (value == 'Custom') {
                    value = '自定义服务'
                }
                return value
            }
        }, {
            name: 'url',
            mapping: function (data) {
                var id = data.id;
                var value = data.qualified;
                var obj = {
                    'ENTITY!': "/api/" + id,
                    'EXT_ATTACHMENT': '/api/' + id,
                    'EXT_UPDATE': '/api/' + id,
                    'ENTITY$': '/api/' + id,
                };
                if (obj[value]) {
                    return obj[value]
                } else {
                    return '/api/' + id
                }
            }
        }, {
            name: 'whurl',
            mapping: function (data) {
                var id = data.id;
                if (id) {
                    // return '/ap/server/services/' + id;
                    return '/api/' + id;
                }
            }
        }, {
            name: 'CacheExpire',
            mapping: function (data) {
                if (data.configuration) {
                    if (data.configuration.attributes) {
                        return data.configuration.attributes.CacheExpire
                    }

                }

            }
        }, {
            name: 'LimitPerHour',
            mapping: function (data) {
                if (data.configuration) {
                    if (data.configuration.attributes) {
                        return data.configuration.attributes.LimitPerHour

                    }
                }

            }
        }, {
            name: 'requestType',
            mapping: function (data) {
                if (data.configuration) {
                    if (data.configuration.attributes) {
                        return data.configuration.attributes.requestType

                    }
                }

            }
        }

    ]
});
